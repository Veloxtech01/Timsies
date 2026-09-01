import { motion } from "motion/react";

/**
 * ServicesHero: page-title banner shown at the top of the Services page —
 * solid teal-blue background (no photo, unlike AboutHero), left-aligned
 * brand line, large two-line page heading, and a one-line subtitle.
 *
 * All three lines fade/slide up on mount (not scroll-triggered — the banner
 * is already in view on page load, same precedent as AboutHero's <h1>), each
 * staggered slightly so the heading leads and the subtitle trails behind it
 * rather than everything appearing at once.
 *
 * Takes no props. Returns the <section> markup.
 */
function ServicesHero() {
  return (
    <section
      aria-label="Our Services"
      className="w-full bg-primary-600 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Small brand line above the page heading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-lg font-medium text-white sm:text-xl"
        >
          Timsies Entirety
        </motion.p>

        {/* Page heading — chunky uppercase display face approximated with
            Outfit at a heavy weight (see docs/services-target-spec.md).
            max-w constrains the line so it wraps to two lines like the
            source, without a <br> (which drops the space from the
            accessible name computed by assistive tech). Slower, more
            pronounced entrance than the brand line/subtitle since it's the
            focal element. */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          className="mt-1 max-w-4xl font-heading text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Professional Organizing Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-3 max-w-xl text-sm text-white/90 sm:text-base"
        >
          Residential, commercial and specialist cleaning solutions across
          Nigeria.
        </motion.p>
      </div>
    </section>
  );
}

export default ServicesHero;
