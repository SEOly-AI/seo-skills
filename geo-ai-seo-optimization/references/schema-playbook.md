# AI-Focused Schema Playbook

## Recommended schema by page type

| Page type | Primary schema | Supporting schema |
|----------|-----------------|-------------------|
| Blog/guide | `Article` | `Organization`, `BreadcrumbList` |
| FAQ page | `FAQPage` | `Organization`, `BreadcrumbList` |
| Product page | `Product` | `Offer`, `AggregateRating` (if valid), `BreadcrumbList` |
| Tutorial | `HowTo` | `Article`, `BreadcrumbList` |
| Brand/about | `Organization` | `WebSite`, `SameAs` |

## Implementation rules

- Mark up only visible and truthful page content.
- Fill required fields first, then recommended fields.
- Keep schema aligned with page intent and content type.
- Avoid stacking irrelevant schema types to force visibility.

## Validation checklist

1. Pass structured data validation tools.
2. No missing required properties.
3. No contradictory fields (e.g., mismatched entity names).
4. Proper nesting and URL consistency.

