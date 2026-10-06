import { newsItems } from "../../data/content";
import { LinkArrow } from "../ui/Buttons";
import Reveal from "../ui/Reveal";

export default function NewsSection() {
  return (
    <section className="py-11">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-baseline justify-between mb-9 flex-wrap gap-3">
          <div>
            <div className="text-xs font-semibold text-brass mb-2">NEWS & EVENTS</div>
            <h2 className="text-2xl md:text-3xl m-0">Recent at GloryLane</h2>
          </div>
          <LinkArrow>All news</LinkArrow>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5">
          {newsItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="border-t-2 border-brass pt-3.5">
              <div className="text-xs text-brass font-bold tracking-wide mb-1.5">{item.date}</div>
              <h4 className="text-base mb-1.5">{item.title}</h4>
              <p className="text-sm">{item.summary}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
