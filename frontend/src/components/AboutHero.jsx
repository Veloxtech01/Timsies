import heroPhoto from "../assets/images/meet_img.png";

/**
 * AboutHero: page-title banner shown at the top of the About page —
 * full-bleed shelving photo (same asset MeetYourNeeds uses, un-tinted there)
 * with a dark blue overlay and a centered "About Us" heading.
 *
 * Takes no props. Returns the <section> markup.
 */
function AboutHero() {
  return (
    <section
      aria-label="About Us"
      className="relative flex h-80 w-full items-center justify-center overflow-hidden sm:h-[26rem] lg:h-[30rem]"
    >
      {/* Full-bleed background photo */}
      <img
        src={heroPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Solid dark-blue tint — this asset has no tint baked in (unlike
          meet_bg.png), so it's recreated here as a plain overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#0B3E58]/75"
      />

      {/* Page title — Aclonica face matches the rounded, no-crossbar "A"
          visible in the source screenshot */}
      <h1 className="relative z-10 font-hero-title text-5xl font-bold text-white drop-shadow-[0_2px_12px_rgba(6,52,74,0.45)] sm:text-6xl lg:text-7xl">
        About Us
      </h1>
    </section>
  );
}

export default AboutHero;
