import { useNavigate } from "react-router-dom";
import { CtaPill } from "../ui/Buttons";
import Reveal from "../ui/Reveal";

export default function AdmissionsBand() {
  const navigate = useNavigate();

  return (
    <section className="py-11">
      <div className="max-w-[1120px] mx-auto px-6">
        <Reveal direction="right" className="bg-green-dark text-cream rounded-sm px-8 py-9 flex items-center justify-between gap-5 flex-wrap">
          <div>
            <h3 className="text-white mb-1">Admissions open for the 2026/2027 session</h3>
            <p className="text-[#CBD8CD] m-0">Entrance exam: 18 October 2026 · Application deadline: 4 October 2026</p>
          </div>
          <CtaPill variant="brass" onClick={() => navigate("/admissions")}>
            Start Application
          </CtaPill>
        </Reveal>
      </div>
    </section>
  );
}
