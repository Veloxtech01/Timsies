import visionIcon from "../assets/images/vision.png";
import missionIcon from "../assets/images/mission.png";
import valueIcon from "../assets/images/value.png";

/**
 * Vision / Mission / Value card content for the About page.
 *
 * Static, hand-authored data (no API yet), one entry per card. Icons are
 * the real brand artwork supplied for this page (white glyphs, transparent
 * background) rather than react-icons approximations.
 *
 * Fields:
 * - id:      stable key for React list rendering
 * - heading: card title
 * - body:    card paragraph copy
 * - icon:    imported icon image (white glyph, transparent bg)
 * - bgClass: Tailwind arbitrary-value background color for this card
 *
 * @type {Array<{id: number, heading: string, body: string, icon: string, bgClass: string}>}
 */
export const missionVisionValueCards = [
  {
    id: 1,
    heading: "Vision",
    body: "To become a trusted professional Decluttering, Organising and cleaning brand known for excellence and transformation.",
    icon: visionIcon,
    bgClass: "bg-[#0E3A5F]",
  },
  {
    id: 2,
    heading: "Mission",
    body: "To transform homes, workplaces and corporate environments into clean, organised, functional and productive spaces through professional decluttering, cleaning, space optimisation and reorganisation services.",
    icon: missionIcon,
    bgClass: "bg-[#0A1420]",
  },
  {
    id: 3,
    heading: "Value",
    body: "We understand the emotional challenges of clutter and disorganization.",
    icon: valueIcon,
    bgClass: "bg-[#0E5C6A]",
  },
];

export default missionVisionValueCards;
