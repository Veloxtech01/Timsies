/**
 * Content for the "Why Choose Us?" home page section.
 *
 * Static, hand-authored data (no API yet), one entry per card. Each card
 * pairs an optional heading with one or more lead-in/body copy pairs so the
 * "Core Values" and "Competence" cards can hold more than one paragraph
 * while "Mission" and "Continuity" only need one.
 *
 * Fields:
 * - id:      stable key for React list rendering
 * - heading: uppercase card title (omit for the "Continuity" card, whose
 *            single lead-in line doubles as its heading in the source design)
 * - items:   array of { lead, body } — `lead` is the bold-colored lead-in
 *            text (e.g. "Compassion:"), `body` is the plain black copy that
 *            follows it on the same line
 *
 * @type {Array<{id: number, heading?: string, items: Array<{lead: string, body: string}>}>}
 */
export const whyChooseUsCards = [
  {
    id: 1,
    heading: "Mission",
    items: [
      {
        lead: "",
        body: "To enable organizations, individuals both young and elderly to adapt to a more organized, productive, peaceful and enabling environment.",
      },
    ],
  },
  {
    id: 2,
    heading: "Core Values",
    items: [
      {
        lead: "Compassion:",
        body: "We understand the emotional challenges of clutter and disorganization.",
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        lead: "Competence:",
        body: "Our team of professional organizers are trained and certified to provide top-notch services.",
      },
      {
        lead: "Customization:",
        body: "We tailor our services to meet the unique needs and goals of each client.",
      },
    ],
  },
  {
    id: 4,
    items: [
      {
        lead: "Continuity:",
        body: "We promote eco-friendly and sustainable organizing practices.",
      },
    ],
  },
];

export default whyChooseUsCards;
