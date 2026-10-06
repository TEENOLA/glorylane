import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DemoBanner from "./components/layout/DemoBanner";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MobileBar from "./components/layout/MobileBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import StudentLifePage from "./pages/StudentLifePage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="pb-12 lg:pb-0">
      <DemoBanner />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/student-life" element={<StudentLifePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <MobileBar />
    </div>
  );
}
