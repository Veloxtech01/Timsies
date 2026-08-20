# Target Spec: "Why Choose Us?" section

## Source
- Screenshot: pasted inline (no file path available), plus exact Figma-export CSS supplied alongside it.
- Approx. viewport width: 1444px (desktop), canvas height 701px.
- CSS is authoritative for colors/spacing/type sizes below; screenshot is authoritative for layout/content/imagery.

## Layout (left to right)
1. Left column — "Why Choose Us?" heading (38px) above a stack of 4 white rounded cards, each with a drop shadow and a filled check-circle glyph in the top-right corner:
   - Card 1 "MISSION" — heading + one paragraph.
   - Card 2 "CORE VALUES" — heading + "Compassion:" bold-lead paragraph.
   - Card 3 (untitled) — two bold-lead lines: "Competence:" and "Customization:".
   - Card 4 "CONTINUITY" — single bold-lead line (heading style doubles as the only content).
2. Right column — cutout photo of a smiling worker in a denim apron holding a cleaning caddy (local asset already in repo: `frontend/src/assets/images/dl 1.png`), on the section's plain background (no visible container/frame).

## Color palette
| Swatch | Used for |
|---|---|
| `#FCFDFD` | Section background |
| `#006A94` | Headings, bold lead-in text, check-glyph fill — closest existing token is `--color-primary-600` (`#0f6d93`); used as an arbitrary value to preserve the exact source color |
| `#000000` | Card body copy |
| `#FFFFFF` | Card background |

## Typography
- Source CSS specifies `Istok Web` throughout. This project's type system (`frontend/src/index.css`) only defines `font-heading` (Outfit) and `font-sans` (Work Sans) — no third family. **Decision: reuse `font-heading` for card titles/bold leads and `font-sans` for body copy** rather than importing a third font just for one section, to keep the site's type system consistent. Flagging this deviation from the literal spec.
- Card headings ("MISSION", "CORE VALUES", "CONTINUITY"): ~28px/24px, bold, uppercase, `font-heading`.
- Bold lead-ins ("Compassion:", "Competence:", "Customization:"): ~20-24px, bold, `font-heading`.
- Body copy: 16-20px, regular, `font-sans`, black.

## Spacing & sizing notes
- Card width ≈ 496px at 1444px canvas (~34% of a ~1240px content area) — implemented as a fluid column instead of a fixed px width so it survives smaller viewports.
- Card border-radius: 17px (`rounded-2xl` ≈ close enough visually; using arbitrary `rounded-[17px]` for exact match).
- Card shadow: `0px 4px 10.1px #02376A` (soft dark-blue shadow, not a neutral gray shadow) — implemented as an arbitrary `shadow-[0_4px_10px_rgba(2,55,106,0.5)]`.
- Vertical gaps between the 4 cards in source: roughly even (~25px).
- Check-glyph: 24x24px, positioned top-right inside each card.

## Components / repeated patterns
- Single `Card` shape reused 4x: white bg, rounded-2xl, colored soft shadow, check-circle icon anchored top-right, heading + copy stacked inside.

## Imagery & icons
- Worker photo: reuse existing `dl 1.png` asset (already imported by no component yet) — cutout on transparent background, no cropping needed.
- Check glyph ("lets-icons:check-fill"): no exact icon package installed; using `FaCheckCircle` from the already-installed `react-icons/fa` set as the closest filled check-circle equivalent.

## Known ambiguities
- No original screenshot file on disk, so this build was verified by rendering the component and visually comparing to the pasted image, not the skill's automated `diff.js` pixel score.
- Exact card vertical rhythm in the 701px-tall source canvas doesn't need to be reproduced literally in a responsive component — proportion/order preserved, not literal absolute pixel offsets.
