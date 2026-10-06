import { useNavigate } from "react-router-dom";
import { facilities } from "../../data/content";
import { SectionHead } from "../ui/SectionHead";
import { LinkArrow } from "../ui/Buttons";
import { FlaskIcon, BookIcon, TargetIcon, MonitorIcon, ClinicIcon, BusIcon } from "../icons/MarkIcons";

const ICONS = {
  flask: FlaskIcon,
  book: BookIcon,
  target: TargetIcon,
  monitor: MonitorIcon,
  clinic: ClinicIcon,
  bus: BusIcon,
};

export default function FacilitiesGrid() {
  const navigate = useNavigate();

  return (
    <section className="py-11">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHead kicker="FACILITIES" title="What's on the ground" />
      </div>
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {facilities.map((facility) => {
            const Icon = ICONS[facility.icon];
            return (
              <div key={facility.title} className="bg-cream p-6.5">
                <Icon className="w-7.5 h-7.5 mb-3.5" />
                <h4 className="text-[0.98rem] mb-1.5">{facility.title}</h4>
                <p className="text-sm m-0">{facility.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6">
          <LinkArrow onClick={() => navigate("/gallery")}>See the campus in the gallery</LinkArrow>
        </div>
      </div>
    </section>
  );
}
