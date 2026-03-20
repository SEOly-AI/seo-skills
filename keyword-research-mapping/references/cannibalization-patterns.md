# Keyword Cannibalization Patterns

## Typical conflicts

1. **Multiple URLs target the same core keyword under same intent**
   Several pages (blog/product/category) compete for one primary term, causing ranking rotation or weak performance.
   **Action**: choose one primary URL; differentiate others by long-tail intent, merge content, or use 301/canonical strategy.

2. **Category page vs product page conflict**
   Category and detail pages both optimize for the same high-volume term.
   **Action**: decide intent owner clearly; one page owns the head term, the other shifts to modifiers/long-tail.

3. **Blog page outranks product-intent keyword**
   Informational content ranks for commercial terms but conversion path is weak.
   **Action**: strengthen CTA/internal links to product pages or reduce blog focus on the product core term.

4. **Multilingual/region duplicate templates**
   Similar content across language/region URLs can self-compete.
   **Action**: enforce hreflang + canonical strategy.

5. **Indexed pagination/filter parameter pages**
   Many low-value pages share overlapping titles and intent.
   **Action**: noindex low-value parameter pages, canonicalize to core category page, tighten internal links.

## Audit sequence

1. List all ranking URLs for the same core keyword (via GSC or site search).
2. Check whether intent differs (keep) or duplicates (consolidate).
3. Output explicit actions: keep owner URL / merge / 301 / retarget title-H1 / adjust anchor strategy.

## Suggested output format

| keyword_or_cluster | conflicting_urls | issue_type | recommended_primary | actions |
|--------------------|------------------|------------|---------------------|---------|
