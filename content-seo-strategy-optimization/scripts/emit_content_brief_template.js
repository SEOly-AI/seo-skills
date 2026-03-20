#!/usr/bin/env node
'use strict';

const template = {
  fields: [
    'content_goal',
    'target_audience',
    'search_intent',
    'primary_keyword',
    'secondary_keywords',
    'unique_angle',
    'section_outline',
    'evidence_requirements',
    'internal_link_targets',
    'cta_goal',
  ],
};

console.log(JSON.stringify(template, null, 2));
