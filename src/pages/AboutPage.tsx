import { PageHero, Divider } from "../components/ui/SectionHead";
import { leaders } from "../data/content";

const ACCREDITATIONS = [
  "Approved by the Lagos State Ministry of Education (Approval No. LSMOE/PRIV/0421)",
  "Registered examination centre for WAEC (WASSCE)",
  "Registered examination centre for NECO (SSCE)",
  "Registered JAMB CBT-accredited centre for SSS3 candidates",
  "Member, Association of Private Educators of Nigeria (Lagos chapter)",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero crumb="ABOUT US" title="Twenty-seven years on Admiralty Way">
        <p className="m-0">How GloryLane started, what it stands for, and who runs it today.</p>
      </PageHero>

      <section className="py-16">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl mb-3">Our history</h3>
            <p>
              GloryLane School opened in September 1998 in a converted residential building in Lekki Phase 1,
              with 34 pupils and four teachers. As the surrounding neighbourhood grew, so did the school — the
              current Admiralty Way campus was completed in 2011, and a second science block and the ICT
              laboratory were added in 2019.
            </p>
            <p>
              The school has been run by the same founding family for its entire history. Mrs. Folake Adeyemi,
              daughter of founder Chief (Mrs.) Comfort Adeyemi, has served as Proprietress since 2014.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-3">Mission & vision</h3>
            <p>
              <b className="text-ink">Mission —</b> to give every student a rigorous academic foundation and the
              personal discipline to make use of it, in a school small enough that no child goes unnoticed.
            </p>
            <p>
              <b className="text-ink">Vision —</b> to be the school Lekki families recommend to each other
              first, on the strength of results parents can verify and a campus they'd choose for their own
              children.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-4">Accreditation & affiliations</h3>
          <ul className="max-w-xl">
            {ACCREDITATIONS.map((item) => (
              <li key={item} className="flex gap-2.5 py-2.5 border-b border-rule text-sm text-ink-soft last:border-b-0">
                <span className="text-brass shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-4">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {leaders.map((leader) => (
              <div key={leader.name} className="flex gap-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0 border border-sage-line"
                />
                <div>
                  <h4 className="text-base mb-1">{leader.name}</h4>
                  <p className="text-sm m-0">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
