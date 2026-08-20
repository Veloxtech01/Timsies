import { serviceCards } from "../data/serviceCards";

/**
 * ServicesGrid: 3x3 grid of service photo cards on the Services page — one
 * rounded photo + caption per entry in `serviceCards`.
 *
 * Takes no props. Returns the <section> markup.
 */
function ServicesGrid() {
  return (
    <section aria-label="Service categories" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((card) => (
          <figure key={card.id} className="flex flex-col">
            <img
              src={card.image}
              alt={card.alt}
              className="aspect-4/3 w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-sm font-semibold text-primary-700 sm:text-base">
              {card.bullet ? `• ${card.label}` : card.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ServicesGrid;
