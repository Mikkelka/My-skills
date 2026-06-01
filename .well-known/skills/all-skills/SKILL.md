---
name: all-skills
description: Use when setting up any new project, app, or development workflow. This is the master index skill that links to all specialized skills. Triggers on: new project, setup, scaffold, create app, start project, initialize.
---

# Skills Index

This is the master skill that provides an overview of all available specialized skills. Use the links below to access detailed instructions for each workflow.

## Available Skills

### Expo React Native Setup
- **File:** `.well-known/skills/expo-setup/SKILL.md`
- **Trigger:** "setup expo", "create react native app", "mobile app"
- **What it does:** Sets up Expo SDK 54 with Expo Router, tab navigation, correct package versions, and avoids common dependency conflicts

### Grill Me
- **File:** `.well-known/skills/grill-me/SKILL.md`
- **Trigger:** "grill me", "stress test my plan", "interview me about my design"
- **What it does:** Relentlessly interviews you about a plan or design until reaching shared understanding, resolving each branch of the decision tree

### Caveman
- **File:** `.well-known/skills/caveman/SKILL.md`
- **Trigger:** "caveman mode", "talk like caveman", "be brief", "less tokens", "/caveman"
- **What it does:** Ultra-compressed communication mode that cuts ~75% of tokens while keeping technical accuracy. Supports lite, full, ultra, and wenyan levels

### Code Review Skills

- **Dead Code** — `.well-known/skills/dead-code/SKILL.md`
  - Trigger: "clean up", "find dead code", "remove unused"
  - Finds unused imports, dead functions, unreachable code, commented-out code

- **Dedup** — `.well-known/skills/dedup/SKILL.md`
  - Trigger: "find duplicates", "dedup", "refactor duplicates"
  - Finds exact/near duplicates, similar patterns, duplicated types

- **Code Quality** — `.well-known/skills/code-quality/SKILL.md`
  - Trigger: "quality check", "clean code", "code quality"
  - Checks naming, complexity, error handling, type safety, patterns

- **Security Review** — `.well-known/skills/security-review/SKILL.md`
  - Trigger: "security check", "security review"
  - Finds hardcoded secrets, injection, XSS, missing auth, insecure deps

- **Performance Review** — `.well-known/skills/performance-review/SKILL.md`
  - Trigger: "performance check", "perf review", "optimize"
  - Finds re-renders, N+1 queries, bundle size, memory leaks, missing caching

## How to Add New Skills

1. Create a folder: `.well-known/skills/<skill-name>/`
2. Add `SKILL.md` with frontmatter:
   ```markdown
   ---
   name: my-skill
   description: When to trigger this skill and what it does.
   ---
   ```
3. Update this index file with a link to the new skill

## Skill Guidelines

- Each skill should be **self-contained** with all instructions needed
- Use **frontmatter** `name` and `description` to control when it triggers
- Keep skills **focused** - one skill per workflow
- Use **concrete examples** and copy-paste ready code blocks
