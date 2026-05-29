---
name: security-review
description: Use when user says "security check", "security review", "check security", or wants to find security vulnerabilities in the codebase.
---

# Security Review

Scan the codebase for security vulnerabilities. Write findings to `CODE_REVIEW.md` in the project root.

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

1. If `CODE_REVIEW.md` exists in the project root, read it first to see previous findings
2. Scan all source files (exclude `node_modules`, `dist`, `build`, `.next`, `.expo`)
3. Check for OWASP top 10 issues
4. Rate severity: critical (exploitable now), high (exploitable with effort), medium (potential risk), low (best practice)
5. Compare new findings with previous report — note which are new and which are still open
6. Write findings to `CODE_REVIEW.md` with file path, line number, severity, and fix

## Output format

Write `CODE_REVIEW.md` to project root:

```markdown
# Security Review

**Date:** YYYY-MM-DD
**Scope:** <what was scanned>

## Summary

| Severity | Count |
|----------|-------|
| Critical | |
| High | |
| Medium | |
| Low | |
| **Total** | |

## Findings

### Critical
- `src/config/db.ts:5` — database password hardcoded as string literal

### High
- `src/api/users.ts:30` — SQL query built with string concatenation, vulnerable to injection

### Medium
- `src/middleware/auth.ts:15` — token not validated on all routes

### Low
- `src/utils/logger.ts:20` — logs full request body, may include sensitive data

...
```

## Notes

- Do NOT fix code automatically — only report findings
- If a finding is a false positive risk, note it
- Include concrete fix suggestions for each finding
- If a previous report exists, include a "Status" section showing: fixed since last review, still open, and new findings
