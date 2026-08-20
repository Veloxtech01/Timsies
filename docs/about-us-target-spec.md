# Target Spec: About Us page

## Source
- Screenshot: pasted inline (no file path available) — one tall composite image covering the hero banner plus every section below it. No `diff.js` pixel score is available for this build (same situation as `why-choose-us-target-spec.md`); verified by visual comparison against the pasted image and a local render instead.
- Approx. viewport width: 1444px (desktop), full page height ~3076px.

## Sections (top to bottom)

### 1. Hero banner ("AboutHero")
- Full-bleed photo (shelving unit with baskets, pillows, boxes, wall clock) with a solid dark-blue tint overlay, centered white "About Us" heading in the rounded/no-crossbar display face already used for HeroSlider captions (`font-hero-title` / Aclonica).
- **Asset match**: the background photo is the same shelf/basket/clock photo already in the repo as `frontend/src/assets/images/meet_img.png` (currently used un-tinted, with its white border, in `MeetYourNeeds`). Reused here at full-bleed with `object-cover` and a tint overlay recreated in CSS (the asset itself has no tint baked in, unlike `meet_bg.png`).
- Approx. height: shorter than the HeroSlider (~280-320px vs. HeroSlider's 68-80vh) — a page-title banner, not a carousel.

### 2. CEO profile ("CeoProfile")
Two-column row (text left, photo right on lg+, stacked on mobile):
- Two intro paragraphs about Oduok Atim (CEO).
- 4-item checklist, each with a green square checkmark glyph.
- "Leadership & Vision" subheading + paragraph.
- "Background & Experience" subheading + paragraph. **Ambiguity**: source copy cuts off mid-sentence ("She holds a degree in--- and") and runs straight into the next heading with no clear break — this reads as unfinished/placeholder client copy. Rendered as "...client relations. She holds a degree in [field — to be confirmed]." with the bracketed placeholder flagged, rather than reproducing the broken grammar verbatim.
- "Personal Philosophy" subheading + one-line pull-quote, styled as a blockquote.
- Photo: real headshot supplied at `frontend/src/assets/images/CEO 2.png` — teal background already baked into the asset (same pattern as `meet_img.png`), used as-is.
- Below the two-column row, a full-width paragraph block (company mission copy — 4 short paragraphs ending "Let us handle the cleaning, so you can focus on what truly matters.").

### 3. Vision / Mission / Value cards ("MissionVisionValue")
Three equal dark cards in a row (stacked on mobile), each: centered white line-art icon, bold heading, short centered paragraph.
- Vision — navy blue card, real icon asset `vision.png`.
- Mission — near-black navy card, real icon asset `mission.png`.
- Value — dark teal card, real icon asset `value.png`.
- All three icons supplied as white glyphs on transparent background in `frontend/src/assets/images/`.

### 4. Services ("AboutServices")
- Light background band.
- Centered "SERVICES" heading (large, bold) + subheading "Professional Services for Spaces That Deserve More".
- Three photo cards with all-caps captions: DECLUTTERING, RESIDENTIAL ORGANIZING, COMMERCIAL ORGANIZING.
  - Real photos supplied at `frontend/src/assets/images/DECLUTTERING.png`, `RESIDENTIAL ORGANIZING.png`, `COMMERCIAL ORGANIZING.png` — pixel-exact matches to the source screenshot.
- Three text columns: "Our Services" (9-item bullet list), "Why Choose Timsies Entirety?" (two labeled sub-points), "Personalized Solutions" (intro line + one labeled sub-point).
- Closing centered paragraph + "Get a Quote" button (links to `/` — the only route with a live quote form today, `RequestQuote` on the homepage; same placeholder-route precedent as `MeetYourNeeds`' CTA).

## Color palette (best-guess hex; flagged as approximate where no exact source value exists)
| Swatch | Used for |
|---|---|
| `#0B3E58` | Hero overlay tint — reused from `RequestQuote`'s existing dark-blue section color rather than a new one-off value |
| `#2E7B7B` | CEO photo placeholder background (teal, matches source) |
| `#22c55e` (`accent-500`, existing token) | Checklist check-glyph fill |
| `#0E3A5F` | Vision card background (navy) |
| `#0A1420` | Mission card background (near-black navy) |
| `#0E5C6A` | Value card background (teal) |
| `#EAF1F5` | Services section background (light blue-gray) |
| `#0F6D93` (`primary-600`, existing token) | "Get a Quote" button |

## Typography
- Hero "About Us": `font-hero-title` (Aclonica), matches the rounded no-crossbar "A" visible in the source — same face already reserved for HeroSlider captions.
- All other headings: `font-heading` (Outfit), consistent with the rest of the site's type system.
- Body copy: `font-sans` (Work Sans).
- "SERVICES" heading: large, bold, uppercase tracking.

## Known ambiguities / limitations
- No original screenshot file on disk → no automated `diff.js` score for this page; visual comparison only (same as `why-choose-us-target-spec.md`).
- Card background colors (Vision/Mission/Value) and hero overlay opacity are estimated from the screenshot, not pulled from exact design tokens — the real assets (photos + icons) supplied after the first pass replaced all placeholder imagery.
- "Background & Experience" paragraph's missing degree field is a content gap in the source design, not a build error — flagged with a bracketed placeholder in the copy.
