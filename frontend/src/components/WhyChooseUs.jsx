import { FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react";
import { whyChooseUsCards } from "../data/whyChooseUs";
import workerPhoto from "../assets/images/dl 1.png";

/**
 * WhyChooseUs: home page section pairing a single merged value-proposition
 * card with a cutout photo of a worker holding cleaning supplies.
 *
 * Renders every entry in `whyChooseUsCards` inside one white rounded card
 * (previously one card per entry), stacked in reading order top to bottom
 * with a single top-right check-circle glyph. On large screens the whole
 * section is height-capped at 500px (a compact footprint request) and the
 * card fills that height (`flex-1`), vertically centering its content.
 * Below `lg` the height cap is dropped so the card keeps its natural
 * (larger) size. The card slides in from the left and fades in on every
 * scroll into view (`once: false` re-triggers it each pass). The photo
 * stretches to the section's full height, anchored to the right edge
 * instead of shrinking to fit, and slides in from the right, fading in only
 * the first time it scrolls into view.
 *
 * Takes no props. Returns the <section> markup.
 */
function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      // Plain near-white background matches the source design; no container
      // frame around the photo, so it sits directly on this background.
      className="bg-[#FCFDFD] px-4 py-6 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:h-125 lg:flex-row lg:items-stretch lg:gap-10">
        {/* Left column — heading + card grid */}
        <div className="flex w-full flex-col lg:w-1/2">
          <h2
            id="why-choose-us-heading"
            className="text-2xl font-bold text-[#006A94] sm:text-3xl"
          >
            Why Choose Us?
          </h2>

          {/* Merged card — every whyChooseUsCards entry rendered inside one
              card, in reading order. Slides in from the left and fades in on
              every scroll into view; `once: false` re-triggers it each pass
              (unlike the photo's one-time entrance). `flex-1 min-h-0` makes
              the card fill the 500px column height on large screens; the
              larger `lg:gap-6` between entries (and `lg:space-y-2`/`lg:mt-2`
              within each) spreads the content out to fill more of that
              height instead of leaving one big centered gap. */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative mt-4 flex flex-1 flex-col justify-center gap-3 rounded-[17px] bg-white p-4 pr-9 shadow-[0_4px_10px_rgba(2,55,106,0.5)] transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(2,55,106,0.65)] lg:min-h-0 lg:gap-6"
          >
            {/* Check-circle glyph, anchored top-right of the merged card */}
            <FaCheckCircle
              aria-hidden="true"
              className="absolute right-3 top-3 h-5 w-5 text-[#006A94]"
            />

            {/* One block per whyChooseUsCards entry, each with its optional
                heading and one or more lead-in/body copy pairs */}
            {whyChooseUsCards.map((card) => (
              <div key={card.id}>
                {/* Optional block heading — omitted on the "Continuity"
                    entry, whose lead-in line below already carries the title */}
                {card.heading && (
                  <h3 className="font-heading text-base font-bold uppercase text-[#006A94] lg:text-lg">
                    {card.heading}
                  </h3>
                )}

                {/* One or more lead-in/body pairs per entry */}
                <div className={card.heading ? "mt-1 space-y-1 lg:mt-2 lg:space-y-2" : "space-y-1 lg:space-y-2"}>
                  {card.items.map((item) => (
                    <p
                      key={item.lead || item.body}
                      className="text-xs leading-snug text-black lg:text-sm"
                    >
                      {item.lead && (
                        <span className="font-heading font-bold text-[#006A94]">
                          {item.lead}{" "}
                        </span>
                      )}
                      {item.body}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — worker photo, hidden from screen readers since the
            cards already carry the section's meaning. Stretches to the
            column's full height and hugs the right edge (object-right)
            instead of centering, so it reads at full size, not shrunk.
            Slides in from the right + fades in once it scrolls into view;
            `once: true` stops it from replaying on every scroll up/down. */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex w-full justify-center lg:w-1/2 lg:justify-end"
        >
          <img
            src={workerPhoto}
            alt=""
            aria-hidden="true"
            className="h-auto max-h-80 w-auto object-contain lg:h-full lg:max-h-none lg:object-right"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
