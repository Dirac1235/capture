# Capture

A pixel-faithful Next.js conversion of a multi-page Figma marketing site (the "Capture"
product — biosignal & behavioral tracking). The design was authored in Figma as four
pages, each with a separate **mobile** and **desktop** frame, and exported as
absolutely-positioned canvases. This repo renders those exports faithfully, scales them
responsively to any viewport, and layers real interactivity on top of the static art.

**Pages:** `/` (Capture), `/foundations`, `/plus`, `/syni` — each with its own mobile and
desktop frame.

---

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | **Next.js 16** (App Router, React Server Components) |
| UI runtime | **React 19** |
| Language | **TypeScript 5** |
| Styling | **Tailwind CSS v4** (CSS-first config via `@theme inline` in `app/globals.css`) |
| Component primitives | **shadcn** (style `base-nova`) on top of **@base-ui/react** |
| Class utilities | `clsx` + `tailwind-merge`, exposed as `cn()` in `lib/utils.ts`; `class-variance-authority` for variants |
| Icons | `lucide-react` |
| Animation | `tw-animate-css` (utility-class animations — no `framer-motion`) |
| Fonts | `next/font/google` (Inter Tight, Mozilla Headline, Stack Sans Headline, Bebas Neue, PT Serif, Figtree, Source Serif 4) + Pretendard via CDN |
| Package manager | **pnpm** (a `pnpm-lock.yaml` and workspace file are committed) |

---

## Getting Started

### Prerequisites
- **Node.js 18.18+** (Next 16 requirement)
- **pnpm** — install with `corepack enable` or `npm i -g pnpm`

### Install & run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Resize the window past **1024px** to
switch between the mobile and desktop frames.

### Other scripts

```bash
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # eslint (eslint-config-next)
```

> npm/yarn/bun work too if you prefer, but the committed lockfile is pnpm's.

---

## Project Structure

```
app/
  layout.tsx          # root layout: loads all fonts, sets metadata
  globals.css         # Tailwind v4 theme — design tokens, font aliases, breakpoints
  page.tsx            # / (Capture)
  foundations/page.tsx
  plus/page.tsx
  syni/page.tsx

components/
  figma/<page>/<desktop|mobile>/   # the raw exported frames per page+variant
        index.tsx     # the frame composition (absolutely-positioned)
        widgets.tsx   # large self-contained device/app mockups
        graphics.tsx  # decorative blobs/gradients
        icons.tsx     # inline SVG icons
        assets.ts     # asset references
  layout/
    ResponsiveFrame.tsx   # scales a fixed Figma canvas to fit any width
    PageWrapper.tsx
    SectionWrapper.tsx
  sections/           # shared Navbar, Footer
  ui/                 # two-layer component system (see below)

lib/
  utils.ts            # cn()
  figma/              # extracted inline SVG paths
```

### How the responsive frame works

The Figma frames are single fixed-width canvases (1920px desktop / 438px mobile) full of
`absolute left-[..] top-[..]` elements. `ResponsiveFrame` renders the canvas at its native
size and applies a `transform: scale()` computed from a `ResizeObserver` measuring the
real available width — so the page always fills the viewport and is pixel-faithful to
Figma at any size. An `aspect-ratio` on the outer box keeps height correct with pure CSS,
avoiding layout shift before JS runs.

Each `app/.../page.tsx` picks the frame by a custom Tailwind breakpoint:

```tsx
<div className="block desktop:hidden">  …mobile frame… </div>
<div className="hidden desktop:block"> …desktop frame… </div>
```

Custom breakpoints are defined in `globals.css`: `desktop: 1024px`, `wide: 1920px`,
`mobile: 438px`.

### Two-layer component system

- **Layer 1 — `components/ui/<primitive>.tsx`**: unmodified shadcn primitives (`button`,
  `card`, `input`, etc.). Treated as read-only.
