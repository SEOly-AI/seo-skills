#!/usr/bin/env node
'use strict';

const checklist = {
  modules: [
    'crawl_and_index',
    'architecture',
    'core_web_vitals',
    'mobile_compatibility',
    'url_and_redirects',
  ],
  required_inputs: [
    'site_scale',
    'crawl_access',
    'recent_changes',
    'tool_access',
  ],
};

console.log(JSON.stringify(checklist, null, 2));

