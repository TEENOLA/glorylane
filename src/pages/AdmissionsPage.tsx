import { Divider } from "../components/ui/SectionHead";
import { CtaPill, CtaGhostLink } from "../components/ui/Buttons";
import AdmissionSteps from "../components/admissions/AdmissionSteps";
import FaqAccordion from "../components/admissions/FaqAccordion";

const REQUIRED_DOCUMENTS = [
  "Original birth certificate or international passport",
  "Four recent passport photographs",
  "Previous school's report card (last two terms)",
  "Transfer certificate, for applicants above JSS1",
  "Immunisation record",
];

export default function AdmissionsPage() {
  return (
    <main>
      <div className="bg-sage border-b border-sage-line py-12 md:py-14">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-xs font-semibold text-brass mb-2">ADMISSIONS</div>
          <h1 className="text-3xl md:text-4xl mb-2">Admissions open for 2026/2027</h1>
          <p className="max-w-[56ch] m-0">
            Application deadline 4 October 2026 · Entrance exam 18 October 2026 · Resumption 8 September 2026
            for continuing students, January intake also available for JSS & SSS transfers.
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <CtaPill variant="brass">Download Admission Form (PDF)</CtaPill>
            <CtaGhostLink href="https://wa.me/2348001234567">Ask Admissions on WhatsApp</CtaGhostLink>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-4">How admission works</h3>
          <AdmissionSteps />
        </div>
      </section>

      <Divider />

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl mb-3">Entry requirements</h3>
            <p className="mb-3.5">
              <b className="text-ink">JSS1 —</b> age 10–12 by September of the entry year, on completion of
              primary school.
            </p>
            <p>
              <b className="text-ink">Transfers (JSS2–SSS2) —</b> a transfer certificate and most recent two
              terms' report cards from the applicant's current school; subject-by-subject placement confirmed at
              interview.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-3">Required documents</h3>
            <ul>
              {REQUIRED_DOCUMENTS.map((doc) => (
                <li key={doc} className="flex gap-2.5 py-2.5 border-b border-rule text-sm text-ink-soft last:border-b-0">
                  <span className="text-brass shrink-0">—</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-3">Fees</h3>
          <p className="max-w-[64ch] mb-4">
            Tuition varies by class level and is billed per term. Because fees are reviewed annually, we don't
            publish figures on this page — request the current fee schedule and we'll send it same-day by email
            or WhatsApp.
          </p>
          <CtaPill>Request Fee Schedule</CtaPill>
        </div>
      </section>

      <Divider />

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-4">Frequently asked questions</h3>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}
