import { PageHero, Divider } from "../components/ui/SectionHead";
import { juniorSubjects } from "../data/content";
import SubjectTabs from "../components/academics/SubjectTabs";
import Reveal from "../components/ui/Reveal";

export default function AcademicsPage() {
  return (
    <main>
      <PageHero crumb="ACADEMICS" title="A common core, then a chosen track">
        <p className="m-0">JSS1–JSS3 share one curriculum. From SSS1, students specialise into Science, Arts, or Commercial.</p>
      </PageHero>

      <section className="py-16">
        <Reveal direction="up" className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-3">Junior Secondary (JSS1–JSS3)</h3>
          <p className="max-w-[70ch] mb-4.5">
            All students take the same nine core subjects through JSS3, when the Basic Education Certificate
            Examination (BECE) determines track eligibility for SSS. Class sizes are capped at 28.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {juniorSubjects.map((subject) => (
              <span key={subject} className="block bg-sage border border-sage-line rounded-sm px-3 py-2.5 text-sm text-ink">
                {subject}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <Divider />

      <section className="py-11">
        <Reveal direction="up" className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-3">Senior Secondary (SSS1–SSS3)</h3>
          <p className="max-w-[70ch] mb-4.5">
            Track placement is based on BECE performance and a subject-preference interview in JSS3 third term.
            Every track carries English and Mathematics through to SSS3.
          </p>
          <SubjectTabs />
        </Reveal>
      </section>

      <Divider />

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal direction="left">
            <h3 className="text-xl mb-3">Exam preparation</h3>
            <p>
              SSS3 candidates sit both WAEC and NECO in the same session, with a dedicated revision timetable
              running from January. Interested students can also register for IGCSE in English and Mathematics
              as an additional qualification, and JSS3 leavers preparing for boarding schools abroad receive
              JAMB-independent guidance separately from the WAEC track.
            </p>
          </Reveal>
          <Reveal direction="right">
            <h3 className="text-xl mb-3">ICT & e-learning</h3>
            <p>
              Every classroom has a fixed projector for board-based teaching; the ICT lab's 40 workstations are
              timetabled for the JSS Computer Studies curriculum and left open after hours for SSS3 exam
              revision. Staff share homework and test schedules with parents through a weekly text digest rather
              than a parent app, by design — it works on any phone.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
