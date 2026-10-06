import { testimonials } from "../../data/content";
import { SectionHead } from "../ui/SectionHead";

export default function Testimonials() {
  return (
    <section className="py-11">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHead kicker="FROM PARENTS" title="What families tell us" />
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-rule">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.source}
              className={`pt-6.5 px-6 lg:px-6 ${index === 0 ? "" : "border-t lg:border-t-0 lg:border-l"} border-rule`}
            >
              <blockquote className="font-serif italic text-base text-ink mb-3.5">"{testimonial.quote}"</blockquote>
              <cite className="not-italic text-sm text-ink-soft font-semibold">— {testimonial.source}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
