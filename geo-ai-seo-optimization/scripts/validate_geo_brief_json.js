#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const REQUIRED_KEYS = [
  'site_type',
  'target_ai_platforms',
  'content_status',
  'schema_status',
  'intent_clusters',
  'kpis',
];

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Error: missing file path. Usage: node scripts/validate_geo_brief_json.js brief.json');
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

  const missing = REQUIRED_KEYS.filter((k) => !(k in data));
  if (missing.length) {
    missing.forEach((k) => console.error(`Missing key: ${k}`));
    return 1;
  }

  if (!Array.isArray(data.target_ai_platforms) || data.target_ai_platforms.length === 0) {
    console.error('Invalid: target_ai_platforms must be a non-empty array.');
    return 1;
  }
  if (!Array.isArray(data.intent_clusters) || data.intent_clusters.length === 0) {
    console.error('Invalid: intent_clusters must be a non-empty array.');
    return 1;
  }
  if (!Array.isArray(data.kpis) || data.kpis.length === 0) {
    console.error('Invalid: kpis must be a non-empty array.');
    return 1;
  }

  console.log('OK: GEO brief JSON passed validation.');
  return 0;
}

process.exit(main());

