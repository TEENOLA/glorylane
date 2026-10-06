import { useNavigate } from "react-router-dom";
import { LinkArrow } from "../ui/Buttons";
import Reveal from "../ui/Reveal";

export default function AcademicsPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-11">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="text-xs font-semibold text-brass mb-2">ACADEMICS</div>
          <h2 className="text-2xl md:text-3xl mb-3">Two tracks, one standard</h2>
          <p className="mb-4">
            JSS1–JSS3 follow a common core across nine subjects. From SSS1, students choose between Science,
            Arts, and Commercial tracks, each prepared for WAEC, NECO, and — for interested students — IGCSE.
          </p>
          <LinkArrow onClick={() => navigate("/academics")}>See the full curriculum</LinkArrow>
        </Reveal>
        <Reveal direction="right" delay={0.1} className="bg-sage border border-sage-line rounded-sm aspect-[4/3] flex items-center justify-center p-8">
          <svg viewBox="0 0 200 150" fill="none" className="w-full h-full">
            <rect x="20" y="20" width="70" height="90" rx="2" stroke="#1B4332" strokeWidth="1.5" />
            <rect x="110" y="40" width="70" height="70" rx="2" stroke="#AD8629" strokeWidth="1.5" />
            <line x1="30" y1="40" x2="80" y2="40" stroke="#1B4332" strokeWidth="1.5" />
            <line x1="30" y1="55" x2="80" y2="55" stroke="#1B4332" strokeWidth="1.5" />
            <line x1="30" y1="70" x2="70" y2="70" stroke="#1B4332" strokeWidth="1.5" />
            <line x1="120" y1="58" x2="170" y2="58" stroke="#AD8629" strokeWidth="1.5" />
            <line x1="120" y1="73" x2="170" y2="73" stroke="#AD8629" strokeWidth="1.5" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
