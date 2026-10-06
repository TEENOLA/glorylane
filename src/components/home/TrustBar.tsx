export default function TrustBar() {
  return (
    <div className="bg-sage border-y border-sage-line">
      <div className="max-w-[1120px] mx-auto px-6 py-4.5 flex flex-wrap items-center justify-between gap-4.5">
        <span className="text-sm font-semibold text-ink-soft">
          <b className="font-serif font-semibold text-green-dark">Est. 1998</b> — 27 years of continuous operation
        </span>
        <span className="text-sm font-semibold text-ink-soft">
          Approved by the <b className="font-serif font-semibold text-green-dark">Lagos State Ministry of Education</b>
        </span>
        <span className="text-sm font-semibold text-ink-soft">
          Registered <b className="font-serif font-semibold text-green-dark">WAEC</b> &{" "}
          <b className="font-serif font-semibold text-green-dark">NECO</b> examination centre
        </span>
      </div>
    </div>
  );
}
