#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const REQUIRED = [
  'page_url',
  'page_type',
  'target_queries',
  'search_intent',
  'conversion_goal',
  'competitor_urls',
];

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Error: missing file path. Usage: node scripts/validate_page_brief_json.js brief.json');
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

  if (!Array.isArray(data.target_queries) || data.target_queries.length === 0) {
    console.error('Invalid: target_queries must be a non-empty array.');
    return 1;
  }
  if (!Array.isArray(data.competitor_urls) || data.competitor_urls.length === 0) {
    console.error('Invalid: competitor_urls must be a non-empty array.');
    return 1;
  }

  console.log('OK: page optimization brief passed validation.');
  return 0;
}

process.exit(main());
