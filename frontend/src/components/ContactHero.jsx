import heroPhoto from "../assets/images/contact_bg.png";

/**
 * ContactHero: page-title banner shown at the top of the Contact page —
 * full-bleed office-phone-call photo with a centered "TALK to Us" badge
 * overlaid on top (no full-image tint, unlike AboutHero).
 *
 * Takes no props. Returns the <section> markup.
 */
function ContactHero() {
  return (
    <section
      aria-label="Contact Us"
      className="relative flex h-80 w-full items-center justify-center overflow-hidden sm:h-104 lg:h-120"
    >
      {/* Full-bleed background photo — no overlay tint, badge carries contrast instead */}
      <img
        src={heroPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Semi-transparent dark badge — carries the page heading, Aclonica
          face matches the no-crossbar "A" visible in the source screenshot */}
      <h1 className="relative z-10 rounded-2xl bg-[#0B3E58]/80 px-10 py-5 font-hero-title text-3xl font-bold text-white shadow-lg sm:text-4xl lg:text-5xl">
        TALK to Us
      </h1>
    </section>
  );
}

export default ContactHero;
