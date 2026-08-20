import { services, spacerIcon } from "../data/services";

/**
 * ServiceStrip: full-bleed icon + label band shown directly under the hero
 * slider, one cell per service line the company offers.
 *
 * Leading cell is a plain decorative spacer (small keys glyph, no label) to
 * match the reference design; the rest map over `services`. Takes no props.
 * Returns the <section> markup.
 */
function ServiceStrip() {
  return (
    <section
      aria-label="Our services"
      // Sits flush against the hero above it — no margin/padding on this edge
      className="flex h-14 w-full items-stretch bg-primary text-white sm:h-16"
    >
      {/* Decorative leading cell — wider than the rest, faint top-left highlight
          echoing the reference shot, keys glyph centred */}
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

      {/* One cell per service — equal share of the remaining width, separated
          by a hairline divider so the strip reads as a single connected bar */}
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-1 items-center gap-3 border-l border-white/25 px-3 sm:px-5"
        >
          {/* Icon omitted until real assets are uploaded (see data/services.js) */}
          {service.icon && (
            <img
              src={service.icon}
              alt={service.iconAlt}
              className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
            />
          )}
          <span className="text-xs font-medium leading-snug sm:text-xs">
            {service.label}
          </span>
        </div>
      ))}
    </section>
  );
}

export default ServiceStrip;
