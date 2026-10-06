import { useNavigate } from "react-router-dom";

export default function MobileBar() {
  const navigate = useNavigate();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] bg-green-dark border-t border-white/10 grid grid-cols-3">
      <a
        href="tel:+2348001234567"
        className="text-center text-cream text-xs font-semibold py-3.5 border-r border-white/10"
      >
        Call
      </a>
      <a
        href="https://wa.me/2348001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-cream text-xs font-semibold py-3.5 border-r border-white/10"
      >
        WhatsApp
      </a>
      <button
        onClick={() => navigate("/admissions")}
        className="text-center text-cream text-xs font-semibold py-3.5 cursor-pointer"
      >
        Apply
      </button>
    </div>
  );
}
