import { useReducedMotion } from "motion/react";
import { services, spacerIcon } from "../data/services";

/**
 * ServiceCell: one icon + label cell, separated from its neighbour by a
 * hairline left border. Takes a service `item` and whether it's part of the
 * duplicated (decorative) half of the scrolling track. Returns the cell markup.
 */
function ServiceCell({ item, decorative }) {
  return (
    <div
      aria-hidden={decorative || undefined}
      // shrink-0 + no fixed width: cell sizes to its own content instead of
      // stretching, since a scrolling track needs a real (not viewport-
      // dependent) width per copy — see ServiceStrip comment below.
      className="flex shrink-0 items-center gap-3 border-l border-white/25 px-3 sm:px-5"
    >
      {/* Icon omitted until real assets are uploaded (see data/services.js) */}
      {item.icon && (
        <img
          src={item.icon}
          alt={item.iconAlt}
          className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
        />
      )}
      <span className="whitespace-nowrap text-xs font-medium leading-snug sm:text-xs">
        {item.label}
      </span>
    </div>
  );
}

/**
 * ServiceStrip: full-bleed icon + label band shown directly under the hero
 * slider, auto-scrolling right-to-left in a continuous, slow, steady loop.
 *
 * Leading cell is a plain decorative spacer (small keys glyph, no label) to
 * match the reference design; it stays fixed on the left and does not scroll,
 * matching the reference screenshot at rest. The service cells to its right
 * render `services` twice back-to-back inside an overflow-hidden viewport and
 * animate via the CSS `animate-service-scroll` keyframe loop (defined in
 * index.css) from translateX(0) to translateX(-50%) — since both halves are
 * identical, the instant the first half scrolls fully offscreen the track
 * looks pixel-identical to its starting position, so the loop reads as
 * seamless with no visible reset/jump (same technique as Testimonials.jsx).
 * The second (duplicate) half is `aria-hidden` so screen readers only
 * encounter each service once. No hover-pause — this strip is decorative
 * only, unlike the testimonial track which pauses so a card can be read.
 *
 * Cells size to their own content (not `flex-1`/equal-share) because a
 * scrolling track needs a real, content-derived width per copy rather than a
 * viewport-stretched one — the one on-screen visual change this animation
 * requires versus the previous static bar.
 *
 * Skipped entirely (static row, no animation) when the OS asks for reduced
 * motion — same accessibility precedent as Testimonials/HeroSlider.
 *
 * Takes no props. Returns the <section> markup.
 */
function ServiceStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Our services"
      // Sits flush against the hero above it — no margin/padding on this edge
      className="flex h-14 w-full items-stretch bg-primary text-white sm:h-16"
    >
      {/* Decorative leading cell — wider than the rest, faint top-left highlight
          echoing the reference shot, keys glyph centred. Not part of the
          scrolling track, so it stays put while the services drift past it. */}
      <div className="relative flex w-28 shrink-0 items-center justify-center overflow-hidden sm:w-40 lg:w-56">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-transparent"
        />
        <img
          src={spacerIcon}
          alt=""
          aria-hidden="true"
          className="relative h-5 w-5 sm:h-6 sm:w-6"
        />
      </div>

      {/* Viewport — clips the doubled service track to the remaining bar width */}
      <div className="flex-1 overflow-hidden">
        <div
          className={
            prefersReducedMotion
              ? "flex h-full w-max"
              : "flex h-full w-max animate-service-scroll"
          }
        >
          {services.map((service) => (
            <ServiceCell key={service.id} item={service} />
          ))}
          {/* Duplicate set, hidden from assistive tech, so the loop has a
              seamless second half to scroll into. */}
          {services.map((service) => (
            <ServiceCell
              key={`${service.id}-dup`}
              item={service}
              decorative
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceStrip;
