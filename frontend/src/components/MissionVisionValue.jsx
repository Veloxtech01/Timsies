import { useState } from "react";
import { motion } from "motion/react";
import { missionVisionValueCards } from "../data/missionVisionValue";

/**
 * MissionVisionValue: three equal dark cards (Vision, Mission, Value) that
 * flip in place — used both as the (headingless) closing block on the About
 * page and, with `heading`/`subheading` passed in, as its own standalone
 * home page section. The front of each card shows the icon + heading; the
 * back shows a small icon + the description paragraph.
 *
 * Flip trigger is hover on devices that truly support it (guarded by the
 * `(hover: hover)` media feature so a tap on a touchscreen can't leave a
 * card "stuck" flipped) plus click/tap + Enter/Space for touch and keyboard
 * users, tracked in `flippedId` state.
 *
 * Props:
 * - heading:    optional section heading. When present, renders a centered
 *               heading block above the cards and the section is labelled
 *               by it; when absent (About page usage), the section falls
 *               back to a plain aria-label so behavior there is unchanged.
 * - subheading: optional one-line supporting copy under `heading`.
 *
 * Returns the <section> markup.
 */
function MissionVisionValue({ heading, subheading }) {
  // Which card is flipped via click/tap/keyboard — null means none. Hover
  // flipping is handled separately, in pure CSS, so it doesn't fight this.
  const [flippedId, setFlippedId] = useState(null);

  // toggleFlip: flips `id` open, or closes it again if it's already open.
  const toggleFlip = (id) => {
    setFlippedId((current) => (current === id ? null : id));
  };

  const headingId = "mission-vision-value-heading";

  return (
    <section
      aria-label={heading ? undefined : "Our vision, mission and values"}
      aria-labelledby={heading ? headingId : undefined}
      className={`bg-white px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16 ${heading ? "pt-12 lg:pt-16" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading block — only rendered when a heading is passed in (home
            page standalone-section usage); fades/slides up on scroll like
            the other home sections. */}
        {heading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-10 text-center"
          >
            <h2
              id={headingId}
              className="font-heading text-2xl font-bold text-primary-900 sm:text-3xl"
            >
              {heading}
            </h2>
            {subheading && (
              <p className="mt-2 text-base text-slate-600">{subheading}</p>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {missionVisionValueCards.map(({ id, heading: cardHeading, body, icon, bgClass }) => {
          const isFlipped = flippedId === id;
          return (
            // Card wrapper — fixed min-height so the front/back faces
            // (absolutely positioned inside the flipper below) have
            // somewhere to stretch to regardless of body-copy length.
            // `[perspective:1000px]` gives the rotateY below its 3D depth.
            <div
              key={id}
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              onClick={() => toggleFlip(id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleFlip(id);
                }
              }}
              className="group min-h-72 cursor-pointer rounded-lg [perspective:1000px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:min-h-80 lg:min-h-64"
            >
              {/* Flipper — rotates on click/tap/keyboard (`isFlipped`) or,
                  only on real hover-capable pointers, on hover.
                  `motion-reduce:transition-none` drops the animated turn for
                  prefers-reduced-motion users; the flip still happens, just
                  instantly instead of animating. */}
              <div
                className={`relative h-full w-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] motion-reduce:transition-none [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front face — icon + heading */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center rounded-lg ${bgClass} px-6 py-10 text-center [backface-visibility:hidden]`}
                >
                  <img src={icon} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">{cardHeading}</h3>
                </div>

                {/* Back face — small icon + description. Pre-rotated 180° so
                    it lands right-side-up once the flipper turns. */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center rounded-lg ${bgClass} px-6 py-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]`}
                >
                  <img src={icon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{body}</p>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

export default MissionVisionValue;
