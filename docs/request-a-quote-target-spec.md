# Target Spec: "Request a Quote" section

## Source
- Screenshot: pasted inline (no file path available).
- Approx. viewport width: ~1439px (desktop), canvas height ~685px.
- Image is clean/uncompressed-looking; no visible artifacts.

## Layout (top to bottom)
1. Full-bleed dark section, content centered in a narrow column (~660px) with generous top/bottom padding (~64px).
2. Envelope/quote icon — white glyph, no background box, centered, ~64-72px, sits above the heading with a gap.
3. "Request a Quote" — large centered heading, white, bold.
4. Subheading paragraph, centered, one line, light blue-gray, smaller than heading.
5. Form (gap ~24px above it):
   - Row 1: two-column grid — "Full Name" text input | "Email Address" text input.
   - Row 2: two-column grid — "Phone Number" text input | "Service Type" select (with chevron-down icon).
   - Row 3: "Message" — full-width textarea, ~4 rows tall.
   - Row 4: full-width submit button, "Get a Free Quote".
   - Each field has a label above it (white, small, semibold) and a light, near-white input below.
   - Two-column rows collapse to one column on narrow viewports (not shown in screenshot, inferred).

## Color palette
| Swatch (best-guess hex) | Used for |
|---|---|
| `#0B3B54` | Section background (dark navy-teal) — closest existing token `--color-primary-900` (`#06344a`); using project token rather than a new arbitrary value since it's visually close and keeps the palette consistent |
| `#FFFFFF` | Icon, heading text, field labels |
| `#B9D3E0` | Subheading paragraph text — close to `--color-primary-100` (`#d7eef8`) is too light; using an arbitrary muted blue-gray for accurate contrast |
| `#EFF9FD` | Input/textarea/select/button background — matches existing token `--color-primary-50` exactly |
| `#0C5878` | Button label text — matches existing token `--color-primary-700` |
| `#64748B` (slate-500) | Placeholder text inside inputs |

## Typography
- Heading ("Request a Quote"): `font-heading` (Outfit), bold, ~34-40px.
- Subheading paragraph, labels, input text, button text: `font-sans` (Work Sans).
- Labels: ~14px, semibold, white.
- Inputs/placeholders: ~15px, regular.
- Button: ~16px, bold.

## Spacing & sizing notes
- Content column max-width: ~660px (`max-w-2xl` ≈ 672px, close enough), centered via `mx-auto`.
- Section padding: generous vertical (`py-16`/`py-20`), horizontal padding for smaller screens.
- Field grid gap: ~24px column gap, ~20px row gap.
- Inputs: `rounded-lg`, no visible border, `px-4 py-3` internal padding.
- Textarea: same styling as inputs, taller (~4 rows).
- Button: full width, `rounded-lg`, `py-3`, centered bold text.

## Components / repeated patterns
- Single reusable input style (bg `primary-50`, rounded, no border, slate placeholder) shared by text inputs, select, and textarea.
- Label + field is a repeated pair — implemented inline per react-hook-form field rather than a generic subcomponent, since the fields differ (input vs. select vs. textarea).

## Imagery & icons (described, not extracted)
- Top icon: white envelope with a document/ribbon peeking out of the flap — matches `BsEnvelopePaperFill` from the already-installed `react-icons/bs` set. No local asset needed.
- Select chevron: native `<select>` arrow, recolored via a wrapped icon (`FaChevronDown` from `react-icons/fa`) since native arrows can't be restyled directly.

## Known ambiguities
- Exact background hex is a best guess from a screenshot with no color-picker access; used the closest existing brand token (`primary-900`) instead of inventing a new arbitrary color.
- Service Type dropdown options aren't visible (shows placeholder "Select a service") — reusing the existing service labels from `frontend/src/data/services.js` as the option list.
- No live backend yet (per CLAUDE.md, `/backend` doesn't exist) — submit handler will validate client-side only and stop short of an API call, per project scaffolding status.
- Mobile/narrow-viewport behavior for the two-column rows is inferred (stack to one column), not shown in the screenshot.
