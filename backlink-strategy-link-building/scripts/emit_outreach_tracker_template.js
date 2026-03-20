#!/usr/bin/env node
'use strict';

const trackerTemplate = {
  columns: [
    'prospect_domain',
    'source_type',
    'target_url',
    'relevance_score',
    'authority_tier',
    'outreach_status',
    'last_contact_date',
    'follow_up_due',
    'link_live_url',
    'link_attribute',
    'notes',
  ],
};

console.log(JSON.stringify(trackerTemplate, null, 2));

