---
name: dedup
description: Use when user says "find duplicates", "dedup", "remove duplicates", "refactor duplicates", or wants to find repeated code that can be consolidated.
---

# Deduplication Review

Scan the codebase for duplicated and near-duplicated code. Write findings to `CODE_REVIEW.md` in the project root.

## What to look for

- **Exact duplicates** — identical code blocks in multiple files
- **Near duplicates** — code that is 80%+ similar with minor variations
- **Similar logic** — same pattern repeated with different data (can be abstracted)
- **Duplicated types** — same interface/type defined in multiple places
- **Duplicated constants** — same magic strings/numbers in multiple files
- **Copy-paste utilities** — helper functions that do the same thing

## Steps

1. If `CODE_REVIEW.md` exists in the project root, read it first to see previous findings
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Look for functions, blocks, or patterns that appear in 2+ locations
4. For near-duplicates, suggest how they can be merged (parameterize, extract, etc.)
5. Compare new findings with previous report — note which are new and which are still open
6. Write findings to `CODE_REVIEW.md` with file paths, line numbers, and a suggested refactor

## Output format

Write `CODE_REVIEW.md` to project root:

```markdown
# Deduplication Review

**Date:** YYYY-MM-DD
**Scope:** <what was scanned>

## Summary

| Category | Count |
|----------|-------|
| Exact duplicates | |
| Near duplicates | |
| Similar patterns | |
| Duplicated types | |
| **Total** | |

## Findings

### Exact duplicates
- `src/utils/a.ts:10-25` and `src/utils/b.ts:30-45` — identical `formatDate()` function

### Near duplicates
- `src/components/Card.tsx:15-30` and `src/components/Tile.tsx:20-35` — similar render logic, can be merged into shared component

### Similar patterns
- `src/api/users.ts:fetchUser`, `src/api/orders.ts:fetchOrder` — same fetch pattern, extract generic `fetchById()` utility

...
```

## Notes

- Do NOT refactor code automatically — only report findings
- Include a concrete suggestion for how to consolidate each finding
- If duplicates are intentional (e.g. test fixtures), note that
- If a previous report exists, include a "Status" section showing: fixed since last review, still open, and new findings
