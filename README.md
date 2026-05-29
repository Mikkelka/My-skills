# My OpenCode Skills

Personal collection of opencode skills for common development workflows.

## Skills

| Skill | Description |
|-------|-------------|
| [all-skills](.well-known/skills/all-skills/SKILL.md) | Master index - links to all available skills |
| [expo-setup](.well-known/skills/expo-setup/SKILL.md) | Setup Expo React Native projects with correct SDK 54 packages, tab navigation, and common pitfalls to avoid |
| [grill-me](.well-known/skills/grill-me/SKILL.md) | Relentlessly interview you about a plan or design until reaching shared understanding |
| [dead-code](.well-known/skills/dead-code/SKILL.md) | Find unused imports, dead functions, unreachable code |
| [dedup](.well-known/skills/dedup/SKILL.md) | Find exact/near duplicate code and similar patterns |
| [code-quality](.well-known/skills/code-quality/SKILL.md) | Naming, complexity, error handling, type safety |
| [security-review](.well-known/skills/security-review/SKILL.md) | Hardcoded secrets, injection, XSS, missing auth |
| [performance-review](.well-known/skills/performance-review/SKILL.md) | Re-renders, N+1 queries, bundle size, memory leaks |

## Install on a New Computer

Copy the skills you want to the global skills directory:

```bash
# Copy all skills
cp -r .well-known/skills/* ~/.config/opencode/skills/

# Or copy a specific skill
cp -r .well-known/skills/expo-setup ~/.config/opencode/skills/
```

On Windows (PowerShell):

```powershell
# Copy all skills
Copy-Item -Recurse .well-known\skills\* "$env:USERPROFILE\.config\opencode\skills\"

# Or copy a specific skill
Copy-Item -Recurse .well-known\skills\expo-setup "$env:USERPROFILE\.config\opencode\skills\"
```

After copying, **restart opencode** for the skills to be detected.

The skills will be placed in `~/.config/opencode/skills/<name>/SKILL.md` and will be available in all projects.

## Adding New Skills

Create a new folder under `.well-known/skills/<name>/` with a `SKILL.md` file:

```
.well-known/skills/
├── code-quality/
│   └── SKILL.md
├── dead-code/
│   └── SKILL.md
├── dedup/
│   └── SKILL.md
├── expo-setup/
│   └── SKILL.md
├── performance-review/
│   └── SKILL.md
├── security-review/
│   └── SKILL.md
└── my-new-skill/
    └── SKILL.md
```

Each `SKILL.md` must have frontmatter:

```markdown
---
name: my-new-skill
description: One sentence covering what this skill does and when to trigger it.
---

# Skill content...
```

Then push to GitHub and copy to any new computers as described above.
