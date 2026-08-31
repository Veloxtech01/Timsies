import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
        {/* Heading block — fades/slides up on scroll into view */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            id="about-services-heading"
            className="text-center font-heading text-3xl font-extrabold uppercase tracking-wide text-primary-900 sm:text-4xl"
          >
            Services
          </h2>
          <p className="mt-2 text-center text-base text-slate-600">
            Professional Services for Spaces That Deserve More
          </p>
        </motion.div>

        {/* Photo cards — one per service category. Each card fades/slides up
            with a small stagger (index * 0.15s) so they enter in sequence
            rather than all at once. */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {aboutServiceCards.map((card, index) => (
            <motion.figure
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="group flex flex-col items-center"
            >
              {/* Whole card links to the Services page — figure/figcaption
                  semantics stay intact, Link just wraps the visible content */}
              <Link
                to="/services"
                className="flex w-full flex-col items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                {/* Clip the zoom so the image scales up without spilling past
                    its rounded corners on hover */}
                <div className="h-48 w-full overflow-hidden rounded-md shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
                <figcaption className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary-900">
                  {card.label}
                </figcaption>
              </Link>
            </motion.figure>
          ))}
        </div>

        {/* Three-column copy block — same staggered fade/slide-up as the
            photo cards above */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
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
        </motion.div>

        {/* Closing copy + CTA — fades/slides up on scroll */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-slate-700"
        >
          Whether it&apos;s your home, office, shop, or commercial facility,
          Timsies Entirety helps you create an environment where everything
          has its place and cleanliness becomes easier to maintain.
          <br />
          Let&apos;s transform your space.
        </motion.p>

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
