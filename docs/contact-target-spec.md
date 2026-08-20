# Target Spec: Contact Us page

## Source
- Screenshot: pasted inline (no file path available), single composite covering the whole page.
- Approx. viewport width: ~730px capture (scales like a ~1440px desktop page), full page height ~834px in the crop.
- Real asset files were supplied for two of the three photos:
  - Hero photo (man on a corded office phone) = `frontend/src/assets/images/contact_bg.png` (name is misleading — despite "bg" this is the hero's foreground photo, not a tiled background texture).
  - Bottom-left photo (woman cleaning a window) = `frontend/src/assets/images/afro-woman-cleaning-window-with-rag-home 1.png`.
- "Frame 109" text visible bottom-left of the hero is a leftover Figma frame label, not real page content — omitted from the build.

## Sections (top to bottom)

### 1. Hero banner ("ContactHero")
- Full-bleed photo (`contact_bg.png`), no color tint over the photo itself (unlike AboutHero).
- Centered pill/rounded-rectangle badge overlaid on the photo (not full-bleed tint) containing "TALK to Us" in bold white text — badge background is a semi-transparent dark navy, rounded corners (~12-16px).
- Heading face: the capital "A" in "TALK" has no crossbar, matching `font-hero-title` (Aclonica) already used for HeroSlider/AboutHero page titles — reused here rather than a new font.
- Approx. height: ~260-300px, shorter than the full HeroSlider carousel.

### 2. Map ("ContactMap")
- Full-width embedded real map (not a static screenshot), showing the business address: "58, Lambe Iluyomade Street by Vulcanizer Bus stop, Ago Palace Way, Okota, Isolo/Lagos, Nigeria" (matches the address fragment already used in `Footer`'s "Reach Out" list).
- Implemented as a plain `<iframe>` pointed at Google's no-API-key embed URL (`https://www.google.com/maps?q=<address>&output=embed`) — no new dependency, no API key needed for this basic embed.
- Approx. height similar to the hero (~260-300px), full-bleed width, no rounded corners (edge-to-edge like the source).

### 3. Quote strip ("ContactQuote")
Two-column row on lg+ (photo+disclaimer left, form card right), stacked on mobile, over a solid dark navy section background with two large, faint decorative circle blobs (recreated in CSS, not baked into an image).
- Left: `afro-woman-cleaning-window-with-rag-home 1.png`, rounded corners (top-left more pronounced per source), below it a small light/white disclaimer paragraph: "We acknowledged the safety of your data will be used for just the purpose of processing your request."
- Right: a lighter muted-blue rounded card containing a vertical form — no field labels above inputs, instead placeholder text with a trailing colon inside each field (same convention `Footer`'s compact form already uses): "Name:", "E-mail:", "Phone:", "Service Required:" (multi-line textarea), then a light/near-white "Get a Quote" button with dark text, centered.
- No backend yet (per CLAUDE.md) — `react-hook-form` handles client-side only, `onSubmit` logs the payload, same pattern as `RequestQuote` and `Footer`.

## Color palette (best-guess hex; existing tokens reused where close)
| Swatch | Used for |
|---|---|
| `#0B3E58` | Hero badge background (semi-transparent) and Quote section background — same dark navy already used by `RequestQuote`/`AboutHero` |
| `#FFFFFF` | Hero badge text, button background, field text |
| `#6E9BB8` (approx.) | Quote form card background (muted mid-blue) — arbitrary value, no existing token is close enough |
| `#1F2937`-ish dark | "Get a Quote" button label text (dark, near-black-blue) |
| `#E7EEF2` | Field background inside the form card (near-white) |

## Typography
- Hero "TALK to Us": `font-hero-title` (Aclonica), bold, white.
- Form fields, disclaimer, button: `font-sans` (Work Sans).

## Spacing & sizing notes
- Hero and map sections are full-bleed (no horizontal page padding), stacked directly with no gap.
- Quote section: standard page padding (`px-4 sm:px-6 lg:px-8`), generous vertical padding (`py-16`/`py-20`).
- Form card: `rounded-2xl`, internal padding ~`p-6`/`p-8`, fields `rounded-lg`, stacked with consistent gap (~12-16px).

## Components / repeated patterns
- Field style (placeholder-with-colon, no separate `<label>`) reuses the convention from `Footer`'s compact contact form rather than `RequestQuote`'s labeled-field convention, since the source screenshot shows no visible labels here either.
- Map embed has no existing repo precedent — first use of an `<iframe>` in this codebase; scoped to `ContactMap` only.

## Known ambiguities / limitations
- Exact hex values are estimated from the screenshot (no color-picker access) — muted-blue form card color has no close existing token, so it's a new arbitrary value (flagged per CLAUDE.md "no new dependencies without flagging" — this is a value, not a package, but noting the deviation from the existing token ramp).
- Decorative circle blobs' exact position/opacity are approximated from the screenshot.
- "Frame 109" label and any other Figma-tool chrome visible in the screenshot are excluded as non-content.
- Map pin/zoom level is approximated from the given address string; not verified against a live geocode lookup.
