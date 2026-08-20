import { useReducedMotion } from "motion/react";
import { testimonials } from "../data/testimonials";
import testimonialIcon from "../assets/images/testimonial_icon.png";

/**
 * TestimonialCard: one white quote card with the brand icon as its first
 * in-flow element. Takes a testimonial `item` and whether it's part of the
 * duplicated (decorative) half of the track. Returns the card markup.
 */
function TestimonialCard({ item, decorative }) {
  return (
    <div
      aria-hidden={decorative || undefined}
      className="flex w-72 shrink-0 flex-col items-center rounded-md border border-slate-300 bg-white px-6 py-8 text-center shadow-sm sm:w-80"
    >
      {/* Icon sits inside the card as the first element, not overlapping the
          border — asset already has its blue circle background baked in,
          used as-is. mb-5 gives it room before the quote. */}
      <img
        src={testimonialIcon}
        alt=""
        aria-hidden="true"
        className="mb-5 h-16 w-16"
      />
      <p className="text-sm leading-relaxed text-slate-800">{item.quote}</p>
      {item.author && (
        <p className="mt-4 text-sm leading-relaxed text-slate-800">
          {item.author}
        </p>
      )}
    </div>
  );
}

/**
 * Testimonials: home page section showing client quote cards under a
 * "Client Testimonials" heading, auto-scrolling left in a continuous, slow,
 * steady loop.
 *
 * The card track renders `testimonials` twice back-to-back and animates via
 * the CSS `animate-testimonial-scroll` keyframe loop (defined in index.css)
 * from translateX(0) to translateX(-50%) — since both halves are identical,
 * the instant the first half scrolls fully offscreen the track looks
 * pixel-identical to its starting position, so the loop reads as seamless
 * with no visible reset/jump. The second (duplicate) half is `aria-hidden`
 * so screen readers only encounter each quote once. A CSS animation (rather
 * than Framer Motion's JS-driven one) is used specifically so hovering can
 * pause it via `animation-play-state` and resume from the exact same frame,
 * with no JS state or resume-speed math needed.
 *
 * Skipped entirely (static row, no animation) when the OS asks for reduced
 * motion — same accessibility precedent as HeroSlider.
 *
 * Takes no props. Returns the <section> markup.
 */
function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-slate-100 px-4 py-16 sm:px-6 lg:px-8"
    >
      <h2
        id="testimonials-heading"
        className="text-center font-heading text-2xl font-bold text-primary sm:text-3xl"
      >
        Client Testimonials
      </h2>

      {/* Viewport — clips the doubled card track to the section width */}
      <div className="mx-auto mt-16 max-w-6xl overflow-hidden">
        <div
          className={
            prefersReducedMotion
              ? "flex w-max gap-6"
              : "flex w-max gap-6 animate-testimonial-scroll hover:[animation-play-state:paused]"
          }
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
          {/* Duplicate set, hidden from assistive tech, so the loop has a
              seamless second half to scroll into. */}
          {testimonials.map((item) => (
            <TestimonialCard key={`${item.id}-dup`} item={item} decorative />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
