#!/usr/bin/env node
/**
 * Print standard mapping CSV header and one example row to stdout.
 *
 * Usage:
 *   node scripts/emit_mapping_template.js
 */

'use strict';

const HEADER =
  'cluster_id,primary_keyword,intent_primary,intent_secondary,' +
  'target_url,page_role,priority,notes';

const EXAMPLE =
  'c01,example keyword,informational,,/guide/example/,pillar,P1,replace with real data';

console.log(HEADER);
console.log(EXAMPLE);

