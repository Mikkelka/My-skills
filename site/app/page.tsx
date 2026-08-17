"use client";

import { useMemo, useState } from "react";

type Skill = {
  name: string;
  label: string;
  category: "Setup" | "Communication" | "Code review";
  description: string;
  trigger: string;
  prompt: string;
  accent: string;
};

const skills: Skill[] = [
  {
    name: "all-skills",
    label: "Skills Index",
    category: "Setup",
    description: "Masterindeks for samlingen. Hjælper med at finde den rigtige specialiserede skill til et nyt projekt eller workflow.",
    trigger: "nyt projekt · setup · scaffold · initialiser",
    prompt: `Use when setting up any new project, app, or development workflow.

This is the master index skill that links to all available specialized skills.
Use the links below to access detailed instructions for each workflow.

Guideline: Keep skills self-contained, focused, and equipped with concrete,
copy-paste-ready examples.`,
    accent: "violet",
  },
  {
    name: "expo-setup",
    label: "Expo React Native Setup",
    category: "Setup",
    description: "Sætter Expo React Native-projekter op med Expo Router, tabs og kompatible SDK 54-pakker.",
    trigger: "setup expo · react native · mobile app",
    prompt: `Use ONLY when setting up a new Expo React Native project with Expo Router
and tab navigation.

Use the compatible SDK 54 package versions. Avoid known conflict packages such
as react-native-reanimated, react-native-worklets, and gesture-handler unless
they are specifically needed.

Verify app.json, tsconfig.json, the tab layout, and the Expo Go workflow before
handing the project back.`,
    accent: "cyan",
  },
  {
    name: "grill-me",
    label: "Grill Me",
    category: "Communication",
    description: "Stiller vedholdende spørgsmål til en plan eller et design, indtil beslutninger og antagelser er tydelige.",
    trigger: "grill me · stress test · interview my plan",
    prompt: `Interview me relentlessly about every aspect of this plan until we
reach a shared understanding.

Walk down each branch of the design tree and resolve dependencies between
decisions one by one. If a question can be answered by exploring the codebase,
explore the codebase instead.

For each question, provide your recommended answer.`,
    accent: "orange",
  },
  {
    name: "caveman",
    label: "Caveman",
    category: "Communication",
    description: "Gør kommunikationen ultrakort og teknisk præcis i flere komprimeringsniveauer.",
    trigger: "caveman mode · be brief · less tokens · /caveman",
    prompt: `Respond terse like smart caveman. All technical substance stay. Only
fluff die.

Default to full intensity. Drop filler, pleasantries, and hedging. Use short
synonyms and fragments when they stay clear. Keep technical terms, code blocks,
function names, API names, and error strings exact.

Drop caveman mode for security warnings, irreversible actions, or whenever
compression would create technical ambiguity.`,
    accent: "yellow",
  },
  {
    name: "dead-code",
    label: "Dead Code",
    category: "Code review",
    description: "Finder ubrugte imports, døde funktioner, unreachable code og overflødige filer.",
    trigger: "clean up · find dead code · remove unused",
    prompt: `Scan the codebase for unused imports, variables, functions, files,
commented-out code, and unreachable code.

Cross-reference exports and imports before flagging something as unused. Compare
findings with any previous deadCodeReview.md and categorize them as new, still
open, or fixed.

Write findings to deadCodeReview.md. Do NOT fix code automatically.`,
    accent: "red",
  },
  {
    name: "dedup",
    label: "Deduplication Review",
    category: "Code review",
    description: "Finder gentaget eller næsten-gentaget kode, typer, konstanter og hjælpefunktioner.",
    trigger: "find duplicates · dedup · refactor duplicates",
    prompt: `Scan the codebase for exact duplicates, near duplicates, repeated logic,
duplicated types, duplicated constants, and copy-paste utilities.

For each finding, suggest a concrete consolidation such as parameterization or
an extracted helper. Compare with any previous dedupReview.md.

Write findings to dedupReview.md. Do NOT refactor code automatically.`,
    accent: "pink",
  },
  {
    name: "code-quality",
    label: "Code Quality Review",
    category: "Code review",
    description: "Gennemgår navngivning, kompleksitet, fejlhåndtering, typesikkerhed og struktur.",
    trigger: "quality check · clean code · code quality",
    prompt: `Scan the codebase for poor naming, overly complex functions, inconsistent
patterns, missing error handling, weak type safety, magic values, tight coupling,
and SOLID violations.

Rate findings by severity and compare with the previous codeQualityReview.md.
Include concrete suggestions for each finding.

Write the review to codeQualityReview.md. Do NOT fix code automatically.`,
    accent: "green",
  },
  {
    name: "security-review",
    label: "Security Review",
    category: "Code review",
    description: "Leder efter secrets, injection, XSS, manglende auth, usikre afhængigheder og datalæk.",
    trigger: "security check · security review · check security",
    prompt: `Scan the codebase for hardcoded secrets, SQL injection, XSS, missing auth
checks, insecure dependencies, unsafe file operations, sensitive data exposure,
CORS misconfiguration, and missing input validation.

Check the OWASP Top 10, rate findings by severity, and compare with the previous
securityReview.md.

Write concrete findings and fixes to securityReview.md. Do NOT fix code
automatically.`,
    accent: "blue",
  },
  {
    name: "performance-review",
    label: "Performance Review",
    category: "Code review",
    description: "Finder unødvendige re-renders, N+1-queries, store bundles, memory leaks og manglende caching.",
    trigger: "performance check · perf review · optimize",
    prompt: `Scan the codebase for unnecessary re-renders, N+1 queries, missing indexes,
blocking operations, large bundle imports, missing caching, memory leaks,
unoptimized images, and missing pagination.

Rate findings by severity and compare with the previous performanceReview.md.
Include concrete optimization suggestions.

Write findings to performanceReview.md. Do NOT fix code automatically.`,
    accent: "teal",
  },
];

