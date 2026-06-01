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

1. If `codeQualityReview.md` exists in the project root, read it to see previous findings and history
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Check each file for the issues above
4. Rate severity: high (bug risk), medium (maintainability), low (style)
5. Compare new findings with previous report — categorize as new, still open, or fixed
6. Write findings to `codeQualityReview.md` using the format below

## Output format

Write `codeQualityReview.md` to project root. Each new review is prepended at the top with a dated section. Previous reviews stay as history below.

```markdown
# Code Quality Review

## Status (YYYY-MM-DD)

| Metric | Count |
|--------|-------|
| Open | |
| Fixed since last | |
| New | |

---

## YYYY-MM-DD

### New findings
- `src/api/handler.ts:45` — empty catch block, errors silently swallowed

### Still open (from YYYY-MM-DD)
- `src/components/Dashboard.tsx:80` — function is 120 lines, should be split

### Fixed since YYYY-MM-DD
- ~~`src/services/auth.ts:15` — variable `x` is unclear~~

---

## YYYY-MM-DD (previous)

### Findings
- `src/api/handler.ts:45` — empty catch block, errors silently swallowed
- `src/components/Dashboard.tsx:80` — function is 120 lines, should be split
```

## Notes

- Do NOT fix code automatically — only report findings
- Prioritize findings by severity (high first)
- Include concrete suggestions for each finding
- The Status section always reflects the latest review
- New reviews are prepended — keep previous reviews as history below
- Use ~~strikethrough~~ for fixed findings in previous sections
