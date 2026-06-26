# AGENTS.md — Rules for Figma → Next.js Conversion

> Read this entire file before writing a single line of code.
> These rules are non-negotiable. Every decision must trace back to the Figma file "test(copy) https://www.figma.com/design/TZnzGL09LzixxeXAW6WeQK/test-copy-?t=MwWhXbzb6cyrQIJH-0".
> If a rule conflicts with your assumptions — the rule wins.

---

<!-- BEGIN:nextjs-agent-rules -->
# AGENTS.md — Polishing Phase Rules

> The initial conversion is done. A working design exists.
> Your job now is careful, surgical polishing — not rebuilding.
> The number one rule of this phase: **do not break what already works.**
> Every change must make the design closer to Figma. No change may move it further away.

---

## 0. Mindset for This Phase

You are a **surgeon, not an architect.**

- The structure exists. You refine it, you do not redesign it.
- Every edit must be justified by a specific difference between the current output and the Figma file.
- If something already matches Figma — leave it alone. Do not touch it.
- If you are unsure whether something needs changing — check Figma first, then ask. Do not guess.
- Small focused changes only. Never refactor a whole file to fix one spacing value.

**Before touching any file, state:**
1. What exactly is wrong (with the specific Figma value it should be)
2. Which file and which line needs to change
3. What the change is

If you cannot state all three — do not make the change.

---

## 1. What This Phase Covers

This phase has three goals and only three goals:

```
GOAL 1 — RESPONSIVENESS
  The current design is not responsive.
  Make every page work correctly at mobile AND desktop breakpoints
  using the exact layouts from the Figma mobile and desktop frames.

GOAL 2 — PIXEL ACCURACY
  Find and fix every remaining gap between the current output and Figma:
  - Wrong spacing values (padding, gap, margin)
  - Wrong colors (even slightly off hex values)
  - Wrong font sizes, weights, or line-heights
  - Wrong border-radius values
  - Missing or wrong shadows
  - Misaligned elements

GOAL 3 — CONSISTENCY
  Ensure every instance of a reusable component looks identical.
  If a button is wrong, it is wrong everywhere — fix the wrapper, not each instance.
```

**This phase does NOT cover:**
- Adding new features
- Changing the page structure or layout logic
- Replacing components with different ones
- Refactoring code that already works correctly
- Changing anything that already matches Figma

---

## 2. The Figma Source of Truth

Figma file: `https://www.figma.com/design/TZnzGL09LzixxeXAW6WeQK/test-copy-`

Before making any fix, connect to this file via Figma MCP and read the exact value.
Never fix a value from memory or assumption — always read it from Figma first.

For each issue you find, record:
- The Figma frame it appears in
- The exact Figma value (e.g. `padding: 24px`, `color: #1A1A2E`, `font-size: 16px`)
- The current wrong value in the code
- The file and className that needs updating

---

## 3. How to Approach Each Page

Work through pages one at a time. For each page:

**Step 1 — Audit first, fix second**
Open the Figma frame for that page. Go through every element top to bottom.
List every difference you find before changing anything.
Present the full diff list and wait for confirmation before making any edits.

**Step 2 — Fix responsiveness**
- Read the mobile Figma frame for this page
- Add mobile-first Tailwind classes (no prefix) matching the mobile frame exactly
- Add `md:` prefixed classes matching the desktop frame exactly
- Do not invent a layout — every value comes from one of the two Figma frames

**Step 3 — Fix pixel accuracy issues**
Work through your diff list from Step 1.
Fix one issue at a time. State what you changed and why after each fix.

**Step 4 — Verify**
Run through the verification checklist at the bottom of this file.
Report each item as pass or fail before moving to the next page.

---

## 4. Responsiveness Rules

### The one-component rule
Every page is one responsive component. Never split into MobileX and DesktopX.

### Class prefix mapping
```
No prefix   = mobile layout  (from Figma mobile frame, base styles)
md:         = desktop layout (from Figma desktop frame, overrides)
```

