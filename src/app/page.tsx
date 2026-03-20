"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TechnologySection from "@/components/TechnologySection";
import EcosystemSection from "@/components/EcosystemSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TechnologySection />
      <EcosystemSection />
      <VisionSection />
      <Footer />
    </main>
  );
}
