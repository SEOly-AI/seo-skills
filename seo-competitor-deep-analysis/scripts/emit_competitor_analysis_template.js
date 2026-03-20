#!/usr/bin/env node
'use strict';

const template = {
  sections: [
    'competitor_scope',
    'traffic_landscape',
    'keyword_gap_map',
    'content_benchmark',
    'backlink_benchmark',
    'technical_conversion_benchmark',
    'opportunity_roadmap'
  ],
  required_dimensions: [
    'traffic',
    'keywords',
    'content',
    'backlinks',
    'technical',
    'conversion'
  ]
};

console.log(JSON.stringify(template, null, 2));
