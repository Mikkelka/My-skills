# My OpenCode Skills

Personal collection of opencode skills for common development workflows.

## Skills

| Skill | Description |
|-------|-------------|
| [all-skills](.well-known/skills/all-skills/SKILL.md) | Master index - links to all available skills |
| [expo-setup](.well-known/skills/expo-setup/SKILL.md) | Setup Expo React Native projects with correct SDK 54 packages, tab navigation, and common pitfalls to avoid |

## Usage

Add to your `~/.config/opencode/opencode.json`:

```json
{
  "skills": {
    "urls": ["https://raw.githubusercontent.com/Mikkelka/My-skills/main/.well-known/skills/"]
  }
}
```

Or clone locally and use paths:

```json
{
  "skills": {
    "paths": ["C:\\Users\\mikke\\Desktop\\Code\\my-skills"]
  }
}
```

## Adding New Skills

Create a new folder under `.well-known/skills/<name>/` with a `SKILL.md` file:

```
.well-known/skills/
├── expo-setup/
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
