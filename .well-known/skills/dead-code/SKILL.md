---
name: dead-code
description: Use when user says "clean up", "find dead code", "remove unused", "cleanup", or wants to remove unused code, dead imports, and unreachable functions.
---

# Dead Code Removal

Scan the codebase and remove unused code. Write findings to `deadCodeReview.md` in the project root.

## What to look for

- **Unused imports** — imported modules/variables never referenced
- **Unreachable code** — code after `return`, `throw`, or inside always-false conditions
- **Dead functions** — functions defined but never called anywhere
- **Unused variables** — variables assigned but never read
- **Unused files** — files that are not imported by anything
- **Commented-out code** — large blocks of commented code that should be removed

## Steps

1. If `deadCodeReview.md` exists in the project root, read it to see previous findings and history
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. For each file, check for unused imports, variables, and functions
4. Cross-reference: if a function/export is not imported anywhere, flag it
5. Compare new findings with previous report — categorize as new, still open, or fixed
6. Write findings to `deadCodeReview.md` using the format below

## Output format

Write `deadCodeReview.md` to project root. Each new review is prepended at the top with a dated section. Previous reviews stay as history below.

```markdown
# Dead Code Review

## Status (YYYY-MM-DD)

| Metric | Count |
|--------|-------|
| Open | |
| Fixed since last | |
| New | |

---

## YYYY-MM-DD

### New findings
- `path/to/file.ts:12` — unused import `useState`

### Still open (from YYYY-MM-DD)
- `path/to/file.ts:45` — dead function `calculateTotal()`

### Fixed since YYYY-MM-DD
- ~~`path/to/file.ts:8` — unused variable `temp`~~

---

## YYYY-MM-DD (previous)

### Findings
- `path/to/file.ts:8` — unused variable `temp`
- `path/to/file.ts:45` — dead function `calculateTotal()`
```

## Notes

- Do NOT delete code automatically — only report findings
- If unsure whether something is unused (e.g. re-exports, type exports), mark as "possibly unused" with explanation
- The Status section always reflects the latest review
- New reviews are prepended — keep previous reviews as history below
- Use ~~strikethrough~~ for fixed findings in previous sections
