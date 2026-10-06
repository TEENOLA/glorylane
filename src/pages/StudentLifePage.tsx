import { PageHero, Divider } from "../components/ui/SectionHead";
import HouseCards from "../components/studentlife/HouseCards";
import Reveal from "../components/ui/Reveal";

const CLUBS = [
  "Debate Club — weekly Friday sessions, competes in the Lagos Schools Debate League",
  "JETS Club (Junior Engineers, Technicians & Scientists) — state science fair entrant",
  "Coding & Robotics Club — meets in the ICT lab, Tuesdays and Thursdays",
  "Press Club — produces the termly GloryLane Gazette",
  "Cultural Troupe — Yoruba, Igbo, and Hausa dance, performs at Founders' Day",
  "Chess Club — open to all classes, Wednesday lunchtime",
];

const SPORTS = [
  "Football — boys' and girls' teams, inter-house and inter-school fixtures",
  "Basketball & table tennis — covered sports hall, year-round",
  "Athletics — track and field, annual inter-house sports day in August",
  "No on-site swimming pool; SSS students may join the Thursday off-site swim programme",
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 py-2.5 border-b border-rule text-sm text-ink-soft last:border-b-0">
          <span className="text-brass shrink-0">—</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function StudentLifePage() {
  return (
    <main>
      <PageHero crumb="STUDENT LIFE" title="Four houses, fourteen clubs, one uniform">
        <p className="m-0">What a week at GloryLane looks like outside the classroom.</p>
      </PageHero>

      <section className="py-16">
        <Reveal direction="up" className="max-w-[1120px] mx-auto px-6">
          <h3 className="text-xl mb-3">The house system</h3>
          <p className="max-w-[70ch] mb-6">
            Every student is sorted into one of four houses in their first week and stays in it through to SSS3.
            Houses compete year-round in sports, debate, and a termly quiz, and each has a dedicated house tutor
            who tracks pastoral matters alongside form teachers.
          </p>
          <HouseCards />
        </Reveal>
      </section>

      <Divider />

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal direction="left">
            <h3 className="text-xl mb-3">Clubs & competitions</h3>
            <CheckList items={CLUBS} />
          </Reveal>
          <Reveal direction="right">
            <h3 className="text-xl mb-3">Sports</h3>
            <CheckList items={SPORTS} />
          </Reveal>
        </div>
      </section>

      <Divider />

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal direction="left">
            <h3 className="text-xl mb-3">Uniform</h3>
            <p>
              Bottle-green blazer with the school crest, cream shirt, and grey trousers or pinafore. House
              colours appear only on the sports kit, worn on P.E. days and inter-house fixtures. The uniform
              list and approved suppliers are included with the offer letter.
            </p>
          </Reveal>
          <Reveal direction="right">
            <h3 className="text-xl mb-3">Counselling & pastoral care</h3>
            <p>
              A full-time guidance counsellor runs weekly drop-in hours for every year group and coordinates
              career counselling from SSS2, including WAEC/NECO subject-choice guidance and university
              application support.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-11">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal direction="left">
            <h3 className="text-xl mb-3">Transport</h3>
            <p>
              Seven bus routes cover Lekki Phase 1 & 2, Chevron, Ajah, Victoria Island, and Ikoyi, each with a
              staff supervisor on board. Routes and stops are confirmed each August; contact the office to check
              coverage for a specific street.
            </p>
          </Reveal>
          <Reveal direction="right">
            <h3 className="text-xl mb-3">Feeding & clinic</h3>
            <p>
              A cafeteria serves a rotating lunch menu with a vegetarian option daily; students may also bring
              lunch from home. A resident nurse staffs the first-aid room throughout the school day, with a
              written allergy and medication policy on file for every student.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
