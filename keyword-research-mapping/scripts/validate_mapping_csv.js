#!/usr/bin/env node
/**
 * Validate keyword mapping CSV required columns and basic rules.
 *
 * Usage:
 *   node scripts/validate_mapping_csv.js mapping.csv
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const REQUIRED = [
  'cluster_id',
  'primary_keyword',
  'intent_primary',
  'target_url',
  'page_role',
  'priority',
];

function parseCSV(text) {
  // Minimal CSV parser with quoted field support.
  // Assumes commas as separator and \n line breaks.
  const rows = [];
  let row = [];
  let field = '';
  let i = 0;
  let inQuotes = false;

  // Strip UTF-8 BOM if present
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);

  while (i < text.length) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        const next = text[i + 1];
        if (next === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += char;
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }

    if (char === ',') {
      row.push(field);
      field = '';
      i += 1;
      continue;
    }

    if (char === '\r') {
      i += 1;
      continue;
    }

    if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i += 1;
      continue;
    }

    field += char;
    i += 1;
  }

  // last row (if file doesn't end with newline)
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function main() {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error('Error: missing csv_path argument');
    return 2;
  }

  const abs = path.resolve(process.cwd(), csvPath);
  if (!fs.existsSync(abs)) {
    console.error(`Error: file not found: ${abs}`);
    return 2;
  }

  const content = fs.readFileSync(abs, 'utf8');
  const rows = parseCSV(content);
  if (rows.length === 0) {
    console.error('Error: empty or invalid CSV');
    return 2;
  }

  const headerRow = rows[0].map((h) => (h ?? '').trim());
  const headerSet = new Set(headerRow);

  const missingCols = REQUIRED.filter((c) => !headerSet.has(c));
  if (missingCols.length > 0) {
    for (const c of missingCols) console.error(`Missing column: ${c}`);
    return 1;
  }

  const headerIndex = new Map();
  headerRow.forEach((h, idx) => headerIndex.set(h, idx));

  const errors = [];
  for (let r = 1; r < rows.length; r++) {
    const lineNo = r + 1; // human line number (1-based)
    const row = rows[r];
    for (const col of REQUIRED) {
      const idx = headerIndex.get(col);
      const val = (row[idx] ?? '').trim();
      if (!val) errors.push(`row ${lineNo}: missing or empty '${col}'`);
    }

    const targetUrl = (row[headerIndex.get('target_url')] ?? '').trim();
    if (targetUrl && !targetUrl.startsWith('/')) {
      errors.push(`row ${lineNo}: target_url should start with '/' (got ${JSON.stringify(targetUrl)})`);
    }
  }

  if (errors.length > 0) {
    for (const e of errors) console.error(e);
    return 1;
  }

  console.log('OK: mapping CSV passed basic validation.');
  return 0;
}

try {
  const code = main();
  process.exit(code);
} catch (err) {
  console.error(err?.stack || String(err));
  process.exit(2);
}

