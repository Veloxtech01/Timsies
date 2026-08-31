import { motion } from "motion/react";
import { serviceCards } from "../data/serviceCards";

/**
 * ServicesGrid: 3x3 grid of service photo cards on the Services page — one
 * rounded photo + caption per entry in `serviceCards`.
 *
 * Each photo does a slow zoom-fade reveal (scale 0.85 -> 1, 1.2s) on scroll
 * into view; its caption uses a distinct, quicker fade-up (0.5s) timed to
 * land just after the photo settles, so the two elements read as separate
 * beats rather than one animation. `once: false` matches the rest of the
 * site so both replay on re-entry.
 *
 * Takes no props. Returns the <section> markup.
 */
function ServicesGrid() {
  return (
    <section aria-label="Service categories" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((card, index) => {
          // Small per-card stagger so a row of three doesn't animate in lockstep.
          const baseDelay = index * 0.1;
          return (
            <figure key={card.id} className="flex flex-col">
              <motion.img
                src={card.image}
                alt={card.alt}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: baseDelay }}
                className="aspect-4/3 w-full rounded-xl object-cover"
              />
              <motion.figcaption
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: baseDelay + 0.4 }}
                className="mt-3 text-sm font-semibold text-primary-700 sm:text-base"
              >
                {card.bullet ? `• ${card.label}` : card.label}
              </motion.figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesGrid;
