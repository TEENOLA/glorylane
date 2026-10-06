import { admissionSteps } from "../../data/content";

export default function AdmissionSteps() {
  return (
    <div className="border-t border-rule">
      {admissionSteps.map((step, index) => (
        <div key={step.title} className="grid grid-cols-[64px_1fr] gap-5 py-5.5 border-b border-rule">
          <div className="font-serif text-2xl text-brass font-semibold">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <h4 className="text-base mb-1">{step.title}</h4>
            <p className="text-sm m-0">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