const categories = ["Alle", "Setup", "Communication", "Code review"] as const;

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Alle");
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const filteredSkills = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return skills.filter((skill) => {
      const matchesCategory = category === "Alle" || skill.category === category;
      const searchable = `${skill.name} ${skill.label} ${skill.description} ${skill.trigger}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="topbar" aria-label="Hovednavigation">
        <a className="brand" href="#top">
          <span className="brand-mark">M</span>
          <span>my-skills</span>
        </a>
        <div className="topbar-meta">
          <span className="status-dot" />
          <span>9 skills · 1 repo</span>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span>PERSONAL PROMPT LIBRARY</span><span className="eyebrow-line" /></div>
        <h1>Skills, gjort <em>synlige.</em></h1>
        <p className="hero-copy">
          En levende oversigt over dine Codex- og OpenCode-skills — hvad de gør,
          hvornår de aktiveres, og prompten der driver dem.
        </p>
        <div className="hero-stats" aria-label="Oversigt">
          <div><strong>09</strong><span>skills</span></div>
          <div><strong>03</strong><span>kategorier</span></div>
          <div><strong>∞</strong><span>muligheder</span></div>
        </div>
      </section>

      <section className="controls" aria-label="Filtrering">
        <label className="search-box">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Søg i skills..."
            aria-label="Søg i skills"
          />
          <kbd>⌘ K</kbd>
        </label>
        <div className="filter-row" role="tablist" aria-label="Skill-kategorier">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "filter active" : "filter"}
              onClick={() => setCategory(item)}
              role="tab"
              aria-selected={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="skill-grid" aria-live="polite">
        {filteredSkills.map((skill, index) => {
          const isOpen = openSkill === skill.name;
          return (
            <article className={`skill-card ${isOpen ? "expanded" : ""}`} key={skill.name}>
              <button className="card-head" onClick={() => setOpenSkill(isOpen ? null : skill.name)} aria-expanded={isOpen}>
                <div className={`skill-icon ${skill.accent}`}>{String(index + 1).padStart(2, "0")}</div>
                <div className="card-title-wrap">
                  <div className="card-kicker"><span>{skill.category}</span><span>·</span><span>{skill.name}</span></div>
                  <h2>{skill.label}</h2>
                </div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </button>
              <div className="card-body">
                <p>{skill.description}</p>
                <div className="trigger"><span>AKTIVERES AF</span><code>{skill.trigger}</code></div>
                <div className="prompt-panel">
                  <div className="prompt-label"><span>SKILL PROMPT</span><span className="prompt-dots">···</span></div>
                  <pre>{skill.prompt}</pre>
                </div>
                <div className="source-line"><span>source</span><code>.well-known/skills/{skill.name}/SKILL.md</code></div>
              </div>
            </article>
          );
        })}
      </section>

      {filteredSkills.length === 0 && <div className="empty-state">Ingen skills matcher din søgning.</div>}

      <footer className="footer">
        <span>Built from <code>.well-known/skills</code></span>
        <span>Local prompt library <i>✦</i> 2026</span>
      </footer>
    </main>
  );
}
