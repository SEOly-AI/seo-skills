#!/usr/bin/env node
'use strict';

const checklist = {
  metadata: ['title_tag', 'meta_description', 'canonical', 'indexability'],
  structure: ['h1', 'h2_h3_hierarchy', 'section_flow'],
  content: ['intent_alignment', 'depth', 'evidence', 'freshness'],
  media: ['alt_text', 'captions', 'supportive_visuals'],
  links: ['internal_links', 'anchor_quality', 'external_references'],
  ux: ['readability', 'cta_alignment', 'friction_points'],
};

console.log(JSON.stringify({ onpage_checklist: checklist }, null, 2));