- **Layer 2 — `components/ui/<Wrapper>.tsx`**: project wrappers that apply the Figma
  styling (`BrandButton`, `PrimaryButton`, `OutlineButton`, `FeatureCard`,
  `TestimonialCard`, `AppCard`, `AppBadge`, `FaqAccordion`, `BillingToggle`, etc.). All
  styling lives here so one fix propagates everywhere.

All visual values come from design tokens in `globals.css` (brand `#D08E8F`, dark bg
`#382324`, radii, shadows, fonts). Class composition always goes through `cn()`.

---

## Assumptions Made

- **The Figma frame is the source of truth.** Where the export's absolute coordinates and
  the design intent disagreed, the rendered Figma frame won. Layout is reproduced
  faithfully rather than re-interpreted.
- **Scale-to-fit over reflow.** Because the export is a fixed canvas of absolutely-
  positioned elements, the site is *scaled* to fit each viewport rather than re-flowed
  into native flexbox/grid. This keeps it pixel-perfect at every width; the trade-off is
  that text scales with the canvas instead of wrapping. A future phase (documented in
  `AGENTS.md`) covers rebuilding sections into true responsive flow.
- **Single breakpoint switch at 1024px.** Below it, the mobile frame renders; at and above
  it, the desktop frame. There's no intermediate tablet-specific frame because Figma only
  provided mobile and desktop.
- **Fonts.** Google Fonts are loaded via `next/font`; the Figma exports reference fonts by
  `"Family:Weight"` names, so `globals.css` aliases those to the loaded families via
  `@font-face { src: local(...) }`. Pretendard (used for some Korean/Latin text) is pulled
  from a CDN.
- **Static marketing content.** There's no backend, CMS, or form submission — the pages
  are presentational. "Interactive" controls are visual mockups (see below).

---

## Enhancements Beyond the Original Export

The raw Figma export was a flat, static, fixed-size image-in-code. The following were
added on top of it:

- **Responsive scaling (`ResponsiveFrame`).** The export had hard-coded pixel dimensions
  and would overflow or sit tiny on real screens. The frame now fills any viewport width
  with no cut-off and no layout shift.
- **Real interactivity via `Hotspot` overlays.** The exported "buttons", "links",
  dropdowns, and toggles are just static art that can't be re-tagged. `HotspotButton` /
  `HotspotLink` lay transparent, pixel-aligned click targets over each control — invisible
  at rest, with cursor, hover/active tint, and a keyboard focus ring — turning the static
  art into working navigation and controls.
- **Working, persisted announcement banner.** A dismissible top banner backed by a
  `localStorage` store (`bannerStore.ts`, via `useSyncExternalStore`) that stays dismissed
  across navigation, reloads, and tabs. When dismissed, `ResponsiveFrame` crops the
  banner's band away (`collapsibleTopPx`) so the content pulls up to reclaim the space.
- **FAQ accordion** (`FaqAccordion` / `FaqItem`) — a genuinely expandable accordion
  replacing the static FAQ visuals, integrated on the Plus page.
- **Reusable wrapper component library.** Recurring patterns (buttons, cards,
  testimonials, badges, billing toggle, section overlines) factored into a tokenized
  Layer-2 component set so styling is consistent and centrally maintained.
- **Centralized design tokens.** Colors, radii, shadows, and font families extracted into
  Tailwind v4 `@theme` tokens in `globals.css` instead of scattered hard-coded values.
- **Mobile + desktop wiring per page** with a clean breakpoint switch, plus shared
  `Navbar` / `Footer` sections.

---

## Notes & Conventions

The repo follows a strict set of conventions (see `AGENTS.md` / `CLAUDE.md`):

- Styling values come from **tokens only** — no hardcoded hex/px, no Tailwind default color
  classes, no raw CSS.
- All class merging goes through **`cn()`**.
- shadcn primitives are **never edited**; styling changes go in Layer-2 wrappers.
- Images use **`next/image`**; markup is semantic; interactive elements carry
  hover/focus/active states.
</content>
</invoke>
