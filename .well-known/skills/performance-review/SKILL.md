---
name: performance-review
description: Use when user says "performance check", "check performance", "perf review", "optimize", or wants to find performance bottlenecks.
---

# Performance Review

Scan the codebase for performance issues. Write findings to `performanceReview.md` in the project root.

## What to look for

- **Unnecessary re-renders** — components re-rendering without prop/state changes, missing memoization
- **N+1 queries** — database queries inside loops
- **Missing indexes** — queries on columns without indexes
- **Blocking operations** — synchronous I/O, heavy computation on main thread
- **Large bundle imports** — importing full libraries when only a part is needed
- **Missing caching** — repeated expensive computations or API calls
- **Memory leaks** — event listeners not cleaned up, subscriptions not unsubscribed
- **Unoptimized images** — large images without compression or lazy loading
- **Missing pagination** — loading all data at once instead of paginating

## Steps

1. If `performanceReview.md` exists in the project root, read it to see previous findings and history
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Check for common performance anti-patterns
4. Rate severity: high (noticeable impact), medium (potential impact), low (minor optimization)
5. Compare new findings with previous report — categorize as new, still open, or fixed
6. Write findings to `performanceReview.md` using the format below

## Output format

Write `performanceReview.md` to project root. Each new review is prepended at the top with a dated section. Previous reviews stay as history below.

```markdown
# Performance Review

## Status (YYYY-MM-DD)

| Metric | Count |
|--------|-------|
| Open | |
| Fixed since last | |
| New | |

---

## YYYY-MM-DD

### New findings
- `src/components/List.tsx:25` — maps over 1000 items without virtualization

### Still open (from YYYY-MM-DD)
- `src/hooks/useData.ts:10` — fetches on every render, missing dependency array

### Fixed since YYYY-MM-DD
- ~~`src/utils/search.ts:15` — linear search, could use Map~~

---

## YYYY-MM-DD (previous)

### Findings
- `src/components/List.tsx:25` — maps over 1000 items without virtualization
- `src/hooks/useData.ts:10` — fetches on every render, missing dependency array
```

## Notes

- Do NOT fix code automatically — only report findings
- Include concrete optimization suggestions for each finding
- If a finding is negligible in practice, note that
- The Status section always reflects the latest review
- New reviews are prepended — keep previous reviews as history below
- Use ~~strikethrough~~ for fixed findings in previous sections
