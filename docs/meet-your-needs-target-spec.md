# Target Spec: "Let's Meet Your Organizing Needs" section

## Source
- Screenshot: pasted inline (no file path available).
- Local assets already in repo (used as-is, no cropping needed):
  - `frontend/src/assets/images/meet_bg.png` — full-bleed blue-tinted office-cleaning photo, tint already baked into the file
  - `frontend/src/assets/images/meet_img.png` — organizing/shelving photo with a white polaroid-style border already baked into the file
- Approx. viewport width: 1440px.

## Layout (left to right)
1. Full-bleed section, `meet_bg.png` as the background (object-cover), no extra overlay needed since the blue tint is already part of the image.
2. Left — `meet_img.png` shown at its native aspect ratio, roughly square, sitting on the background with its own baked-in white border acting as the frame.
3. Right — text block: bold white heading, a paragraph of white/90 body copy below it, then a white pill-shaped "Read More" button with dark text, left-aligned under the paragraph with a visible gap above it.

## Color palette
| Swatch | Used for |
|---|---|
| Blue tint from `meet_bg.png` | Section background (already in the asset, not re-applied) |
| `#FFFFFF` | Heading text, button background, image border |
| `white/90` | Body paragraph |
| `#0F172A`-ish dark navy | Button label text |

## Typography
- Heading: bold, ~28-32px, `font-heading` (project's existing Outfit token) — no new font needed, source uses a generic bold sans.
- Body: regular, ~16-17px, `leading-relaxed`, `font-sans` (Work Sans), white/90.
- Button label: medium weight, ~16px, dark text on white pill.

## Spacing & sizing notes
- Section vertical padding generous (~64-80px) so the background photo reads as full-bleed above and below the content.
- Image and text column roughly split the container width evenly with a gap between them.
- Button sits with a clear margin above it, separating it from the paragraph.

## Components / repeated patterns
- One-off section, not a repeated card list — content is hardcoded in the component rather than pulled from a data file, consistent with how one-off sections would be authored (cf. `whyChooseUs.js` being a data file only because that section repeats 4 cards).

## Imagery & icons
- Both images are pre-existing local assets with their styling (tint, border) already baked in — no CSS recreation of the tint/frame needed, just `object-cover`/native placement.

## Known ambiguities
- No original screenshot file on disk; verified by rendering the live component and comparing visually to the pasted image.
- "Read More" has no real destination yet (only `/` exists in the router) — linked to `/about` as a placeholder future route, matching the existing precedent in `data/heroSlides.js` (`buttonUrl` pointing at routes that don't exist yet).
