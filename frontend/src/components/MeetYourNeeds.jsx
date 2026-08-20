import { Link } from "react-router-dom";
import bgPhoto from "../assets/images/meet_bg.png";
import shelfPhoto from "../assets/images/meet_img.png";

/**
 * MeetYourNeeds: home page section introducing Timsies Entirety's combined
 * organizing + cleaning offering, over a full-bleed tinted background photo.
 *
 * One-off section — heading, body copy and CTA are hardcoded here rather
 * than pulled from a data file, since (unlike WhyChooseUs) nothing repeats.
 * `meet_bg.png` already has its blue tint baked in and `meet_img.png`
 * already has its white polaroid-style border baked in, so both are used
 * as-is with no extra CSS recreating those effects.
 *
 * Takes no props. Returns the <section> markup.
 */
function MeetYourNeeds() {
  return (
    <section aria-labelledby="meet-your-needs-heading" className="relative overflow-hidden">
      {/* Full-bleed background photo — tint is already part of the asset */}
      <img
        src={bgPhoto}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left — organizing photo, border already baked into the asset */} 
        <img
          src={shelfPhoto}
          alt="Shelving unit neatly organized with folded linens, baskets and storage boxes"
          className="w-full max-w-sm shrink-0 lg:w-2/5"
        />

        {/* Right — heading, supporting copy, CTA */}
        <div className="w-full max-w-xl">
          <h2
            id="meet-your-needs-heading"
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
          >
            Let&apos;s Meet Your Organizing Needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            Timsies Entirety offers professional organizing and cleaning
            services which offers a dual solution for individuals and
            businesses seeking to transform chaotic spaces into functional,
            tidy, and aesthetically pleasing environments. These services go
            beyond typical tidying, addressing both the underlying causes of
            disorganization and the need for thorough cleanliness.
          </p>

          {/* Placeholder route — no About/Services page exists yet, mirrors
              the not-yet-built buttonUrl routes in data/heroSlides.js */}
          <Link
            to="/about"
            className="mt-8 inline-block cursor-pointer rounded-full bg-white px-8 py-3 font-medium text-primary-900 transition-colors duration-200 hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MeetYourNeeds;