### Pattern to follow
```tsx
// Mobile first — base classes come from Figma mobile frame
// Desktop overrides — md: classes come from Figma desktop frame

<section className={cn(
  // mobile (base)
  'flex flex-col gap-4 px-4 py-8',
  // desktop (override)
  'md:flex-row md:gap-8 md:px-16 md:py-20'
)}>
  <h1 className={cn(
    'text-2xl font-bold text-primary',   // mobile
    'md:text-4xl'                         // desktop
  )}>
    Heading
  </h1>
</section>
```

### What changes between breakpoints (check Figma for each)
- Layout direction (column → row)
- Padding and gap values
- Font sizes
- Element widths (full width → fixed width)
- Hidden/visible elements (use `hidden md:block` or `block md:hidden`)
- Image sizes
- Grid column counts

### What must NOT change between breakpoints
- Colors — identical on mobile and desktop
- Font weights — identical on mobile and desktop
- Border radius — identical on mobile and desktop
- Component variants — identical on mobile and desktop

---

## 5. Safe Edit Rules

### Always safe
- Changing a Tailwind spacing class to match Figma (`px-4` → `px-6`)
- Adding a missing responsive prefix (`text-2xl` → `text-2xl md:text-4xl`)
- Fixing a color class to match the exact Figma hex token
- Adding a missing `hover:`, `focus:`, or `active:` state
- Adding `hidden md:block` or `block md:hidden` for elements that appear/disappear at breakpoints

### Safe with caution — state your change before making it
- Changing a wrapper component's base classes (affects every instance — verify all usages first)
- Changing `tailwind.config.ts` token values (affects the whole project — double-check the Figma value)
- Changing layout direction (`flex-col` → `flex-row`)
- Modifying `globals.css` shadcn variables

### Never do without explicit instruction
- Deleting any component file
- Renaming any component or its props
- Changing the import structure of any file
- Replacing a shadcn wrapper with a different component
- Editing any auto-generated shadcn file (`button.tsx`, `card.tsx`, `input.tsx`, etc.)
- Adding new pages or new sections not in Figma
- Changing logic, state, or interactivity
- Restructuring the folder layout

---

## 6. Component Architecture — Do Not Change

The two-layer architecture is already in place. Do not touch it.

```
LAYER 1 — shadcn/ui (read-only, never edit)
  /components/ui/button.tsx
  /components/ui/card.tsx
  /components/ui/input.tsx
  ...

LAYER 2 — your wrappers (the only place to make styling changes)
  /components/ui/PrimaryButton.tsx
  /components/ui/AppCard.tsx
  /components/ui/AppInput.tsx
  ...
```

**If a component looks wrong:**
- Fix the wrapper in Layer 2 — never Layer 1
- One fix in the wrapper fixes every instance across all pages
- Never copy-paste a fix directly onto a page — always fix the wrapper

**If a new repeated pattern is found that has no wrapper yet:**
- Create a new wrapper in `/components/ui/`
- Follow the existing wrapper pattern exactly
- Never use a shadcn primitive directly in a page

---

## 7. Tailwind Token Rules — Still Apply

All visual values still come from `tailwind.config.ts`. This has not changed.

```
✅ Use custom tokens:    text-primary, bg-surface, rounded-md, shadow-sm
❌ Never use defaults:   text-blue-500, bg-gray-100, rounded-lg (Tailwind's default lg)
❌ Never hardcode:       style={{ color: '#1A1A2E' }}, className="text-[#1A1A2E]"
```

If you discover a Figma value that has no matching token in `tailwind.config.ts`:
1. Add the token to `tailwind.config.ts` first
2. Then use it in the component
3. Never use an arbitrary value `text-[14px]` as a permanent solution

---

## 8. What You Must Never Do in This Phase

```
❌ Rebuild or restructure a page that already exists
❌ Change anything that already matches Figma
❌ Edit shadcn source files (button.tsx, card.tsx, input.tsx, etc.)
❌ Import shadcn primitives directly in pages or sections
❌ Write raw CSS anywhere — not in .css files, not in style={{}}
❌ Use Tailwind default colors (blue-500, gray-300, slate-100, etc.)
❌ Hardcode any hex, px, or font value in a component
❌ Create separate mobile and desktop components for the same page
❌ Use <img> instead of Next.js <Image />
❌ Make a change without first identifying the specific Figma value it should match
❌ Fix multiple unrelated things in one edit — one issue at a time
❌ Skip the audit step and jump straight to editing
❌ Refactor working code just to make it "cleaner"
❌ Add features, animations, or interactions not visible in Figma
❌ Use cn() alternatives — string concatenation, template literals, clsx directly
```

