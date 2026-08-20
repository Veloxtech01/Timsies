import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { FiArrowLeft, FiPhone } from 'react-icons/fi'

// Secondary routes offered as recovery options — a dead end should always
// hand the visitor somewhere useful rather than just apologising.
const SUGGESTED_LINKS = [
  { name: 'About Us', to: '/about' },
  { name: 'Our Services', to: '/services' },
  { name: 'Contact Us', to: '/contact' },
]

/**
 * NotFound: branded 404 page rendered by the catch-all route.
 * Takes no props. Returns the page markup.
 */
function NotFound() {
  const prefersReducedMotion = useReducedMotion()
  const location = useLocation()

  // Reflect the error in the tab title so the state is obvious in history/tabs.
  useEffect(() => {
    document.title = 'Page not found · Timsies Entirety'
    // Restore on unmount so the next route isn't left with the 404 title.
    return () => {
      document.title = 'Timsies Entirety'
    }
  }, [])

  return (
    // Fills the viewport minus the 80px header so the page never looks stranded
    <main className="grid min-h-[calc(100vh-5rem)] place-items-center bg-gradient-to-b from-primary-50 via-white to-white px-4 py-16 sm:px-6">
      <motion.div
        // Gentle entrance; skipped entirely when the OS asks for reduced motion
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' }}
        className="w-full max-w-xl text-center"
      >
        {/* Display numeral — decorative, so it's hidden from screen readers */}
        <p
          aria-hidden="true"
          className="bg-gradient-to-b from-primary-400 to-primary-700 bg-clip-text font-heading text-8xl font-bold leading-none text-transparent sm:text-9xl"
        >
          404
        </p>

        {/* Eyebrow gives the numeral its accessible meaning */}
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
          Page not found
        </p>

        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-primary-900 sm:text-4xl">
          This corner needs tidying up
        </h1>

        {/* Line length capped for comfortable reading */}
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600">
          We couldn&apos;t find{' '}
          <span className="font-medium text-slate-800">{location.pathname}</span>. The page may have
          been moved, renamed, or cleared away.
        </p>

        {/* Recovery actions: primary route home, secondary route to contact */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(18,129,173,0.25)] transition-colors duration-200 hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:w-auto"
          >
            <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary-200 bg-white px-6 text-sm font-semibold text-primary-700 transition-colors duration-200 hover:bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 sm:w-auto"
          >
            <FiPhone className="h-4 w-4" aria-hidden="true" />
            Contact us
          </Link>
        </div>

        {/* Secondary wayfinding for visitors who want to keep browsing */}
        <nav aria-label="Suggested pages" className="mt-10 border-t border-primary-100 pt-6">
          <p className="text-sm text-slate-500">Or try one of these:</p>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {SUGGESTED_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="cursor-pointer rounded-sm text-sm font-medium text-primary-600 underline-offset-4 transition-colors duration-200 hover:text-primary-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </main>
  )
}

export default NotFound
