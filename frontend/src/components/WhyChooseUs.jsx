import { FaCheckCircle } from "react-icons/fa";
import { whyChooseUsCards } from "../data/whyChooseUs";
import workerPhoto from "../assets/images/dl 1.png";

/**
 * WhyChooseUs: home page section pairing a vertical stack of
 * value-proposition cards with a cutout photo of a worker holding cleaning
 * supplies.
 *
 * Renders one white rounded card per entry in `whyChooseUsCards`, each with
 * a top-right check-circle glyph and one or more lead-in/body copy lines,
 * stacked in reading order top to bottom. On large screens the whole
 * section is height-capped at 500px (a compact footprint request) — each
 * card is sized `flex-1` so the 4-card stack shares that fixed height
 * evenly, with tighter type/padding than a free-flowing stack would use so
 * the copy still fits. The photo stretches to the section's full height,
 * anchored to the right edge instead of shrinking to fit. Below `lg` the
 * height cap is dropped so cards keep their natural (larger) size.
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

          {/* Card stack — one entry per whyChooseUsCards item, in reading
              order. `lg:flex-1 lg:min-h-0` makes each card share the 500px
              column height evenly instead of sizing to its own content. */}
          <div className="mt-4 flex flex-1 flex-col gap-2 lg:gap-2.5">
            {whyChooseUsCards.map((card) => (
              <div
                key={card.id}
                className="relative flex flex-col justify-center rounded-[17px] bg-white p-3 pr-9 shadow-[0_4px_10px_rgba(2,55,106,0.5)] lg:flex-1 lg:min-h-0"
              >
                {/* Check-circle glyph, anchored top-right of the card */}
                <FaCheckCircle
                  aria-hidden="true"
                  className="absolute right-3 top-3 h-5 w-5 text-[#006A94]"
                />

                {/* Optional card heading — omitted on the "Continuity" card,
                    whose lead-in line below already carries the title */}
                {card.heading && (
                  <h3 className="font-heading text-base font-bold uppercase text-[#006A94] lg:text-lg">
                    {card.heading}
                  </h3>
                )}

                {/* One or more lead-in/body pairs per card */}
                <div className={card.heading ? "mt-1 space-y-1" : "space-y-1"}>
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
          </div>
        </div>

        {/* Right column — worker photo, hidden from screen readers since the
            cards already carry the section's meaning. Stretches to the
            column's full height and hugs the right edge (object-right)
            instead of centering, so it reads at full size, not shrunk. */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <img
            src={workerPhoto}
            alt=""
            aria-hidden="true"
            className="h-auto max-h-80 w-auto object-contain lg:h-full lg:max-h-none lg:object-right"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
