import { FaCheck } from "react-icons/fa";
import ceoPhoto from "../assets/images/CEO 2.png";

// Academic & professional credentials — short and specific to this section,
// so it's kept local rather than promoted to a data file (same precedent as
// Header's local NAV_LINKS).
const CREDENTIALS = [
  "LL.B. (Hons.) – University of Calabar",
  "Barrister-at-Law (B.L.) – Nigerian Law School. Member: Nigerian Bar Association.",
  "Over 18 years' professional experience in legal practice, corporate administration, governance and business management.",
];

/**
 * CeoProfile: About page section introducing founder Atim Etetim Okpo — bio
 * copy, academic/professional credentials and a photo in a two-column row,
 * followed by a full-width company mission paragraph block.
 *
 * Takes no props. Returns the <section> markup.
 */
function CeoProfile() {
  return (
    <section
      aria-labelledby="ceo-profile-heading"
      className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Two-column row: bio copy left, photo right on lg+ */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-3/5">
            <h2
              id="ceo-profile-heading"
              className="font-heading text-2xl font-bold text-primary-900"
            >
              About the Founder
            </h2>
            <p className="mt-2 text-lg font-semibold text-primary-900">
              Atim Etetim Okpo, LL.B (Hons.), B.L.
            </p>
            <p className="text-sm font-medium text-slate-600">
              Founder | Organisation &amp; Workplace Transformation
              Professional | Legal &amp; Corporate Executive
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-800">
              Atim Etetim Okpo is a Legal Practitioner and Corporate Executive
              with over 15 years of experience in administration, corporate
              management, organisation, governance and business operations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-800">
              Her extensive experience working with organisations has given
              her a strong understanding of how well-organised spaces,
              efficient systems and structured workplaces contribute to
              productivity, professionalism and business growth.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-800">
              Through her passion for creating orderly, functional and
              productive environments, she brings a unique combination of
              professional discipline, organisational expertise and strategic
              thinking to decluttering and workplace reorganisation.
            </p>

            <h3 className="mt-6 font-heading text-lg font-bold text-primary-900">
              Academic &amp; Professional Background
            </h3>
            {/* Credential list — green check-square glyph per item */}
            <ul className="mt-2 space-y-2.5">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-accent-500"
                  >
                    <FaCheck className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-heading text-lg font-bold text-primary-900">
              Our Approach
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-800">
              We don&apos;t simply remove clutter. We help individuals and
              organisations create order, maximise space, improve
              functionality and establish systems that make work and everyday
              living easier.
            </p>

            <p className="mt-4 text-sm font-semibold text-primary-900">
              Our goal is simple: Clear Space. Better Organisation. Greater
              Productivity.
            </p>
          </div>

          {/* Founder photo — teal background is already baked into the
              asset, same as meet_img.png elsewhere, so it's used as-is */}
          <div className="flex w-full items-center justify-center lg:w-2/5">
            <img
              src={ceoPhoto}
              alt="Atim Etetim Okpo, Founder of Timsies Entirety"
              className="w-full max-w-sm rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Full-width company mission copy, below the two-column row */}
        <div className="mt-10 space-y-4 text-sm leading-relaxed text-slate-800">
          <h3 className="font-heading text-lg font-bold text-primary-900">
            Our Mission
          </h3>
          <p>
            To transform homes, workplaces and corporate environments into
            clean, organised, functional and productive spaces through
            professional decluttering, cleaning, space optimisation and
            reorganisation services.
          </p>
          <p>
            We are committed to helping individuals and organisations
            eliminate clutter, maintain hygienic environments, maximise
            available space and establish sustainable systems that promote
            efficiency, productivity and well-being.
          </p>
          <p className="font-semibold text-primary-900">
            Our goal is simple: Clean Space. Clear Organisation. Greater
            Productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CeoProfile;
