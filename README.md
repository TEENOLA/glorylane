# GloryLane School — website

A portfolio/concept build for a fictional Lekki, Lagos secondary school, built with React + Vite + TypeScript + Tailwind CSS v4 and React Router.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Structure

- `src/pages/` — one file per route (Home, About, Academics, Admissions, Student Life, Contact)
- `src/components/layout/` — Header, Footer, MobileBar, DemoBanner (shared across every page)
- `src/components/ui/` — CtaPill / CtaGhost buttons, SectionHead, Divider, PageHero
- `src/components/home/`, `academics/`, `admissions/`, `studentlife/`, `contact/` — page-specific sections
- `src/components/icons/` — hand-drawn line-art SVG icon components (no external icon library)
- `src/data/content.ts` — all copy for facilities, news, testimonials, FAQs, houses, subjects, staff, and stats, typed and kept separate from components

## Design system

- Colors, and the Lora/Public Sans font roles, are defined once in `src/index.css` under `@theme` and consumed as Tailwind utilities (`bg-green`, `text-brass`, etc.)
- Fractional spacing utilities (`py-6.5`, `gap-4.5`, etc.) rely on Tailwind v4's dynamic spacing scale
# glorylane
