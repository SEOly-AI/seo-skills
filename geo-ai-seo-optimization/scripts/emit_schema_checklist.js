#!/usr/bin/env node
'use strict';

const templates = [
  {
    page_type: 'blog_or_guide',
    required_schema: ['Article'],
    recommended_schema: ['Organization', 'BreadcrumbList'],
  },
  {
    page_type: 'faq_page',
    required_schema: ['FAQPage'],
    recommended_schema: ['Organization', 'BreadcrumbList'],
  },
  {
    page_type: 'product_page',
    required_schema: ['Product'],
    recommended_schema: ['Offer', 'AggregateRating', 'BreadcrumbList'],
  },
];

console.log(JSON.stringify({ schema_checklist_templates: templates }, null, 2));

