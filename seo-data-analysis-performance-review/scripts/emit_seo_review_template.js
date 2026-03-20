#!/usr/bin/env node
'use strict';

const template = {
  sections: [
    'executive_summary',
    'kpi_overview',
    'traffic_ranking_conversion_analysis',
    'issue_diagnosis',
    'opportunity_backlog',
    'iteration_plan',
    'next_cycle_targets',
  ],
  required_dimensions: ['period', 'comparison_window', 'segments', 'source_tools'],
};

console.log(JSON.stringify(template, null, 2));
