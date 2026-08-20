# Target Spec: "Our Services" page

## Source
- Screenshot: pasted inline (no file path available) — one tall composite covering the hero banner, the 3x3 service grid, and the newsletter band. Same situation as `about-us-target-spec.md`/`request-a-quote-target-spec.md` — no `diff.js` pixel score; verified by visual comparison and a local render instead.
- Original image 1811x2676 (displayed 1354x2000, scale factor ~1.34) — desktop viewport.

## Sections (top to bottom)

### 1. Hero banner ("ServicesHero")
- Full-bleed solid teal-blue background (no photo, unlike `AboutHero`), left-aligned text block near the top of the band, generous left padding.
- Small line "Timsies Entirety" — white, medium weight, ~20px.
- Large two-line heading "PROFESSIONAL ORGANIZING SERVICES" — white, bold/black weight, uppercase, chunky rounded letterforms. Closest existing token is `font-heading` (Outfit) at a heavy weight; the source face reads rounder/blockier than Outfit renders, flagged as an approximation rather than pulling in a new font family.
- Subtitle: "Residential, commercial and specialist cleaning solutions across Lagos." — white/light, single line, smaller (~16px), directly under the heading.
- Banner height: shorter band, roughly 280-320px at this viewport — sized to the text block, not full-viewport-height like `HeroSlider`.
- Carries the page's `<h1>` (same precedent as `AboutHero`).

### 2. Service grid ("ServicesGrid")
- White section background, 3-column x 3-row grid (stacks to 1 column on mobile), each cell: rounded-corner photo (~4:3) + caption directly below, left-aligned to the image, no bullet consistently — captions alternate with/without a leading "•" in the source, reproduced as-is (same "don't correct the source" precedent as `Footer`'s `REACH_OUT_ROWS`):
  1. • Decluttering — `DECLUTTERING.png`
  2. Residential Cleaning & Organization (no bullet) — `RESIDENTIAL ORGANIZING.png`
  3. • Office & Commercial Organization — `Office & Commercial Organization.png`
  4. • Deep Cleaning — `Deep Cleaning.png`
  5. • Move in Move Out Cleaning — `Move in Move Out Cleaning.png`
  6. • Wardrobe & Closet Organization — `Wardrobe & Closet Organization.png`
  7. Kitchen & Pantry Organization (no bullet) — `Kitchen & Pantry Organization.png`
  8. • Post-Event Cleaning — `Post-Event Cleaning.png`
  9. • Customized Cleaning & Organization — `Customized Cleaning & Organization.png`
- Caption text: dark navy, semibold, ~15-16px.
- Grid container `max-w-6xl`, generous gutter (~gap-8) and section padding (`py-16`), consistent with other page sections.

### 3. Newsletter band ("Newsletter")
- Light powder-blue full-bleed background, plain straight top edge (no diagonal/clip-path — an earlier pass tried a diagonal cut here and it was reverted per explicit feedback: keep this edge straight).
- Centered heading "Stay Updated with Our Updates" — bold, dark navy, ~24-28px.
- Centered subtitle "Subscribe to our newsletter for cleaning tips, special offers, and updates" — slate, smaller.
- Inline row (stacks on mobile): envelope icon (`mark_email_unread.png`) + white pill email input ("Enter your email") with a blue border + solid dark-teal pill "Subscribe" button, all centered as one row with gaps.

## Color palette (best-guess hex; approximate where no exact source value exists)
| Swatch | Used for |
|---|---|
| `#0F6D93` (`primary-600`, existing token) | Hero banner background |
| `#FFFFFF` | Grid section background, hero text, input fill |
| `#0F6D93` (`primary-600`, existing token) | Caption text tint on hover / button background |
| `#0B3E58`-ish dark navy — using `#0C5878` (`primary-700`, existing token) | Grid captions, newsletter heading text |
| `#D7EEF8` (`primary-100`, existing token) | Newsletter band background |
| `#64748B` (slate-500) | Newsletter subtitle |

## Typography
- Hero heading: `font-heading` (Outfit), extrabold, uppercase — approximation of a rounder display face not in the repo.
- All other headings/captions: `font-heading` (Outfit).
- Body/subtitle copy, form fields: `font-sans` (Work Sans).

## Known ambiguities / limitations
- No screenshot file on disk → no automated `diff.js` score; verified visually against a local render of `/services` instead (same as `about-us-target-spec.md`).
- Hero heading font is a best-effort approximation — the source face isn't identifiable from a raster screenshot alone (per skill limitations: fonts are a best guess).
- Newsletter band's exact background hex is estimated from the screenshot, not pulled from a precise design token.
- Caption bullet inconsistency (items 2 and 7 have no leading dot) is reproduced as shown rather than "corrected," matching the project's existing precedent for source quirks.
