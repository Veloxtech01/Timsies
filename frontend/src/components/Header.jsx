import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";
import { LOGO_URL, LOGO_ALT } from "../data/assets";

// Primary navigation. Kept as data so the desktop bar and the mobile drawer
// render from one source instead of duplicating the link markup.
const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Our Services", to: "/services" },
  { name: "Contact Us", to: "/contact" },
  { name: "FAQ", to: "/faq" },
];

// Social profiles — each carries a label because the links are icon-only
// (screen readers need it).
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

// Shared NavLink classes — active/hover colour is applied per state below.
const navLinkBase =
  "group relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600 rounded-sm";

/**
 * Header: sticky site header — brand lockup on the left, primary nav in the
 * centre, social icons on the right, collapsing to a hamburger drawer under md.
 * Takes no props. Returns the <header> markup.
 */
function Header() {
  // Drawer open state for the mobile (<md) navigation.
  const [menuOpen, setMenuOpen] = useState(false);
  // Honour the OS "reduce motion" setting by collapsing animation duration to 0.
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();

  // Close the drawer whenever the route changes, otherwise it stays open
  // over the newly navigated page.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    // sticky (not fixed) so following content is never hidden behind the bar
    <header className="sticky top-0 z-50 w-full">
      {/* Thin brand gradient rule — the header's only saturated element */}
      <div className="h-0.5 w-full bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600" />

      {/* Translucent bar: soft depth via a low-spread shadow rather than a hard border */}
      <div className="border-b border-primary-100/80 bg-white/85 shadow-[0_1px_3px_rgba(22,78,99,0.06)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand lockup — logo mark plus wordmark, links home */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
          >
            <img
              src={LOGO_URL}
              alt={LOGO_ALT}
              width={48}
              height={48}
              // Fixed box reserves space so the bar doesn't reflow once the image loads
              className="h-9 w-9 rounded-full object-cover ring-1 ring-primary-100 sm:h-10 sm:w-10"
            />
            <span className="font-heading text-lg font-semibold tracking-tight text-primary-900 sm:text-xl">
              Timsies Entirety
              <span className="hidden font-normal text-slate-500 sm:inline">
                {" "}
                Limited
              </span>
            </span>
          </Link>

          {/* Desktop navigation — hidden below md, where the drawer takes over */}
          <nav
            aria-label="Primary"
            className="hidden md:flex md:items-center md:gap-8 lg:gap-10"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                // `end` keeps "Home" from matching every nested route
                end={link.to === "/"}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? "text-primary-700" : "text-slate-600 hover:text-primary-700"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Underline animates with transform only — no layout shift on hover */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-primary-600 transition-transform duration-200 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {/* Social icons — hidden on the smallest screens, repeated in the drawer */}
            <ul className="hidden items-center gap-0.5 sm:flex">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-primary-900 transition-colors duration-200 hover:bg-primary-50 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Hamburger toggle — md:hidden, mirrors the drawer's open state to AT */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-primary-900 transition-colors duration-200 hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 md:hidden"
            >
              {menuOpen ? (
                <FiX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer — height animation is cheap here because the panel is short */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.24,
                ease: "easeOut",
              }}
              className="overflow-hidden border-t border-primary-100 bg-white md:hidden"
            >
              <nav
                aria-label="Mobile"
                className="mx-auto max-w-7xl px-4 py-3 sm:px-6"
              >
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        end={link.to === "/"}
                        className={({ isActive }) =>
                          // Full-width rows keep every tap target well over 44px tall
                          `block rounded-lg px-3 py-3 text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                            isActive
                              ? "bg-primary-50 text-primary-700"
                              : "text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {/* Socials repeated here for the <sm case where they're hidden above */}
                <ul className="mt-2 flex items-center gap-1 border-t border-primary-100 pt-2 sm:hidden">
                  {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={label}
                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-primary-900 transition-colors duration-200 hover:bg-primary-50 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
