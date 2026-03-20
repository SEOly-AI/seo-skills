#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const REQUIRED = [
  'site_domain',
  'site_type',
  'site_scale',
  'platform_architecture',
  'crawl_access',
  'recent_changes',
  'tool_access',
  'priority_modules',
  'kpis',
];

function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Error: missing file path. Usage: node scripts/validate_tech_seo_brief_json.js brief.json');
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

  if (!Array.isArray(data.priority_modules) || data.priority_modules.length === 0) {
    console.error('Invalid: priority_modules must be a non-empty array.');
    return 1;
  }
  if (!Array.isArray(data.kpis) || data.kpis.length === 0) {
    console.error('Invalid: kpis must be a non-empty array.');
    return 1;
  }

  console.log('OK: technical SEO brief passed validation.');
  return 0;
}

process.exit(main());

