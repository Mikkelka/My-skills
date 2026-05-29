---
name: performance-review
description: Use when user says "performance check", "check performance", "perf review", "optimize", or wants to find performance bottlenecks.
---

# Performance Review

Scan the codebase for performance issues. Write findings to `CODE_REVIEW.md` in the project root.

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

1. If `CODE_REVIEW.md` exists in the project root, read it first to see previous findings
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Check for common performance anti-patterns
4. Rate severity: high (noticeable impact), medium (potential impact), low (minor optimization)
5. Compare new findings with previous report — note which are new and which are still open
6. Write findings to `CODE_REVIEW.md` with file path, line number, severity, and optimization suggestion

## Output format

Write `CODE_REVIEW.md` to project root:

```markdown
# Performance Review

**Date:** YYYY-MM-DD
**Scope:** <what was scanned>

## Summary

| Category | High | Medium | Low | Total |
|----------|------|--------|-----|-------|
| Re-renders | | | | |
| Queries | | | | |
| Bundle size | | | | |
| Memory | | | | |
| Caching | | | | |
| **Total** | | | | |

## Findings

### High severity
- `src/components/List.tsx:25` — maps over 1000 items without virtualization
- `src/api/orders.ts:40` — query inside a loop, N+1 problem

### Medium severity
- `src/hooks/useData.ts:10` — fetches on every render, missing dependency array
- `src/utils/search.ts:15` — linear search, could use Map for O(1) lookup

### Low severity
- `src/components/Header.tsx:5` — imports full lodash, only uses `debounce`

...
```

## Notes

- Do NOT fix code automatically — only report findings
- Include concrete optimization suggestions for each finding
- If a finding is negligible in practice, note that
- If a previous report exists, include a "Status" section showing: fixed since last review, still open, and new findings
