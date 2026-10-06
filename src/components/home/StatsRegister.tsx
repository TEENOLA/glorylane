import { registerStats } from "../../data/content";

export default function StatsRegister() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 border-y border-rule grid grid-cols-2 md:grid-cols-5">
      {registerStats.map((stat, index) => (
        <div
          key={stat.label}
          className={`py-6.5 px-5 text-left border-rule ${index % 2 === 1 ? "border-l" : ""} md:border-l md:first:border-l-0`}
        >
          <span className="block font-serif text-3xl font-semibold text-green-dark">{stat.value}</span>
          <span className="text-xs text-ink-soft mt-1 block">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
