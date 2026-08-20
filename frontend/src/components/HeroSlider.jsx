import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { heroSlides } from "../data/heroSlides";
import { CTA_BUTTON_IMAGE } from "../data/assets";

// How long each slide stays on screen before auto-advancing (ms).
const SLIDE_DURATION = 3000;

/**
 * HeroSlider: full-bleed auto-rotating hero for the home page.
 *
 * Renders one slide at a time from `heroSlides` — background photo, dark
 * brand-tinted overlay, uppercase headline, supporting copy and the shared
 * CTA button graphic linking to that slide's service route.
 *
 * Autoplay pauses on focus and is skipped entirely when the OS asks
 * for reduced motion, so nothing moves without the user driving it.
 *
 * Takes no props. Returns the <section> markup.
 */
function HeroSlider() {
  // Index of the slide currently on screen.
  const [index, setIndex] = useState(0);
  // Suspends the autoplay timer while the user is focusing the hero (keyboard nav).
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  // Tracks which way the user moved so the crossfade slides the right way.
  const directionRef = useRef(1); 

  const slideCount = heroSlides.length;
  const slide = heroSlides[index];

  // Wrap-around navigation shared by the arrows, dots and the autoplay timer.
  const goTo = useCallback(
    (next) => {
      directionRef.current = next > index ? 1 : -1;
      // Modulo with + slideCount keeps the index positive when stepping back from 0.
      setIndex((next + slideCount) % slideCount);
    },
    [index, slideCount],
  );

  // Autoplay: one timer per slide, cleared on every index/pause change so
  // manual navigation restarts the countdown instead of double-advancing.
  useEffect(() => {
    if (paused || prefersReducedMotion || slideCount < 2) return;
    const timer = setTimeout(() => {
      directionRef.current = 1;
      setIndex((current) => (current + 1) % slideCount);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, paused, prefersReducedMotion, slideCount]);

  // Left/right arrow keys move between slides once the carousel has focus.
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") goTo(index + 1);
    if (event.key === "ArrowLeft") goTo(index - 1);
  };

  // Reduced motion collapses the crossfade to an instant swap.
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

  return (
    <section
      aria-label="Featured services"
      aria-roledescription="carousel"
      // Fixed viewport-relative height reserves space before the photo loads
      className="relative h-[68vh] min-h-105 w-full overflow-hidden bg-primary-900 sm:h-[76vh] lg:h-[80vh]"
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Slide stack — only the active slide is mounted; AnimatePresence keeps
          the outgoing one around long enough to crossfade. */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.imageAlt}
            // First slide is the LCP image, so it loads eagerly; the rest defer.
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className="h-full w-full object-cover"
          />
          {/* Brand-tinted scrim — keeps white text above 4.5:1 on busy photos */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-primary-900/70 via-primary-900/55 to-primary-900/75"
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption layer — sits above the photo, centred both axes. Captions are
          absolutely stacked so the incoming one appears immediately (no
          "wait" mode delay after a click) and simply crossfades with the old. */}
      <div className="relative z-10 h-full px-4 sm:px-6 lg:px-8">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -16 }}
            transition={transition}
            className="absolute inset-x-4 top-1/2 mx-auto max-w-4xl -translate-y-1/2 text-center sm:inset-x-6 lg:inset-x-8"
          >
            {/* h2, not h1 — the page keeps one stable <h1>; this text changes
                on every slide and shouldn't rewrite the document heading. */}
            {/* Hero titles use the dedicated font-hero-title (Aclonica) face, sized
                a step down from the previous font-heading scale. lg:whitespace-nowrap
                keeps longer titles like "COMMERCIAL ORGANIZING" on one line on desktop,
                where the text-align:center lets any overflow spill evenly either side */}
            <h2 className="font-hero-title text-3xl font-bold uppercase leading-none tracking-wide text-white drop-shadow-[0_2px_12px_rgba(6,52,74,0.45)] sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
              {slide.title}
            </h2>

            {/* Copy capped near 70 characters per line for comfortable reading */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {slide.subtitle}
            </p>

            {/* CTA — shared button artwork, per-slide internal route */}
            <Link
              to={slide.buttonUrl}
              className="mt-8 inline-block cursor-pointer rounded-sm transition-transform duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <img
                src={CTA_BUTTON_IMAGE}
                alt={`Get a quote for ${slide.title.toLowerCase()}`}
                className="h-12 w-auto sm:h-14"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous / next controls — 44px+ targets, hidden from tiny screens
          where the dots and autoplay are enough */}
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex lg:left-6"
      >
        <FiChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex lg:right-6"
      >
        <FiChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Dot indicators — the pill is a child so the tap target stays 44px */}
      <ul className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-1">
        {heroSlides.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${item.title}`}
              aria-current={i === index}
              className="flex h-11 w-11 cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-white" : "w-3 bg-white/50"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Politely announces slide changes for screen readers */}
      <p className="sr-only" aria-live="polite">
        {`Slide ${index + 1} of ${slideCount}: ${slide.title}`}
      </p>
    </section>
  );
}

export default HeroSlider;
