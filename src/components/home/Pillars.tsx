import { pillars } from "../../data/content";
import { SectionHead } from "../ui/SectionHead";
import Reveal from "../ui/Reveal";

export default function Pillars() {
  return (
    <section className="py-11">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHead title="Why parents choose GloryLane" />
      </div>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-rule">
          {pillars.map((pillar, index) => {
            const isLeftColumnOnSmall = index % 2 === 0;
            const isFirst = index === 0;
            const borderClasses = isFirst
              ? "sm:border-l-0 lg:border-l-0"
              : isLeftColumnOnSmall
                ? "sm:border-l-0 lg:border-l"
                : "sm:border-l lg:border-l";
            return (
              <div key={pillar.title} className={`p-7 border-b border-rule ${borderClasses}`}>
                <Reveal delay={index * 0.1}>
                  <h4 className="text-base mb-2">{pillar.title}</h4>
                  <p className="text-sm m-0">{pillar.description}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
