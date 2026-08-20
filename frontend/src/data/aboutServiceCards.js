import declutteringPhoto from "../assets/images/DECLUTTERING.png";
import residentialOrganizingPhoto from "../assets/images/RESIDENTIAL ORGANIZING.png";
import commercialOrganizingPhoto from "../assets/images/COMMERCIAL ORGANIZING.png";

/**
 * Photo cards for the About page's "SERVICES" band.
 *
 * Static, hand-authored data (no API yet), one entry per service category.
 * Local image imports (not Cloudinary) since that's where this artwork was
 * supplied — see data/assets.js for the shared-remote-asset case.
 *
 * Fields:
 * - id:      stable key for React list rendering
 * - label:   caption shown under the photo
 * - image:   imported photo
 * - imageAlt: alt text for accessibility
 *
 * @type {Array<{id: number, label: string, image: string, imageAlt: string}>}
 */
export const aboutServiceCards = [
  {
    id: 1,
    label: "Decluttering",
    image: declutteringPhoto,
    imageAlt: "Bright, decluttered living room with open shelving",
  },
  {
    id: 2,
    label: "Residential Organizing",
    image: residentialOrganizingPhoto,
    imageAlt: "Neatly organized closet with labeled bins and folded linens",
  },
  {
    id: 3,
    label: "Commercial Organizing",
    image: commercialOrganizingPhoto,
    imageAlt: "Organized open-plan office with tidy desks and filed storage",
  },
];

export default aboutServiceCards;