---

## 9. Order of Work — Follow This Exactly

```
PHASE 1 — AUDIT ALL PAGES BEFORE FIXING ANYTHING
  1. Connect to Figma file via MCP
  2. For each of the 3 pages, compare current output against both Figma frames
  3. Produce a complete diff list for all 3 pages:
     - Responsiveness issues (missing mobile layout, wrong breakpoint values)
     - Spacing issues (wrong padding, gap, margin values)
     - Color issues (wrong or missing colors)
     - Typography issues (wrong size, weight, line-height)
     - Radius / shadow issues
     - Missing hover / focus states
  4. Present the full diff list — wait for confirmation before touching any file

PHASE 2 — FIX RESPONSIVENESS (page by page)
  5. Page 1: add mobile-first layout from Figma mobile frame + md: desktop overrides
  6. Verify Page 1 responsiveness against both Figma frames
  7. Page 2: same
  8. Verify Page 2
  9. Page 3: same
  10. Verify Page 3

PHASE 3 — FIX PIXEL ACCURACY (page by page)
  11. Page 1: work through the diff list, fix each issue one at a time
  12. Verify Page 1 against full checklist
  13. Page 2: same
  14. Verify Page 2
  15. Page 3: same
  16. Verify Page 3

PHASE 4 — CONSISTENCY CHECK
  17. Confirm every instance of each wrapper component looks identical
  18. Confirm tailwind.config.ts has a named token for every value used
  19. Confirm zero raw CSS or hardcoded values exist anywhere
  20. Final checklist — report every item as pass or fail
```

---

## 10. Verification Checklist (run after each page)

**Responsiveness**
- [ ] Mobile layout matches Figma mobile frame exactly (tested at < 768px)
- [ ] Desktop layout matches Figma desktop frame exactly (tested at ≥ 768px)
- [ ] No layout elements are hidden or broken at any width between mobile and desktop
- [ ] No separate MobileX / DesktopX components exist — one responsive component per page

**Design accuracy**
- [ ] Every color matches Figma exactly (verified via MCP, not memory)
- [ ] Every font family matches Figma exactly
- [ ] Every font size matches Figma exactly (in px)
- [ ] Every font weight matches Figma exactly
- [ ] Every line-height matches Figma exactly
- [ ] Every padding value matches Figma exactly
- [ ] Every gap value matches Figma exactly
- [ ] Every border-radius matches Figma exactly
- [ ] Every shadow matches Figma exactly
- [ ] No element is missing from either frame

**Code quality**
- [ ] Zero raw CSS anywhere in the codebase
- [ ] Zero hardcoded color, spacing, or font values
- [ ] Zero Tailwind default color classes (blue-500, gray-300, etc.)
- [ ] All class combinations use cn() from @/lib/utils
- [ ] Zero duplicated component patterns
- [ ] shadcn source files are unmodified
- [ ] Pages import only wrapper components — never shadcn primitives directly
- [ ] Semantic HTML throughout
- [ ] Next.js Image used for every image
- [ ] Hover, focus, active, disabled states on all interactive elements
- [ ] Zero TypeScript errors
- [ ] Zero console errors in browser

---

## 11. How to Handle Uncertainty

**If two Figma values look the same but you're not sure:**
→ Measure both in Figma via MCP. Use the exact value. Do not round.

**If a Figma value has no matching token in tailwind.config.ts:**
→ Add the token first. Then use it. Never use an arbitrary value as a permanent fix.

**If the current code looks close but you're not sure it matches:**
→ Read the Figma value via MCP. Compare. Only change it if it's actually wrong.

**If fixing one thing breaks another:**
→ Stop. Revert the change. Report what happened. Do not push forward.

**If you're unsure whether a change is safe:**
→ Ask. Do not make the change.

---

*The design is already mostly right. Your job is careful, precise, Figma-verified polishing.
Make it perfect — without breaking what works.*
<!-- END:ui-architecture-rules -->