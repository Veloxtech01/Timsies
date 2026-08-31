import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import windowPhoto from "../assets/images/afro-woman-cleaning-window-with-rag-home 1.png";

// Shared styling for every field's control — near-white fill inside the
// muted-blue form card, placeholder text carries the label (no separate
// <label>), same convention as Footer's compact contact form.
const FIELD_CLASS =
  "w-full rounded-lg bg-[#E7EEF2] px-4 py-2.5 font-sans text-sm text-primary-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white";

/**
 * ContactQuote: bottom section of the Contact page — cleaning photo with a
 * data-safety disclaimer on the left, a compact "Get a Quote" form in a
 * muted-blue card on the right, over a dark navy section background with
 * two faint decorative circles.
 *
 * No backend yet (per CLAUDE.md scaffolding status), so `onSubmit` only
 * validates client-side and logs the payload.
 *
 * Takes no props. Returns the <section> markup.
 */
function ContactQuote() {
  const { register, handleSubmit } = useForm();

  // onSubmit: no API yet — logs only, replace with an axios call once
  // /backend exists.
  const onSubmit = (data) => {
    console.log("Contact quote request submitted:", data);
  };

  return (
    <section
      aria-label="Request a quote"
      className="relative overflow-hidden bg-[#0B3E58] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Decorative circles — faint, purely visual, approximated from the
          source screenshot's blob shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-white/5"
      />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — photo plus data-safety disclaimer. Slides in from the left
            on scroll, mirrored by the form card sliding in from the right,
            so the two halves converge toward the center. */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={windowPhoto}
            alt="Cleaner in gloves wiping down a window"
            className="w-full rounded-2xl rounded-tl-[3rem] object-cover"
          />
          <p className="mt-4 max-w-sm text-xs text-white/80">
            We acknowledged the safety of your data will be used for just the
            purpose of processing your request.
          </p>
        </motion.div>

        {/* Right — compact quote form card. Slides in from the right,
            slightly after the photo, for a staggered convergence. */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="rounded-2xl bg-[#6E9BB8] p-6 sm:p-8"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            aria-label="Get a quote"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Name:"
              aria-label="Name"
              className={FIELD_CLASS}
              {...register("name")}
            />
            <input
              type="email"
              placeholder="E-mail:"
              aria-label="E-mail"
              className={FIELD_CLASS}
              {...register("email")}
            />
            <input
              type="tel"
              placeholder="Phone:"
              aria-label="Phone"
              className={FIELD_CLASS}
              {...register("phone")}
            />
            <textarea
              rows={4}
              placeholder="Service Required:"
              aria-label="Service Required"
              className={`${FIELD_CLASS} resize-none`}
              {...register("serviceRequired")}
            />
            {/* Slight scale up/down on hover/tap for tactile CTA feedback,
                same pattern as RequestQuote's submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="mt-1 w-full cursor-pointer rounded-lg bg-[#EFF9FD] py-2.5 font-sans text-sm font-semibold text-primary-900 transition-colors hover:bg-white"
            >
              Get a Quote
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactQuote;
