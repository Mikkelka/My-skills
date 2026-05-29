---
name: code-quality
description: Use when user says "quality check", "clean code", "code quality", "review code", or wants to improve naming, readability, and code structure.
---

# Code Quality Review

Scan the codebase for quality issues. Write findings to `codeQualityReview.md` in the project root.

## What to look for

- **Poor naming** — unclear variable/function names, abbreviations, single letters
- **Overly complex functions** — functions that are too long, too many branches, deep nesting
- **Inconsistent patterns** — same thing done differently in different places
- **Missing error handling** — bare `try/catch` with empty catch, unhandled promises
- **Type safety** — use of `any`, missing types, loose typing
- **Magic values** — hardcoded strings/numbers that should be constants
- **Tight coupling** — components/modules that depend too much on each other
- **SOLID violations** — functions doing too much, classes with too many responsibilities

## Steps

1. If `codeQualityReview.md` exists in the project root, read it first to see previous findings
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Check each file for the issues above
4. Rate severity: high (bug risk), medium (maintainability), low (style)
5. Compare new findings with previous report — note which are new and which are still open
6. Write findings to `CODE_REVIEW.md` with file path, line number, severity, and suggestion

## Output format

Write `codeQualityReview.md` to project root:

```markdown
# Code Quality Review

**Date:** YYYY-MM-DD
**Scope:** <what was scanned>

## Summary

| Category | High | Medium | Low | Total |
|----------|------|--------|-----|-------|
| Naming | | | | |
| Complexity | | | | |
| Error handling | | | | |
| Type safety | | | | |
| Patterns | | | | |
| **Total** | | | | |

## Findings

### High severity
- `src/api/handler.ts:45` — empty catch block, errors silently swallowed
- `src/utils/parser.ts:12` — uses `any` type, breaks type safety

### Medium severity
- `src/components/Dashboard.tsx:80` — function is 120 lines, should be split
- `src/services/auth.ts:15` — variable `x` is unclear, rename to `authToken`

### Low severity
- `src/constants.ts:5` — magic number `86400`, extract to `SECONDS_PER_DAY`

...
```

## Notes

- Do NOT fix code automatically — only report findings
- Prioritize findings by severity (high first)
- Include concrete suggestions for each finding
- If a previous report exists, include a "Status" section showing: fixed since last review, still open, and new findings
