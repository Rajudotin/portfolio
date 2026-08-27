import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { HomePage } from "./pages/HomePage";
import { VstCaseStudyPage } from "./pages/VstCaseStudyPage";
import { AiAttendanceCaseStudyPage } from "./pages/AiAttendanceCaseStudyPage";
import { GymCaseStudyPage } from "./pages/GymCaseStudyPage";
import { ScrollToTop } from "./utils/scrollToTop";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-[#161616] antialiased">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/work/vst-beauty-academy"
              element={<VstCaseStudyPage />}
            />
            <Route
              path="/work/ai-attendance"
              element={<AiAttendanceCaseStudyPage />}
            />
            <Route path="/work/gym-website" element={<GymCaseStudyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
