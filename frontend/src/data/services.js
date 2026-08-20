import officeIcon from "../assets/images/material-symbols_warehouse.png";
import houseIcon from "../assets/images/gridicons_house.png";
import constructionIcon from "../assets/images/carbon_construction.png";
import equipmentIcon from "../assets/images/lsicon_equipment-filled.png";
import keysIcon from "../assets/images/game-icons_house-keys.png";

/**
 * Service strip content — the icon + label band shown directly under the
 * hero slider on the home page.
 *
 * Static, hand-authored data (no API yet), one entry per service offered.
 * Icons are local files (Vite resolves the imports above to hashed asset
 * URLs at build time) rather than Cloudinary, since that's where the
 * uploaded artwork lives — see assets.js for the shared-remote-asset case.
 *
 * Fields:
 * - id:      stable key for React list rendering
 * - label:   text shown next to the icon (may wrap to two lines on narrow cells)
 * - icon:    imported icon image (white glyph); empty string renders no icon
 * - iconAlt: alt text for accessibility (icons are decorative, so this stays empty
 *            and the label carries the meaning — see ServiceStrip.jsx)
 *
 * TODO: "Residential Cleaning" has no icon file yet — a 6th image is coming
 * later; ServiceStrip.jsx already skips rendering the <img> when `icon` is
 * empty so the cell stays text-only in the meantime.
 *
 * @type {Array<{id: number, label: string, icon: string, iconAlt: string}>}
 */
export const services = [
  {
    id: 1,
    label: "Janitorial | Office Cleaning",
    icon: officeIcon,
    iconAlt: "",
  },
  {
    id: 2,
    label: "Commercial Organizing",
    icon: houseIcon,
    iconAlt: "",
  },
  {
    id: 3,
    label: "Residential Cleaning",
    icon: "",
    iconAlt: "",
  },
  {
    id: 4,
    label: "Post-Construction Cleaning",
    icon: constructionIcon,
    iconAlt: "",
  },
  {
    id: 5,
    label: "Equipment Cleaning",
    icon: equipmentIcon,
    iconAlt: "",
  },
];

/** Decorative keys icon for ServiceStrip's leading spacer cell (no label). */
export const spacerIcon = keysIcon;

export default services;
