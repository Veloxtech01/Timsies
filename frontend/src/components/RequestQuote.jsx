import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { services } from "../data/services";

// Shared styling for every field's control (input/select/textarea) — light
// tint on the dark section background, no border, so the form reads as one
// consistent surface per the source design.
const FIELD_CLASS =
  "w-full rounded-lg bg-primary-50 px-4 py-3 font-sans text-sm text-primary-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white";

/**
 * RequestQuote: home page section with a "Request a Quote" form — name,
 * email, phone, service type, and a message, submitted with react-hook-form.
 *
 * No backend exists yet (per CLAUDE.md scaffolding status), so `onSubmit`
 * only validates client-side and logs the payload; wiring to a real API
 * endpoint is a future-phase task.
 *
 * Takes no props. Returns the <section> markup.
 */
function RequestQuote() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit: react-hook-form calls this only once all `register` rules
  // pass. No API yet, so this just logs — replace with an axios call once
  // /backend exists.
  const onSubmit = (data) => {
    console.log("Quote request submitted:", data);
  };

  return (
    <section
      aria-labelledby="request-quote-heading"
      className="bg-[#0B3E58] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Icon + heading + intro copy fade/slide up together on scroll into
            view; `once: false` matches the other home sections so it
            replays on re-entry rather than firing only the first time. */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Envelope glyph — decorative, heading already conveys the section's purpose */}
          <BsEnvelopePaperFill
            aria-hidden="true"
            className="mx-auto h-16 w-16 text-white"
          />

          <h2
            id="request-quote-heading"
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl"
          >
            Request a Quote
          </h2>
          <p className="mt-3 text-base text-[#B9D3E0]">
            Tell us about your project and we&apos;ll get back to you with a
            custom estimate.
          </p>
        </motion.div>

        {/* Form — two-column rows on sm+, stacked on mobile. Fades/slides up
            slightly after the heading block (0.2s delay) for a staggered
            entrance. */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 text-left"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-sm font-semibold text-white"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Jane Doe"
                className={FIELD_CLASS}
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-white"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@email.com"
                className={FIELD_CLASS}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-semibold text-white"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className={FIELD_CLASS}
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Service Type — native select, chevron re-drawn on top since
                the native arrow can't be recolored directly */}
            <div>
              <label
                htmlFor="serviceType"
                className="mb-1.5 block text-sm font-semibold text-white"
              >
                Service Type
              </label>
              <div className="relative">
                <select
                  id="serviceType"
                  defaultValue=""
                  className={`${FIELD_CLASS} appearance-none pr-10 ${
                    // Placeholder option renders in a muted color like the
                    // other fields' placeholders until a real value is picked
                    "text-slate-500 valid:text-primary-900"
                  }`}
                  {...register("serviceType", {
                    required: "Please select a service",
                  })}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.label}>
                      {service.label}
                    </option>
                  ))}
                </select>
                <FaChevronDown
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500"
                />
              </div>
              {errors.serviceType && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.serviceType.message}
                </p>
              )}
            </div>

            {/* Message — spans both columns */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us what you need help with..."
                className={`${FIELD_CLASS} resize-none`}
                {...register("message", { required: "Please add a message" })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit — spans both columns. Slight scale up/down on
                hover/tap gives the primary CTA tactile feedback. */}
            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="w-full rounded-lg bg-primary-50 py-3 font-sans text-base font-bold text-primary-700 transition-colors hover:bg-white"
              >
                Get a Free Quote
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default RequestQuote;
