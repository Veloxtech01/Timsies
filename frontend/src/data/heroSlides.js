/**
 * Hero slider content for the home page.
 *
 * Static, hand-authored data (no API yet) consumed by the hero image slider.
 * Each slide describes one service offering.
 *
 * Fields:
 * - id:         stable key for React list rendering
 * - title:      headline shown over the slide
 * - subtitle:   supporting copy describing the service
 * - image:      remote (Cloudinary) URL for the slide background
 * - imageAlt:   alt text for accessibility
 * - buttonUrl:  internal route for the slide's CTA (use <Link>, not <a>)
 *
 * The CTA button artwork is shared by every slide, so it lives in
 * `assets.js` as CTA_BUTTON_IMAGE rather than being repeated below.
 *
 * @type {Array<{id: number, title: string, subtitle: string, image: string, imageAlt: string, buttonUrl: string}>}
 */
export const heroSlides = [
  {
    id: 1,
    title: "DECLUTTERING",
    subtitle:
      "We are involved in the process of identifying, sorting, and removing items that are no longer needed, useful, or valuable from your space.",
    image:
      "https://res.cloudinary.com/dxguoskll/image/upload/v1785803700/Slider1_oijjnl.png",
    imageAlt: "Professional decluttering service",
    buttonUrl: "/services/decluttering",
  },
  {
    id: 2,
    title: "RESIDENTIAL ORGANIZING",
    subtitle:
      "We provide professional services that involve arranging, optimizing, and maintaining every area of a home to improve functionality, aesthetics, and ease of living.",
    image:
      "https://res.cloudinary.com/dxguoskll/image/upload/v1785803700/Slider2_qwgpws.png",
    imageAlt: "Residential organizing service",
    buttonUrl: "/services/residential-organizing",
  },
  {
    id: 3,
    title: "COMMERCIAL ORGANIZING",
    subtitle:
      "We provide professional organizing services for business premises, workspaces, inventory, equipment, documents, and operational systems to improve efficiency, productivity, safety, and the overall appearance of a business environment.",
    image:
      "https://res.cloudinary.com/dxguoskll/image/upload/v1785803701/slider3_bscapu.png",
    imageAlt: "Commercial organizing service",
    buttonUrl: "/services/commercial-organizing",
  },
];

export default heroSlides;
