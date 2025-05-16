"use client";

import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FeatureIcons from "./FeatureIcons";
import AboutPerson from "./AboutPerson";
import Services from "./Services";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";
import FaqSection from "./FaqSection";
import Footer from "./Footer";



export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<div className="bg-white text-gray-900 scroll-smooth">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-24">
        <Hero />
        <FeatureIcons />
        <AboutPerson />
        <Services />
        <Testimonials />
        <CTASection/>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
