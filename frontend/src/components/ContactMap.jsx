// Business address — same fragment already used in Footer's "Reach Out" list,
// kept as a local constant since this is the only other place it's needed.
const ADDRESS =
  "58, Lambe Iluyomade Street by Vulcanizer Bus stop, Ago Palace Way, Okota, Isolo/Lagos, Nigeria";

/**
 * ContactMap: full-bleed embedded Google map centered on the business
 * address. Uses the key-less "output=embed" query form, so no API key or
 * new dependency is needed for this basic embed.
 *
 * Takes no props. Returns the <section> markup.
 */
function ContactMap() {
  return (
    <section aria-label="Our location" className="h-87.5 w-full sm:h-95 lg:h-100">
      <iframe
        title="Timsies Entirety location"
        src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default ContactMap;
