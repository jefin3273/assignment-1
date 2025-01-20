"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) {
        setScale(0.9);
      } else if (width >= 700 && width <= 767) {
        setScale(0.8);
      } else if (width >= 600 && width < 700) {
        setScale(0.75);
      } else if (width <= 600) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial scale

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
      className="bg-gray-50 min-h-screen"
    >
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <LeftMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <MainContent />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}
