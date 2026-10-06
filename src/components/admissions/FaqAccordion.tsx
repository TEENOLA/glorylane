import { useRef, useState } from "react";
import { faqItems } from "../../data/content";

export default function FaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <div className="max-w-2xl">
      {faqItems.map((item) => {
        const isOpen = openQuestion === item.question;
        return (
          <div key={item.question} className="border-b border-rule">
            <button
              onClick={() => setOpenQuestion(isOpen ? null : item.question)}
              className="w-full text-left bg-none border-none py-4.5 cursor-pointer flex justify-between items-center font-serif text-base font-semibold text-green-dark"
              aria-expanded={isOpen}
            >
              {item.question}
              <span className={`font-sans font-normal text-xl text-brass transition-transform ${isOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <div
              ref={(el) => {
                panelRefs.current[item.question] = el;
              }}
              className="faq-panel"
              style={{ maxHeight: isOpen ? panelRefs.current[item.question]?.scrollHeight : 0 }}
            >
              <p className="text-sm pb-4.5">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
