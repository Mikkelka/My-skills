---
name: dedup
description: Use when user says "find duplicates", "dedup", "remove duplicates", "refactor duplicates", or wants to find repeated code that can be consolidated.
---

# Deduplication Review

Scan the codebase for duplicated and near-duplicated code. Write findings to `dedupReview.md` in the project root.

## What to look for

- **Exact duplicates** — identical code blocks in multiple files
- **Near duplicates** — code that is 80%+ similar with minor variations
- **Similar logic** — same pattern repeated with different data (can be abstracted)
- **Duplicated types** — same interface/type defined in multiple places
- **Duplicated constants** — same magic strings/numbers in multiple files
- **Copy-paste utilities** — helper functions that do the same thing

## Steps

1. If `dedupReview.md` exists in the project root, read it to see previous findings and history
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Look for functions, blocks, or patterns that appear in 2+ locations
4. For near-duplicates, suggest how they can be merged (parameterize, extract, etc.)
5. Compare new findings with previous report — categorize as new, still open, or fixed
6. Write findings to `dedupReview.md` using the format below

## Output format

Write `dedupReview.md` to project root. Each new review is prepended at the top with a dated section. Previous reviews stay as history below.

```markdown
# Deduplication Review

## Status (YYYY-MM-DD)

| Metric | Count |
|--------|-------|
| Open | |
| Fixed since last | |
| New | |

---

## YYYY-MM-DD

### New findings
- `src/utils/a.ts:10-25` and `src/utils/b.ts:30-45` — identical `formatDate()` function

### Still open (from YYYY-MM-DD)
- `src/components/Card.tsx:15-30` and `src/components/Tile.tsx:20-35` — similar render logic

### Fixed since YYYY-MM-DD
- ~~`src/api/users.ts:fetchUser`, `src/api/orders.ts:fetchOrder` — same fetch pattern~~

---

## YYYY-MM-DD (previous)

### Findings
- `src/utils/a.ts:10-25` and `src/utils/b.ts:30-45` — identical `formatDate()` function
- `src/components/Card.tsx:15-30` and `src/components/Tile.tsx:20-35` — similar render logic
```

## Notes

- Do NOT refactor code automatically — only report findings
- Include a concrete suggestion for how to consolidate each finding
- If duplicates are intentional (e.g. test fixtures), note that
- The Status section always reflects the latest review
- New reviews are prepended — keep previous reviews as history below
- Use ~~strikethrough~~ for fixed findings in previous sections
