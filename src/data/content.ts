import frontGateImg from "../assets/images/gallery-front-gate.jpg";
import scienceBlockImg from "../assets/images/gallery-science-block.jpg";
import chemistryLabImg from "../assets/images/gallery-chemistry-lab.jpg";
import libraryImg from "../assets/images/gallery-library.jpg";
import footballFieldImg from "../assets/images/gallery-football-field.jpg";
import sportsHallImg from "../assets/images/gallery-sports-hall.jpg";
import sportsDayImg from "../assets/images/gallery-sports-day.jpg";
import culturalTroupeImg from "../assets/images/gallery-cultural-troupe.jpg";
import morningAssemblyImg from "../assets/images/gallery-morning-assembly.jpg";
import proprietressImg from "../assets/images/staff-proprietress.jpg";
import principalImg from "../assets/images/staff-principal.jpg";
import vpJuniorImg from "../assets/images/staff-vp-junior.jpg";
import vpSeniorImg from "../assets/images/staff-vp-senior.jpg";

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: "Academic rigour",
    description:
      "A structured JSS core and specialised SSS tracks, taught to WAEC and NECO syllabi with weekly assessed homework from JSS1.",
  },
  {
    title: "A house that knows your child",
    description:
      "Every student joins one of four houses on day one — a fixed group of staff and peers who track their term, not just their grades.",
  },
  {
    title: "Facilities built for use, not show",
    description:
      "Three working science labs, a fibre-connected ICT lab, and a covered sports hall — all in daily use, not reserved for open days.",
  },
  {
    title: "A campus you can walk into",
    description:
      "Single-gate access, visitor sign-in, CCTV coverage, and a resident nurse on site every school day.",
  },
];

export type Facility = {
  icon: "flask" | "book" | "target" | "monitor" | "clinic" | "bus";
  title: string;
  description: string;
};

export const facilities: Facility[] = [
  {
    icon: "flask",
    title: "Science laboratories",
    description: "Separate Physics, Chemistry, and Biology labs, each fitted for practical WAEC/NECO exam sessions.",
  },
  {
    icon: "book",
    title: "Library & resource centre",
    description: "Over 6,000 volumes, a periodicals wall, and a quiet study room reserved for SSS3 exam candidates.",
  },
  {
    icon: "target",
    title: "Sports hall & field",
    description: "A covered hall for basketball and table tennis, plus a full-size field for football and athletics.",
  },
  {
    icon: "monitor",
    title: "ICT laboratory",
    description: "40 workstations on fibre broadband, used for the JSS computing curriculum and the Coding & Robotics Club.",
  },
  {
    icon: "clinic",
    title: "Boarding & clinic",
    description: "Day school only — no boarding. A resident nurse and first-aid room are staffed throughout the school day.",
  },
  {
    icon: "bus",
    title: "Bus fleet",
    description: "Seven routes covering Lekki, Ajah, VI, and Ikoyi, each with a supervising staff member on board.",
  },
];

export type Testimonial = {
  quote: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My son struggled with Maths at his old school. Two terms into JSS2 here, he's asking for extra past questions on his own. The house tutors actually notice things like that.",
    source: "Mrs. Ibironke, parent of a JSS2 student",
  },
  {
    quote:
      "What sold me was the gate policy on my first visit — every visitor signed in, phones logged, no exceptions, even for a parent.",
    source: "Mr. Okonji, parent of two SSS students",
  },
  {
    quote: "I did my WAEC here in 2019 and came back to teach Chemistry. It's stricter than I remembered, in a good way.",
    source: "Ms. Bello, alumna & staff",
  },
];

export type NewsItem = {
  date: string;
  title: string;
  summary: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "3 SEPTEMBER 2026",
    title: "2026 WAEC results: 96% five-credit pass rate",
    summary:
      "SSS3's outgoing set posted the school's highest five-credit pass rate in six years, led by strong results in Mathematics and Biology.",
  },
  {
    date: "21 AUGUST 2026",
    title: "Inter-house sports day sets a new attendance record",
    summary: "Baobab House retained the trophy for a second year, with over 400 parents on the field for the closing relay.",
  },
  {
    date: "10 AUGUST 2026",
    title: "JETS Club places second at Lagos state science fair",
    summary: "The team's water-filtration project earned a runner-up finish among 34 schools competing in the state finals.",
  },
];

export type AdmissionStep = {
  title: string;
  description: string;
};

export const admissionSteps: AdmissionStep[] = [
  { title: "Obtain the form", description: "Download it above, or collect a printed copy from the school office, Monday–Friday, 8am–3pm." },
  { title: "Submit with documents", description: "Return the completed form with the required documents (see checklist below) and the non-refundable application fee." },
  { title: "Sit the entrance exam", description: "English and Mathematics, pitched to the applicant's proposed entry class. Results released within five working days." },
  { title: "Attend the interview", description: "A short interview with the applicant and at least one parent or guardian, held with the Vice Principal for the relevant school." },
  { title: "Receive an offer letter", description: "Successful applicants receive a formal offer with the fee schedule and a two-week window to accept." },
  { title: "Accept & pay", description: "Acceptance is confirmed on payment of the first term's fees. A place is not held beyond the two-week window." },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What are your class sizes?",
    answer: "Capped at 28 in JSS and 24 in SSS, so a form teacher can realistically know every student by name and progress.",
  },
  {
    question: "Do you offer scholarships or bursaries?",
    answer:
      "A limited number of merit scholarships (up to 50% of tuition) are awarded each session to the top three entrance-exam scorers. There is no separate needs-based bursary programme at this time.",
  },
  {
    question: "Is there a sibling discount?",
    answer: "Yes — a 10% tuition discount applies from the third child of the same household currently enrolled.",
  },
  {
    question: "Can a student transfer in mid-term?",
    answer:
      "We prefer transfers at the start of a term, but will assess mid-term applications case by case where a place exists, subject to the same entrance exam and interview process.",
  },
];

