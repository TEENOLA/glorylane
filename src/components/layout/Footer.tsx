import { Link } from "react-router-dom";
import CrestIcon from "../icons/CrestIcon";

export default function Footer() {
  return (
    <footer className="bg-green-dark text-[#CBD8CD]">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-9 py-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <CrestIcon className="w-7 h-7" strokeColor="#E4C878" fillColor="none" />
            <span className="font-serif font-bold text-white text-base">GloryLane School</span>
          </div>
          <p className="text-[#AABFAE] text-sm max-w-[32ch]">
            14 Admiralty Way, Lekki Phase 1, Lagos. Approved by the Lagos State Ministry of Education.
          </p>
        </div>

        <div>
          <h5 className="text-brass-light text-xs font-bold tracking-wide mb-3.5">QUICK LINKS</h5>
          <ul className="space-y-1.5">
            <li><Link to="/admissions" className="text-sm hover:text-white">Admission Form (PDF)</Link></li>
            <li><Link to="/admissions" className="text-sm hover:text-white">Fee Schedule</Link></li>
            <li><Link to="/academics" className="text-sm hover:text-white">Term Calendar</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-brass-light text-xs font-bold tracking-wide mb-3.5">EXPLORE</h5>
          <ul className="space-y-1.5">
            <li><Link to="/about" className="text-sm hover:text-white">About Us</Link></li>
            <li><Link to="/student-life" className="text-sm hover:text-white">Student Life</Link></li>
            <li><Link to="/gallery" className="text-sm hover:text-white">Gallery</Link></li>
            <li><Link to="/admissions" className="text-sm hover:text-white">Admissions</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-brass-light text-xs font-bold tracking-wide mb-3.5">CONTACT</h5>
          <ul className="space-y-1.5">
            <li className="text-sm">0800 123 4567</li>
            <li className="text-sm">admissions@glorylaneschool.ng</li>
            <li><Link to="/contact" className="text-sm hover:text-white">Enquiry form</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1120px] mx-auto px-6 py-4 flex flex-wrap justify-between gap-2.5 text-xs text-[#9FB3A3]">
          <span>© 2026 GloryLane School (concept). All rights reserved.</span>
          <span>Designed by deolustudio</span>
        </div>
      </div>
    </footer>
  );
}
