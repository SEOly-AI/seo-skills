#!/usr/bin/env node
'use strict';

const template = {
  sections: [
    'incident_summary',
    'decline_timeline',
    'segment_impact_map',
    'diagnosis_hypotheses',
    'root_cause_confidence_matrix',
    'remediation_backlog',
    'weekly_recovery_tracking',
  ],
};

console.log(JSON.stringify(template, null, 2));
