import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiChevronDown } from "react-icons/fi";
import { faqs } from "../data/faq";

/**
 * FaqItem: one accordion row — a button trigger (question) that toggles a
 * height-animated panel (answer). Takes the `item` data, whether it's
 * currently `open`, the `onToggle` handler, and `prefersReducedMotion` to
 * collapse the animation duration. Returns the <li> markup.
 */
function FaqItem({ item, open, onToggle, prefersReducedMotion }) {
  const panelId = `faq-panel-${item.id}`;
  const triggerId = `faq-trigger-${item.id}`;

  return (
    <li className="border-b border-slate-200">
      {/* Trigger — full-width row so the tap target stays well over 44px tall */}
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
        >
          <span className="font-heading text-base font-semibold text-primary-900 sm:text-lg">
            {item.question}
          </span>
          {/* Chevron rotates via transform only, respects reduced-motion */}
          <FiChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-primary-600 transition-transform ${
              prefersReducedMotion ? "" : "duration-200"
            } ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>

      {/* Panel — height/opacity animation, same recipe as Header's mobile drawer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.24,
              ease: "easeOut",
            }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-9 text-sm leading-relaxed text-slate-600 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/**
 * FaqList: FAQ page section rendering the 15 questions as a single-open
 * accordion (opening one closes any previously open item).
 *
 * Takes no props. Returns the <section> markup.
 */
function FaqList() {
  // Track only the currently open item's id — null means all collapsed.
  const [openId, setOpenId] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="px-4 py-16 sm:px-6 lg:px-8"
    >
      <ul className="mx-auto max-w-3xl">
        {faqs.map((item) => (
          <FaqItem
            key={item.id}
            item={item}
            open={openId === item.id}
            onToggle={() =>
              setOpenId((current) => (current === item.id ? null : item.id))
            }
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </ul>
    </section>
  );
}

export default FaqList;
