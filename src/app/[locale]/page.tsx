"use client";

import { FeaturesSection } from "@/modules/main/components/FeaturesSection";
import { Footer } from "@/modules/main/components/Footer";
import { HeroSection } from "@/modules/main/components/HeroSection";
import { Navigation } from "@/modules/main/components/Navigation";
import { ProductPreview } from "@/modules/main/components/ProductPreview";
import { WaitlistSignup } from "@/modules/main/components/WaitlistSignup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductPreview />
      <WaitlistSignup />
      <Footer />
    </main>
  );
}
