/**
 * Content for the "Client Testimonials" home page section.
 *
 * Static, hand-authored data (no API yet), one entry per testimonial card.
 *
 * Fields:
 * - id:     stable key for React list rendering
 * - quote:  the testimonial copy shown inside the card
 * - author: optional attribution line (omitted when the source quote has none)
 *
 * @type {Array<{id: number, quote: string, author?: string}>}
 */
export const testimonials = [
  {
    id: 1,
    quote: '"Timsies Entirety", transformed my home and my life!" -',
    author: "Mrs. Ekanen Dada",
  },
  {
    id: 2,
    quote:
      'Success Stories: "We helped a busy entrepreneur increase productivity by 30% through customized workspace optimization."',
  },
  {
    id: 3,
    quote:
      "I was extremely pleased with the service that the staff did for me. The office was attentive to my request and was great with communication.",
  },
  {
    id: 4,
    quote:
      "Success Stories: A local retailer had their entire stockroom reorganized in a single weekend — everything now has a labeled place and restocking takes half the time.",
  },
];

export default testimonials;