export type House = {
  name: string;
  colorHex: string;
  description: string;
};

export const houses: House[] = [
  { name: "Baobab", colorHex: "#1B4332", description: "Green & gold. Reigning inter-house sports champions, two years running." },
  { name: "Iroko", colorHex: "#AD8629", description: "Brass & navy. Strongest showing in the termly quiz for three consecutive terms." },
  { name: "Cedar", colorHex: "#7A3B2E", description: "Rust & cream. Home to most of this year's JETS Club and debate team members." },
  { name: "Oak", colorHex: "#2C4A6E", description: "Slate blue & white. Known for the strongest under-14 football side on campus." },
];

export type SubjectTrack = {
  id: "science" | "arts" | "commercial";
  label: string;
  subjects: string[];
};

export const juniorSubjects: string[] = [
  "English Language",
  "Mathematics",
  "Basic Science",
  "Basic Technology",
  "Social Studies",
  "French",
  "Yoruba",
  "Computer Studies",
  "Civic Education",
  "Business Studies",
  "Home Economics",
  "Physical & Health Education",
];

export const seniorTracks: SubjectTrack[] = [
  {
    id: "science",
    label: "Science",
    subjects: ["Physics", "Chemistry", "Biology", "Further Mathematics", "Agricultural Science", "Geography"],
  },
  {
    id: "arts",
    label: "Arts",
    subjects: ["Literature in English", "Government", "History", "Christian Religious Studies", "French", "Yoruba"],
  },
  {
    id: "commercial",
    label: "Commercial",
    subjects: ["Financial Accounting", "Commerce", "Economics", "Business Studies", "Government", "Marketing"],
  },
];

export type Leader = {
  name: string;
  role: string;
  image: string;
};

export const leaders: Leader[] = [
  { name: "Mrs. Folake Adeyemi", role: "Proprietress & Head of School — with GloryLane since 2009, formerly Vice Principal (Academics).", image: proprietressImg },
  { name: "Mr. Chidi Umeh", role: "Principal — oversees day-to-day academics and discipline across JSS and SSS.", image: principalImg },
  { name: "Mrs. Ngozi Eke", role: "Vice Principal, Junior School (JSS1–JSS3) and head of the pastoral care team.", image: vpJuniorImg },
  { name: "Mr. Tunde Sowande", role: "Vice Principal, Senior School (SSS1–SSS3) and WAEC/NECO exams officer.", image: vpSeniorImg },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: "Campus & Grounds" | "Classrooms & Labs" | "Sports & Events" | "Culture & Founders' Day";
  caption: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "front-gate",
    title: "The Admiralty Way gate",
    category: "Campus & Grounds",
    caption: "Single-entry gate with visitor sign-in — the first thing most parents ask about.",
    image: frontGateImg,
  },
  {
    id: "science-block",
    title: "The science block",
    category: "Campus & Grounds",
    caption: "Added in 2019 alongside the ICT laboratory, on the east side of the main compound.",
    image: scienceBlockImg,
  },
  {
    id: "chemistry-lab",
    title: "Chemistry laboratory",
    category: "Classrooms & Labs",
    caption: "One of three separate science labs, fitted for WAEC and NECO practical sessions.",
    image: chemistryLabImg,
  },
  {
    id: "resource-centre",
    title: "Library & resource centre",
    category: "Classrooms & Labs",
    caption: "Over 6,000 volumes, with a quiet room reserved for SSS3 exam candidates.",
    image: libraryImg,
  },
  {
    id: "football-field",
    title: "The football field",
    category: "Sports & Events",
    caption: "Full-size field used for inter-house sports, athletics, and after-school training.",
    image: footballFieldImg,
  },
  {
    id: "sports-hall",
    title: "Covered sports hall",
    category: "Sports & Events",
    caption: "Basketball and table tennis courts, in daily use rather than reserved for open days.",
    image: sportsHallImg,
  },
  {
    id: "sports-day",
    title: "Inter-house sports day",
    category: "Sports & Events",
    caption: "The August fixture between Baobab, Iroko, Cedar, and Oak houses, on the main field.",
    image: sportsDayImg,
  },
  {
    id: "cultural-troupe",
    title: "Cultural Troupe at Founders' Day",
    category: "Culture & Founders' Day",
    caption: "Yoruba, Igbo, and Hausa dance performed each year to mark the school's founding.",
    image: culturalTroupeImg,
  },
  {
    id: "morning-assembly",
    title: "Morning assembly",
    category: "Culture & Founders' Day",
    caption: "The whole school gathers by house every morning before the first period.",
    image: morningAssemblyImg,
  },
];

export type RegisterStat = {
  value: string;
  label: string;
};

export const registerStats: RegisterStat[] = [
  { value: "612", label: "students, JSS1–SSS3" },
  { value: "1:15", label: "teacher-to-student ratio" },
  { value: "96%", label: "five-credit WAEC pass rate, 2025" },
  { value: "14", label: "clubs and competitive teams" },
  { value: "2.1 ha", label: "campus on Admiralty Way" },
];
