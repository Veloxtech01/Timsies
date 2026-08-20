import { Link } from "react-router-dom";
import { aboutServiceCards } from "../data/aboutServiceCards";

// "Our Services" bullet list — specific to this section, kept local rather
// than a data file since nothing else in the app reuses this exact wording.
const SERVICE_LIST = [
  "Residential Cleaning & Organization",
  "Office & Commercial Organization",
  "Decluttering & Space Optimization",
  "Deep Cleaning",
  "Move-In & Move-Out Cleaning",
  "Wardrobe & Closet Organization",
  "Kitchen & Pantry Organization",
  "Post-Event Cleaning",
  "Customized Cleaning & Organization Solutions",
];

/**
 * AboutServices: About page's closing "SERVICES" band — three photo cards
 * (Decluttering / Residential Organizing / Commercial Organizing), a
 * three-column copy block, and a "Get a Quote" CTA.
 *
 * Takes no props. Returns the <section> markup.
 */
function AboutServices() {
  return (
    <section aria-labelledby="about-services-heading" className="bg-[#EAF1F5] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-services-heading"
          className="text-center font-heading text-3xl font-extrabold uppercase tracking-wide text-primary-900 sm:text-4xl"
        >
          Services
        </h2>
        <p className="mt-2 text-center text-base text-slate-600">
          Professional Services for Spaces That Deserve More
        </p>

        {/* Photo cards — one per service category */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {aboutServiceCards.map((card) => (
            <figure key={card.id} className="flex flex-col items-center">
              <img
                src={card.image}
                alt={card.imageAlt}
                className="h-48 w-full rounded-md object-cover"
              />
              <figcaption className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary-900">
                {card.label}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Three-column copy block */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-heading text-base font-bold text-primary-900">Our Services</h3>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-700">
              {SERVICE_LIST.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-bold text-primary-900">
              Why Choose Timsies Entirety?
            </h3>
            <p className="mt-3 text-sm font-semibold text-slate-800">Organization That Works</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              We create practical systems that make it easier to maintain an
              orderly space long after we leave.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-800">Thorough Cleaning</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              Our cleaning solutions focus on creating spaces that are not
              only visually appealing but genuinely clean and comfortable.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-bold text-primary-900">
              Personalized Solutions
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Every space has different needs. We assess your environment and
              develop a solution suited to your lifestyle, business, and
              priorities.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-800">Professional & Reliable</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              We approach every project with attention to detail, respect for
              your property, and commitment to delivering quality results.
              Your space deserves more than a quick cleanup.
            </p>
          </div>
        </div>

        {/* Closing copy + CTA */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-slate-700">
          Whether it&apos;s your home, office, shop, or commercial facility,
          Timsies Entirety helps you create an environment where everything
          has its place and cleanliness becomes easier to maintain.
          <br />
          Let&apos;s transform your space.
        </p>

        <div className="mt-6 flex justify-center">
          {/* No dedicated quote page yet — RequestQuote lives on the
              homepage, same placeholder-route precedent as MeetYourNeeds */}
          <Link
            to="/"
            className="inline-block cursor-pointer rounded-sm bg-primary-600 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
