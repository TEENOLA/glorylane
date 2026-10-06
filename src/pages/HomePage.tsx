import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import StatsRegister from "../components/home/StatsRegister";
import WelcomeNote from "../components/home/WelcomeNote";
import Pillars from "../components/home/Pillars";
import AcademicsPreview from "../components/home/AcademicsPreview";
import FacilitiesGrid from "../components/home/FacilitiesGrid";
import Testimonials from "../components/home/Testimonials";
import NewsSection from "../components/home/NewsSection";
import AdmissionsBand from "../components/home/AdmissionsBand";
import { Divider } from "../components/ui/SectionHead";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <StatsRegister />
      <WelcomeNote />
      <Divider />
      <Pillars />
      <AcademicsPreview />
      <FacilitiesGrid />
      <Divider />
      <Testimonials />
      <NewsSection />
      <AdmissionsBand />
    </main>
  );
}
