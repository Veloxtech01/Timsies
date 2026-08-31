import { motion } from "motion/react";

// Business address — same fragment already used in Footer's "Reach Out" list,
// kept as a local constant since this is the only other place it's needed.
const ADDRESS =
  "58, Lambe Iluyomade Street by Vulcanizer Bus stop, Ago Palace Way, Okota, Isolo/Lagos, Nigeria";

/**
 * ContactMap: full-bleed embedded Google map centered on the business
 * address. Uses the key-less "output=embed" query form, so no API key or
 * new dependency is needed for this basic embed.
 *
 * The embed slowly fades/scales in as it scrolls into view — an iframe's own
 * contents can't be animated, so the reveal is applied to the wrapper.
 *
 * Takes no props. Returns the <section> markup.
 */
function ContactMap() {
  return (
    <section aria-label="Our location" className="h-87.5 w-full sm:h-95 lg:h-100">
      <motion.iframe
        title="Timsies Entirety location"
        src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default ContactMap;
