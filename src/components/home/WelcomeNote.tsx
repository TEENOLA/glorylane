import proprietressImg from "../../assets/images/staff-proprietress.jpg";

export default function WelcomeNote() {
  return (
    <section className="py-16">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-[120px_1fr] sm:grid-cols-[120px_1fr] max-sm:grid-cols-1 gap-7 items-start">
        <img
          src={proprietressImg}
          alt="Mrs. Folake Adeyemi, Proprietress & Head of School"
          className="w-[120px] h-[120px] rounded-full object-cover border-2 border-sage-line"
        />
        <div>
          <blockquote className="font-serif italic text-xl text-green-dark mb-3 leading-snug">
            "We do not aim to produce the loudest results, only the most honest ones — a child who leaves
            GloryLane knowing how to work, how to lose gracefully, and how to think for themselves."
          </blockquote>
          <div className="font-bold text-sm text-ink">Mrs. Folake Adeyemi</div>
          <div className="text-sm text-ink-soft">Proprietress & Head of School</div>
        </div>
      </div>
    </section>
  );
}
