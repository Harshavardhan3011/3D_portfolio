// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import OnSkills from "./pages/onSkills";
import Projects from "./pages/Projects";
import Gaming from "./pages/Gaming"; 
import Resume from "./pages/Resume";
import Testimonials from "./pages/Testimonial";
import Contact from "./pages/Contact";

import LoadingScreen from "./components/intro/LoadingScreen";
import IntroShowcase from "./components/intro/IntroShowcase";
import EnterWorldTransition from "./components/intro/EnterWorldTransition";

import CursorGlow from "./components/interactions/CursorGlow";
import ScrollProgress from "./components/interactions/ScrollProgress";
import CommandPalette from "./components/interactions/CommandPalette";
import AchievementToast from "./components/interactions/AchievementToast";
import SoundToggle from "./components/interactions/SoundToggle";
import ThemeSwitcher from "./components/interactions/ThemeSwitcher";
import ScrollToTop from "./ScrollToTop.jsx";
import Footer from "./components/ui/Footer";
import "./index.css";

import { usePortfolioStore } from "./store/usePortfolioStore";

export default function App() {
  const [introState, setIntroState] = useState("loading"); // "loading" | "showcase" | "entering" | "entered"
  const triggerUnlock = usePortfolioStore((state) => state.triggerUnlock);

  // Check if intro has already been seen in this browser session/local storage
  useEffect(() => {
    const hasSeen = localStorage.getItem("introSeen");
    if (hasSeen) {
      // Subsequent visits start directly at the Enter World Showcase stage to save time, or can be skipped
      setIntroState("showcase");
    }
  }, []);

  const handleLoadingFinish = () => {
    setIntroState("showcase");
  };

  const handleSkipIntro = () => {
    localStorage.setItem("introSeen", "true");
    setIntroState("entered");
    triggerUnlock("system_boot");
  };

  const handleEnterWorld = () => {
    setIntroState("entering");
  };

  const handleTransitionComplete = () => {
    localStorage.setItem("introSeen", "true");
    setIntroState("entered");
    triggerUnlock("system_boot");
  };

  return (
    <>
      {/* PHASE 1: Loading Screen */}
      {introState === "loading" && (
        <LoadingScreen onFinish={handleLoadingFinish} onSkip={handleSkipIntro} />
      )}

      {/* PHASE 2: Intro Showcase */}
      {introState === "showcase" && (
        <IntroShowcase onEnter={handleEnterWorld} onSkip={handleSkipIntro} />
      )}

      {/* PHASE 3: Enter Zoro World Transition */}
      {introState === "entering" && (
        <EnterWorldTransition onComplete={handleTransitionComplete} />
      )}

      {/* PHASE 4: Main Website */}
      {introState === "entered" && (
        <Router>
          <ScrollToTop />
          <CursorGlow />
          <ScrollProgress />
          <CommandPalette />
          <AchievementToast />

          {/* Floating audio and color settings dashboard (Bottom-Left) */}
          <div className="fixed bottom-6 left-6 z-50 flex items-center space-x-3 pointer-events-none">
            <SoundToggle />
            <ThemeSwitcher />
          </div>

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="onSkills" element={<OnSkills />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Gaming" element={<Gaming />} /> 
              <Route path="Resume" element={<Resume />} />
              <Route path="Testimonials" element={<Testimonials />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
          </Routes>

          <Footer />
        </Router>
      )}
    </>
  );
}
