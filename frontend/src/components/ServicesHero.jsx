/**
 * ServicesHero: page-title banner shown at the top of the Services page —
 * solid teal-blue background (no photo, unlike AboutHero), left-aligned
 * brand line, large two-line page heading, and a one-line subtitle.
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
        <p className="font-heading text-lg font-medium text-white sm:text-xl">
          Timsies Entirety
        </p>

        {/* Page heading — chunky uppercase display face approximated with
            Outfit at a heavy weight (see docs/services-target-spec.md).
            max-w constrains the line so it wraps to two lines like the
            source, without a <br> (which drops the space from the
            accessible name computed by assistive tech). */}
        <h1 className="mt-1 max-w-4xl font-heading text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
          Professional Organizing Services
        </h1>

        <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base">
          Residential, commercial and specialist cleaning solutions across
          Lagos.
        </p>
      </div>
    </section>
  );
}

export default ServicesHero;
