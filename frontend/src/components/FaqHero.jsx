import heroPhoto from "../assets/images/faq_bg.png";

/**
 * FaqHero: page-title banner shown at the top of the FAQ page — full-bleed
 * desk-cleaning photo with a dark blue overlay and a centered "FAQ" heading,
 * same recipe as AboutHero (tinted photo, no badge).
 *
 * Takes no props. Returns the <section> markup.
 */
function FaqHero() {
  return (
    <section
      aria-label="Frequently Asked Questions"
      className="relative flex h-80 w-full items-center justify-center overflow-hidden sm:h-[26rem] lg:h-[30rem]"
    >
      {/* Full-bleed background photo */}
      <img
        src={heroPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Solid dark-blue tint, same token AboutHero/ContactHero use */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B3E58]/75" />

      {/* Page title — Aclonica face matches the no-crossbar "A" used on the
          other hero banners */}
      <h1 className="relative z-10 font-hero-title text-5xl font-bold text-white drop-shadow-[0_2px_12px_rgba(6,52,74,0.45)] sm:text-6xl lg:text-7xl">
        FAQ
      </h1>
    </section>
  );
}

export default FaqHero;
