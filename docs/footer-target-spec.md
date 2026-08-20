# Target Spec: Footer

## Source
- Screenshot: pasted inline (no file path available) — following the `WhyChooseUs` precedent, this build is verified by rendering the component and comparing visually to the pasted image, not the skill's automated `diff.js` pixel score.
- Approx. viewport width: ~1444px (desktop), canvas height ~577px.
- Image shows a subtle diagonal fabric/texture photo under a blue tint — this exactly matches an asset already in the repo: `frontend/src/assets/images/footer_bg.png` (blue-tinted photo, pre-baked overlay). Using that file directly rather than reconstructing the tint.

## Layout (top to bottom)
1. Full-bleed section, background = `footer_bg.png` (cover, no repeat), padded content on top.
2. Content row (4 columns on desktop, wrapping on narrow viewports):
   - Col 1: circular brand logo mark (reuse `LOGO_URL` from `data/assets.js`, same asset Header uses), larger than the header's.
   - Col 2: "WHAT WE DO" heading (white, bold, small-caps tracking) + vertical link list: Home, About Us, Our Services, Contact Us — same four routes as `Header`'s nav.
   - Col 3: "REACH OUT" heading + 4 icon+text rows: hours ("Mon-Fri. 9am - 5pm"), two phone numbers, one email address, one street address. Each row pairs a small white line-icon with light text.
   - Col 4 (widest): compact contact form — 4 single-line fields stacked (Names, Tel, E-mail, Address) then a taller message box ("Write a Message"), each rendered as a solid near-black rounded rectangle with light gray placeholder-style label text, no separate `<label>` above — the field's own text doubles as the placeholder.
3. Bottom bar: solid near-black strip, full width, separate from the blue section above:
   - Left: 4 social icons in a row (Instagram, Facebook, a classic bird-shaped Twitter mark, YouTube) — small, white, tightly spaced, no circular hover background visible in the static shot.
   - Right: the same 4 nav links repeated horizontally, light blue text, separated by spacing.

## Color palette
| Swatch (best-guess hex) | Used for |
|---|---|
| `footer_bg.png` (blue-tinted photo) | Main section background |
| `#FFFFFF` | Logo ring, column headings, "REACH OUT"/"WHAT WE DO" text, form field labels-as-placeholder |
| `#CDE6F2` (light blue) — close to `--color-primary-100` (`#d7eef8`) | Nav link body text (both columns and bottom bar) |
| `#0A0F14` (near-black) | Form field fill, bottom bar background — no exact existing token, using an arbitrary near-black rather than pure `#000` to match the screenshot's slightly warm dark tone |
| `#9AA5AD` (muted gray) | Placeholder-style text inside form fields |

## Typography
- Column headings ("WHAT WE DO", "REACH OUT"): `font-heading`, bold, uppercase, ~14-16px, letter-spacing slightly widened.
- Nav links, hours/contact rows, form field text: `font-sans`, regular, ~14-15px.
- No large display heading anywhere in this section (unlike Hero/RequestQuote) — it's the most text-dense, smallest-type section on the page.

## Spacing & sizing notes
- Section content: `max-w-7xl mx-auto`, generous vertical padding (`py-12`/`py-16`), matches Header's `max-w-7xl` container so the footer aligns with the header above it.
- 4-column grid → collapses to 1 column stacked on mobile, 2 on `sm`, 4 on `lg`+.
- Form fields: `rounded-md`, no border, dark fill, `px-4 py-3`, stacked with a small gap (~10-12px) — visually the same "solid tinted box, no border" pattern already used in `RequestQuote`'s `FIELD_CLASS`, just inverted to dark-on-light instead of light-on-dark.
- Message box: same style, taller (~4-5 rows).
- Bottom bar: full-width, no max-width container needed on the background, but its content row obeys the same `max-w-7xl` as everything else; icons and links vertically centered, icons left-aligned, links right-aligned, split across the row on desktop and stacked on very narrow screens.

## Components / repeated patterns
- Reuses the "single tinted field style, no visible label" pattern from `RequestQuote.jsx`'s `FIELD_CLASS`, inverted to a dark fill (`bg-[#0A0F14] text-white placeholder:text-[#9AA5AD]`) since the section itself is light/photo-toned rather than solid dark.
- Nav link list is defined locally in `Footer.jsx` (small, 4-item array) rather than extracted to a shared file — mirrors how `Header.jsx` already keeps its own local `NAV_LINKS` array; not touching `Header.jsx` for this task.

## Imagery & icons (described, not extracted)
- Logo: reuse `LOGO_URL` from `frontend/src/data/assets.js` (same asset as Header).
- Background: reuse existing local asset `frontend/src/assets/images/footer_bg.png`.
- REACH OUT row icons, left to right in the screenshot: a smartphone-outline glyph, an envelope glyph, a clock glyph, a map-pin glyph — mapped to `FiSmartphone`, `FiMail`, `FiClock`, `FiMapPin` from the already-installed `react-icons/fi` set (same set `Header` already imports from for its hamburger icon).
- Bottom-bar social icons: Instagram, Facebook, classic bird-shaped Twitter logo, YouTube — reusing `FaInstagram`/`FaFacebookF`/`FaYoutube` from `react-icons/fa6` like `Header`, but `FaTwitter` (the classic bird) from `react-icons/fa` instead of `Header`'s `FaXTwitter`, since the screenshot clearly shows the old bird mark, not the X wordmark. This is an intentional footer/header divergence, not an inconsistency to "fix."

## Known ambiguities
- The REACH OUT row icons in the screenshot don't semantically match their adjacent text 1:1 (e.g. a phone-shaped icon sits next to the hours row, not the phone-numbers row) — reproducing the icon shapes and row order exactly as shown rather than "correcting" the pairing, since this is a recreation task.
- Exact hex values are best-guesses from a screenshot with no color-picker access (except the background photo, which is a known local asset).
- No copyright/legal line is visible anywhere in the screenshot, so the previous placeholder's "© 2026 Timsies Entirety" text is dropped rather than kept — `Footer.test.jsx` is updated accordingly to assert the new structure instead of the old copyright string.
- Form has no visible submit button in the screenshot's crop — the message field is the last visible element. Adding a submit button would be inventing content not shown, so treating the visible fields as a display-only teaser form is out of scope; only rendering exactly what's visible (4 inputs + textarea) without a button, using `react-hook-form` registration for future wiring consistency with `RequestQuote.jsx` but no `onSubmit` handler is required since no button exists to trigger one in the source.
