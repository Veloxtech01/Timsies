/**
 * Shared remote asset URLs (Cloudinary).
 *
 * Single source of truth for images used in more than one place — import
 * from here instead of pasting the same URL into each component, so a
 * re-upload only needs changing once.
 */

/** Timsies Entirety brand logo — header, footer, favicons, share cards. */
export const LOGO_URL =
  "https://res.cloudinary.com/dxguoskll/image/upload/v1787288761/timisies_logo_wwyvmy.png";

/** Alt text to pair with LOGO_URL wherever it's rendered. */
export const LOGO_ALT = "Timsies Entirety logo";

/**
 * CTA button graphic used on every hero slide. Lives here rather than on each
 * slide because all slides share the same artwork — only the link differs.
 */
export const CTA_BUTTON_IMAGE =
  "https://res.cloudinary.com/dxguoskll/image/upload/v1785803699/Component_6_s1blhj.png";
