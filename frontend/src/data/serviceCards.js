import declutteringPhoto from "../assets/images/DECLUTTERING.png";
import residentialPhoto from "../assets/images/RESIDENTIAL ORGANIZING.png";
import officeCommercialPhoto from "../assets/images/Office & Commercial Organization.png";
import deepCleaningPhoto from "../assets/images/Deep Cleaning.png";
import moveInOutPhoto from "../assets/images/Move in Move Out Cleaning.png";
import wardrobeClosetPhoto from "../assets/images/Wardrobe & Closet Organization.png";
import kitchenPantryPhoto from "../assets/images/Kitchen & Pantry Organization.png";
import postEventPhoto from "../assets/images/Post-Event Cleaning.png";
import customizedPhoto from "../assets/images/Customized Cleaning & Organization.png";

/**
 * Service grid content for the "Our Services" page — one entry per photo
 * card. `bullet` mirrors the source screenshot exactly: two captions
 * ("Residential Cleaning & Organization" and "Kitchen & Pantry Organization")
 * have no leading dot there, reproduced as-is rather than "corrected" (same
 * precedent as Footer's REACH_OUT_ROWS).
 *
 * Fields:
 * - id:    stable key for React list rendering
 * - image: imported photo (Vite resolves to a hashed asset URL at build time)
 * - alt:   descriptive alt text for the photo
 * - label: caption text shown under the photo
 * - bullet: whether the caption gets a leading "•"
 *
 * @type {Array<{id: number, image: string, alt: string, label: string, bullet: boolean}>}
 */
export const serviceCards = [
  {
    id: 1,
    image: declutteringPhoto,
    alt: "Tidy, decluttered living room with open shelving",
    label: "Decluttering",
    bullet: true,
  },
  {
    id: 2,
    image: residentialPhoto,
    alt: "Neatly organized closet shelving with folded clothes and storage bins",
    label: "Residential Cleaning & Organization",
    bullet: false,
  },
  {
    id: 3,
    image: officeCommercialPhoto,
    alt: "Rows of organized warehouse shelving",
    label: "Office & Commercial Organization",
    bullet: true,
  },
  {
    id: 4,
    image: deepCleaningPhoto,
    alt: "Mopping a wet floor",
    label: "Deep Cleaning",
    bullet: true,
  },
  {
    id: 5,
    image: moveInOutPhoto,
    alt: "Movers wrapping a sofa in plastic",
    label: "Move in Move Out Cleaning",
    bullet: true,
  },
  {
    id: 6,
    image: wardrobeClosetPhoto,
    alt: "Organized wardrobe shelves with folded garments and a handbag",
    label: "Wardrobe & Closet Organization",
    bullet: true,
  },
  {
    id: 7,
    image: kitchenPantryPhoto,
    alt: "Cluttered kitchen shelves with dishes and cookware",
    label: "Kitchen & Pantry Organization",
    bullet: false,
  },
  {
    id: 8,
    image: postEventPhoto,
    alt: "Person in PPE cleaning a table after an event",
    label: "Post-Event Cleaning",
    bullet: true,
  },
  {
    id: 9,
    image: customizedPhoto,
    alt: "Person cleaning a lamp with gloves on",
    label: "Customized Cleaning & Organization",
    bullet: true,
  },
];

export default serviceCards;
