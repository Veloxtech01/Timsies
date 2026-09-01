import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiSmartphone, FiMail, FiClock, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";
import { LOGO_URL, LOGO_ALT } from "../data/assets";
import footerBg from "../assets/images/footer_bg.png";

// Same routes as Header's nav — kept as a local copy (small, 5 items)
// rather than a shared file, mirroring how Header owns its own NAV_LINKS.
const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Our Services", to: "/services" },
  { name: "Contact Us", to: "/contact" },
  { name: "FAQ", to: "/faq" },
];

// "REACH OUT" rows — icon + text pairs, in the exact order/pairing shown in
// the source screenshot (the icon shapes don't semantically match their
// adjacent text there; reproduced as-is rather than "corrected").
const REACH_OUT_ROWS = [
  { Icon: FiSmartphone, text: "Mon-Fri. 9am - 5pm" },
  { Icon: FiMail, text: "+234 803 616 6653, +234 8111201307" },
  { Icon: FiClock, text: "info@timsiesentiretyorganizing.com" },
  {
    Icon: FiMapPin,
    text: "58, Lambe Iluyomade Street by Vulcanizer Bus stop, Ago Palace Way,",
  },
];

// Social profiles for the bottom bar — each labeled for screen readers
// since the icons carry no text.
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61584010871672",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/timsiesentirety?igsh=ZTR2bWNhdzVqanF5",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@timsies.entirety?_r=1&_t=ZS-98yKB1MD1pU",
    Icon: FaTiktok,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/timsies-entirety/",
    Icon: FaLinkedinIn,
  },
];

// Shared styling for the mini contact form's fields — dark solid fill with a
// light placeholder, the inverse of RequestQuote's light-on-dark fields
// since this section sits on a light-toned photo background instead.
const FIELD_CLASS =
  "w-full rounded-md bg-[#0A0F14] px-4 py-3 font-sans text-sm text-white placeholder:text-[#9AA5AD] focus:outline-none focus:ring-2 focus:ring-white";

/**
 * Footer: site footer — brand mark, a "WHAT WE DO" nav list, a "REACH OUT"
 * contact-details list, and a compact contact form, over a tinted photo
 * background, followed by a dark bottom bar with social icons and repeated
 * nav links.
 *
 * The contact form has no backend yet (per CLAUDE.md scaffolding status), so
 * `onSubmit` only logs the payload. The source screenshot shows no visible
 * submit button (the crop ends at the message field) — a visually-hidden
 * button is kept so the form stays submittable via keyboard/screen reader
 * without changing the rendered look.
 *
 * Takes no props. Returns the <footer> markup.
 */
function Footer() {
  const { register, handleSubmit } = useForm();

  // onSubmit: no API yet — logs only, replace with an axios call once
  // /backend exists.
  const onSubmit = (data) => {
    console.log("Footer contact form submitted:", data);
  };

  return (
    <footer className="text-white">
      {/* Main content band — tinted photo background */}
      <div
        className="relative bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        {/* Seam fade — RequestQuote's #0B3E58 ramping into this section's
            lighter photo tone, so the two backgrounds read as one continuous
            surface instead of a hard color jump at the boundary. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#0B3E58] to-transparent"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto_1fr] lg:gap-12">
          {/* Brand mark */}
          <div className="flex items-start">
            <Link to="/" aria-label="Timsies Entirety home">
              <img
                src={LOGO_URL}
                alt={LOGO_ALT}
                width={96}
                height={96}
                className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
              />
            </Link>
          </div>

          {/* WHAT WE DO — nav list */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              What We Do
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#CDE6F2] transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REACH OUT — icon + text rows */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Reach Out
            </h3>
            <ul className="mt-4 space-y-3">
              {REACH_OUT_ROWS.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  />
                  <span className="text-sm text-[#CDE6F2]">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact contact form — dark fields, no visible labels/button */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            aria-label="Contact form"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Names:"
              aria-label="Names"
              className={FIELD_CLASS}
              {...register("names")}
            />
            <input
              type="tel"
              placeholder="Tel:"
              aria-label="Tel"
              className={FIELD_CLASS}
              {...register("tel")}
            />
            <input
              type="email"
              placeholder="E-mail:"
              aria-label="E-mail"
              className={FIELD_CLASS}
              {...register("email")}
            />
            <input
              type="text"
              placeholder="Address:"
              aria-label="Address"
              className={FIELD_CLASS}
              {...register("address")}
            />
            <textarea
              rows={4}
              placeholder="Write a Message"
              aria-label="Write a Message"
              className={`${FIELD_CLASS} resize-none`}
              {...register("message")}
            />
            {/* No submit button is visible in the source screenshot — kept
                accessible without changing the rendered look. */}
            <button type="submit" className="sr-only">
              Send message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar — solid dark strip: social icons left, nav links right,
          copyright on its own row underneath */}
      <div className="bg-[#0A0F14] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <ul className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center text-white transition-colors duration-200 hover:text-primary-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-[#CDE6F2] transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright — year computed at render time so it never goes stale */}
        <p className="mx-auto mt-4 max-w-7xl border-t border-white/10 pt-4 text-center text-xs text-[#9AA5AD]">
          &copy; {new Date().getFullYear()} Timsies Entirety
        </p>
      </div>
    </footer>
  );
}

export default Footer;
