# Target Spec: FAQ page

## Source
- Screenshot: pasted inline, a single banner crop (~1300x330) — "FAQ" over a
  tinted photo of someone cleaning a desk. No composite of the rest of the
  page was supplied; the accordion body below the banner has no screenshot
  reference and follows this repo's own conventions instead.
- Hero photo asset: `frontend/src/assets/images/faq_bg.png`.
- Full question/answer copy (15 pairs) supplied as plain text, not a screenshot.

## Sections (top to bottom)

### 1. Hero banner (`FaqHero`)
- Same recipe as `AboutHero`: full-bleed photo, solid `#0B3E58/75` dark-navy
  tint over the whole image (no badge, unlike `ContactHero`), centered "FAQ"
  heading in `font-hero-title` (Aclonica) white text.
- Height matches `AboutHero`'s breakpoints (`h-80`/`sm:h-[26rem]`/`lg:h-[30rem]`)
  rather than `ContactHero`'s shorter banner, since the source crop reads as a
  full page-title hero (large centered word, generous height) not a slim
  badge strip.

### 2. Accordion (`FaqList`)
- No screenshot reference for this section — built from the supplied Q&A
  text using the repo's existing collapse-animation pattern (`Header`'s
  mobile drawer: `motion/react` `AnimatePresence`, `height`/`opacity`
  animate, `duration-0.24s ease-out`, collapsed to 0 under
  `prefers-reduced-motion`).
- Single-open accordion: expanding one question collapses whichever was
  previously open. Chosen over "all independently toggleable" since that's
  the conventional FAQ pattern and keeps the page shorter by default.
- Each row: `<h3><button aria-expanded aria-controls>` trigger (question) +
  `<FiChevronDown>` icon that rotates 180° when open, panel is
  `role="region" aria-labelledby` linked back to the trigger.
- Centered content column, `max-w-3xl`, divider rule between rows
  (`border-b border-slate-200`), matching the page's existing `max-w-6xl`/
  `max-w-3xl` container conventions elsewhere in the app.

## Color palette
| Swatch | Used for |
|---|---|
| `#0B3E58` | Hero tint — same token `AboutHero`/`ContactHero` use |
| `--color-primary-900` | Question text (via `text-primary-900`, shared heading color token) |
| `--color-primary-600` | Chevron icon color |
| `slate-600` | Answer body text |
| `slate-200` | Row divider |

## Typography
- Hero "FAQ": `font-hero-title` (Aclonica), bold, white.
- Question text: `font-heading` (Outfit), semibold.
- Answer text: `font-sans` (Work Sans, the body default — no explicit class needed).

## Known ambiguities / limitations
- No screenshot exists for the accordion section — its layout, spacing, and
  single-open behavior are conventions borrowed from the rest of the repo
  rather than pixel-matched to a design.
- Added as a 5th entry to `Header`/`Footer` navigation (`FAQ` → `/faq`),
  appended after "Contact Us" in both — the only nav change made since
  their layouts otherwise stay pinned to their original source screenshots.
