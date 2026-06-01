---
name: security-review
description: Use when user says "security check", "security review", "check security", or wants to find security vulnerabilities in the codebase.
---

# Security Review

Scan the codebase for security vulnerabilities. Write findings to `securityReview.md` in the project root.

## What to look for

- **Hardcoded secrets** — API keys, passwords, tokens in source code
- **SQL injection** — unsanitized user input in database queries
- **XSS** — unescaped user input rendered in HTML/JSX
- **Missing auth checks** — endpoints or routes without authentication
- **Insecure dependencies** — packages with known vulnerabilities
- **Unsafe file operations** — path traversal, unsanitized file paths
- **Sensitive data exposure** — logging secrets, returning sensitive data in responses
- **CORS misconfiguration** — overly permissive CORS policies
- **Missing input validation** — user input used without validation

## Steps

1. If `securityReview.md` exists in the project root, read it to see previous findings and history
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Check for OWASP top 10 issues
4. Rate severity: critical (exploitable now), high (exploitable with effort), medium (potential risk), low (best practice)
5. Compare new findings with previous report — categorize as new, still open, or fixed
6. Write findings to `securityReview.md` using the format below

## Output format

Write `securityReview.md` to project root. Each new review is prepended at the top with a dated section. Previous reviews stay as history below.

```markdown
# Security Review

## Status (YYYY-MM-DD)

| Metric | Count |
|--------|-------|
| Open | |
| Fixed since last | |
| New | |

---

## YYYY-MM-DD

### New findings
- `src/config/db.ts:5` — database password hardcoded as string literal

### Still open (from YYYY-MM-DD)
- `src/api/users.ts:30` — SQL query built with string concatenation

### Fixed since YYYY-MM-DD
- ~~`src/middleware/auth.ts:15` — token not validated on all routes~~

---

## YYYY-MM-DD (previous)

### Findings
- `src/config/db.ts:5` — database password hardcoded as string literal
- `src/api/users.ts:30` — SQL query built with string concatenation
```

## Notes

- Do NOT fix code automatically — only report findings
- If a finding is a false positive risk, note it
- Include concrete fix suggestions for each finding
- The Status section always reflects the latest review
- New reviews are prepended — keep previous reviews as history below
- Use ~~strikethrough~~ for fixed findings in previous sections
