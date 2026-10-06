import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CrestIcon from "../icons/CrestIcon";
import { CtaPill, CtaGhost } from "../ui/Buttons";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Academics", path: "/academics" },
  { label: "Admissions", path: "/admissions" },
  { label: "Student Life", path: "/student-life" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function navLinkClasses({ isActive }: { isActive: boolean }) {
  return `relative text-sm font-medium py-1.5 ${
    isActive ? "text-green-dark after:absolute after:left-0 after:right-0 after:-bottom-[3px] after:h-0.5 after:bg-brass" : "text-ink-soft hover:text-green-dark"
  }`;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-rule">
      <div className="max-w-[1120px] mx-auto px-6 py-3.5 flex items-center justify-between relative">
        <NavLink to="/" className="flex items-center gap-2.5" aria-label="GloryLane School home">
          <CrestIcon className="w-9 h-9" />
          <span className="font-serif font-bold text-green-dark text-[1.15rem] leading-tight">
            GloryLane
            <span className="block font-sans font-medium text-[0.68rem] tracking-wide text-brass">
              SECONDARY SCHOOL, LEKKI
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClasses} end={link.path === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <CtaGhost onClick={() => navigate("/contact")}>Schedule a Visit</CtaGhost>
          <CtaPill onClick={() => navigate("/admissions")}>Apply Now</CtaPill>
        </div>

        <button
          className="lg:hidden border border-rule rounded-md px-2.5 py-1.5 cursor-pointer"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {menuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-cream border-b border-rule px-6 pb-4 flex flex-col items-start">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className="w-full py-2.5 text-sm font-medium text-ink-soft aria-[current=page]:text-green-dark"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
