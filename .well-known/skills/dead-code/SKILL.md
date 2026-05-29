---
name: dead-code
description: Use when user says "clean up", "find dead code", "remove unused", "cleanup", or wants to remove unused code, dead imports, and unreachable functions.
---

# Dead Code Removal

Scan the codebase and remove unused code. Write findings to `CODE_REVIEW.md` in the project root.

## What to look for

- **Unused imports** — imported modules/variables never referenced
- **Unreachable code** — code after `return`, `throw`, or inside always-false conditions
- **Dead functions** — functions defined but never called anywhere
- **Unused variables** — variables assigned but never read
- **Unused files** — files that are not imported by anything
- **Commented-out code** — large blocks of commented code that should be removed

## Steps

1. If `CODE_REVIEW.md` exists in the project root, read it first to see previous findings
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. For each file, check for unused imports, variables, and functions
4. Cross-reference: if a function/export is not imported anywhere, flag it
5. Compare new findings with previous report — note which are new and which are still open
6. Write findings to `CODE_REVIEW.md` with file path, line number, and what is unused

## Output format

Write `CODE_REVIEW.md` to project root:

```markdown
# Dead Code Review

**Date:** YYYY-MM-DD
**Scope:** <what was scanned>

## Summary

| Category | Count |
|----------|-------|
| Unused imports | |
| Dead functions | |
| Unused variables | |
| Unreachable code | |
| Commented-out code | |
| **Total** | |

## Findings

### Unused imports
- `path/to/file.ts:12` — `useState` imported but never used

### Dead functions
- `path/to/file.ts:45` — `calculateTotal()` defined but never called

...
```

## Notes

- Do NOT delete code automatically — only report findings
- If unsure whether something is unused (e.g. re-exports, type exports), mark as "possibly unused" with explanation
- Include a count of total findings in the summary
- If a previous report exists, include a "Status" section showing: fixed since last review, still open, and new findings
