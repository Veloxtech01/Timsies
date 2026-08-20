import { useForm } from "react-hook-form";
import emailIcon from "../assets/images/mark_email_unread.png";

/**
 * Newsletter: closing "Stay Updated" band on the Services page — heading,
 * subtitle, and an inline email-subscribe row over a light-blue background
 * with a plain straight top edge.
 *
 * No backend yet (per CLAUDE.md scaffolding status), so `onSubmit` only
 * validates client-side and logs the payload.
 *
 * Takes no props. Returns the <section> markup.
 */
function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit: no API yet — logs only, replace with an axios call once
  // /backend exists.
  const onSubmit = (data) => {
    console.log("Newsletter subscribe submitted:", data);
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="relative bg-primary-100 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="newsletter-heading"
          className="font-heading text-2xl font-bold text-primary-700 sm:text-3xl"
        >
          Stay Updated with Our Updates
        </h2>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Subscribe to our newsletter for cleaning tips, special offers, and
          updates
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {/* mix-blend-mode:multiply drops the icon's baked-in white square
              background against this section's light-blue fill, so only the
              blue glyph reads — no white halo. */}
          <img
            src={emailIcon}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 shrink-0 mix-blend-multiply"
          />

          <div className="w-full sm:w-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-primary-400 bg-white px-5 py-3 text-sm text-primary-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:w-72"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-primary-600 px-8 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700 sm:w-auto"
          >
            Subscribe
          </button>
        </form>
        {errors.email && (
          <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
