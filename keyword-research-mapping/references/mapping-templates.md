# On-site Mapping Templates

## Markdown table (compact)

| cluster_id | primary_keyword | intent_primary | target_url | page_role | priority | notes |
|------------|-----------------|----------------|------------|-----------|----------|-------|
| c01 | sample keyword | informational | /guide/example/ | pillar | P1 | to be validated in GSC |

- `page_role`: `pillar` | `support` | `product` | `category` | `comparison` | `landing` | `other`
- `priority`: `P0` (core conversion) / `P1` / `P2` / `P3`

## CSV header (aligned with validation script)

```text
cluster_id,primary_keyword,intent_primary,intent_secondary,target_url,page_role,priority,notes
```

- `target_url` should be an on-site path starting with `/`.
- A `primary_keyword` should map to one primary `target_url`; if multiple URLs are needed, explain ownership in `notes`.

## Support-link table (optional second sheet)

| from_url | to_url | anchor_suggestion | purpose |
|----------|--------|-------------------|---------|
| /blog/a/ | /product/x/ | specific product name | intent upgrade toward conversion |

## Delivery notes

- New site: planning URLs are allowed (mark as `to build`).
- Existing site: fill current URLs first, then add recommendation deltas.
