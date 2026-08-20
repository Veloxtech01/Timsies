import { missionVisionValueCards } from "../data/missionVisionValue";

/**
 * MissionVisionValue: About page section — three equal dark cards (Vision,
 * Mission, Value), each with a centered icon, heading and short paragraph.
 *
 * Takes no props. Returns the <section> markup.
 */
function MissionVisionValue() {
  return (
    <section aria-label="Our vision, mission and values" className="bg-white px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {missionVisionValueCards.map(({ id, heading, body, icon, bgClass }) => (
          <div
            key={id}
            className={`flex flex-col items-center rounded-lg ${bgClass} px-6 py-10 text-center`}
          >
            <img src={icon} alt="" aria-hidden="true" className="h-10 w-10 object-contain" />
            <h3 className="mt-4 font-heading text-xl font-bold text-white">{heading}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MissionVisionValue;
