# Target Spec: "Client Testimonials" section

## Source
- Screenshot: pasted inline (no file path available) — same situation as the
  prior `why-choose-us` and `meet-your-needs` sections, verified visually
  rather than with the skill's automated `diff.js` pixel score.
- Local asset already in repo (used as-is, no cropping needed):
  `frontend/src/assets/images/testimonial_icon.png` — solid blue circle with
  a white speech-bubble glyph already baked in (confirmed by reading the
  file), so no CSS circle needs to be built around it.
- Approx. viewport width: 1351px (desktop).

## Layout (top to bottom)
1. Centered bold blue heading, "Client Testimonials".
2. Row of 3 equal-width white cards with a thin gray border and a light drop
   shadow, evenly spaced with gaps between them.
3. Each card: the testimonial icon centered near the top, slightly
   overlapping the card's top edge (negative top margin), then centered
   quote copy below it, generous padding on all sides.
4. Chevron prev/next arrows outside the card row — left arrow left of card 1,
   right arrow right of card 3, no circular background, plain dark glyphs,
   vertically centered on the row.

## Color palette
| Swatch | Used for |
|---|---|
| `#F2F2F2`-ish light gray (using existing `bg-slate-100`) | Section background |
| `--color-primary` (`#1281AD`) | Heading text |
| `#FFFFFF` | Card background |
| light gray (`border-slate-300`) | Card border |
| black/slate-800 | Quote copy |

## Typography
- Heading: bold, ~28-32px, `font-heading` (Outfit), matches other section headings.
- Quote copy: regular, ~14-15px, `font-sans` (Work Sans), centered, black.

## Spacing & sizing notes
- 3-column grid on desktop (`sm:grid-cols-3`), stacking to 1 column on mobile.
- Card: `rounded-md`, `border`, subtle shadow, generous padding (`p-6`).
- Icon: ~64px circle image, centered, pulled up with a negative top margin so
  it overlaps the card's top edge.
- Arrows sit outside the grid, in their own flex row with the grid between them.

## Components / repeated patterns
- One `TestimonialCard` shape reused per entry in `data/testimonials.js`,
  same "map over a data file" pattern as `WhyChooseUs`.
- Carousel shell (prev/next controls, `aria-roledescription="carousel"`,
  wraparound `goTo`) mirrors `HeroSlider`'s pattern, simplified: no autoplay
  (screenshot shows a static 3-up grid, not a rotating single slide), window
  of 3 consecutive items instead of 1.

## Imagery & icons
- Testimonial icon reused as-is from the existing local asset — no rebuilt
  circle/background needed.

## Known ambiguities
- No original screenshot file on disk; verified by rendering the live
  component and comparing visually to the pasted image, not `diff.js`.
- The screenshot's 3 testimonials are the only real content given — the data
  file holds exactly those 3 entries. The prev/next arrows are wired to a
  proper sliding window (so they'll do something meaningful once more
  testimonials are added), but with only 3 entries and a window of 3, they
  currently just rotate display order with no visible change. Flagging this
  rather than inventing extra placeholder testimonial copy not present in
  the source image.
