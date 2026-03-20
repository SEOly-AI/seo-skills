#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const REQUIRED = [
  'site_domain',
  'competitor_domains',
  'tool_access',
  'analysis_dimensions',
  'priority_markets',
  'budget_constraints',
  'kpis'
];

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Error: missing file path. Usage: node scripts/validate_competitor_brief_json.js brief.json');
    return 2;
  }

  const abs = path.resolve(process.cwd(), file);
  if (!fs.existsSync(abs)) {
    console.error(`Error: file not found: ${abs}`);
    return 2;
  }

  let data;
  try {
    data = JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    console.error(`Error: invalid JSON - ${e.message}`);
    return 2;
  }

  const missing = REQUIRED.filter((k) => !(k in data));
  if (missing.length) {
    missing.forEach((k) => console.error(`Missing key: ${k}`));
    return 1;
  }

  if (!Array.isArray(data.competitor_domains) || data.competitor_domains.length === 0) {
    console.error('Invalid: competitor_domains must be a non-empty array.');
    return 1;
  }
  if (!Array.isArray(data.analysis_dimensions) || data.analysis_dimensions.length === 0) {
    console.error('Invalid: analysis_dimensions must be a non-empty array.');
    return 1;
  }
  if (!Array.isArray(data.kpis) || data.kpis.length === 0) {
    console.error('Invalid: kpis must be a non-empty array.');
    return 1;
  }

  console.log('OK: competitor analysis brief passed validation.');
  return 0;
}

process.exit(main());
