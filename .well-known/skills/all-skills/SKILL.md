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
