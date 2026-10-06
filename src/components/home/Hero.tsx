import { useNavigate } from "react-router-dom";
import { CtaPill, CtaGhost } from "../ui/Buttons";
import heroImage from "../../assets/images/hero-students-walking.jpg";
import Reveal from "../ui/Reveal";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden text-cream py-24 md:py-32 min-h-[440px] flex items-center">
      <img
        src={heroImage}
        alt="GloryLane students walking through the Admiralty Way campus"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-dark/95 via-green-dark/75 to-green-dark/20" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        <Reveal direction="left" distance={72} className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-5 text-xs text-brass-light border border-brass-light/40 rounded-full px-3.5 py-1.5">
            Est. 1998 · Lekki, Lagos
          </div>
          <div className="text-xs font-semibold text-brass-light mb-2">GLORYLANE SCHOOL</div>
          <h1 className="text-white text-4xl md:text-[2.6rem] leading-tight mb-4">
            Rooted in Character.
            <br />
            Reaching for Excellence.
          </h1>
          <p className="text-[#DCE7DE] text-lg max-w-[52ch]">
            A JSS1–SSS3 day school on Admiralty Way, Lekki, built around small class sizes, a demanding academic
            core, and a house system that gives every child somewhere to belong.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-6">
            <CtaPill variant="brass" onClick={() => navigate("/admissions")}>
              Apply Now
            </CtaPill>
            <CtaGhost onDark onClick={() => navigate("/contact")}>
              Schedule a Visit
            </CtaGhost>
            <CtaGhost onDark onClick={() => navigate("/admissions")}>
              Download Prospectus
            </CtaGhost>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
