"use client";

import { ComingSoonSection } from "@/modules/main/components/ComingSoonSection";
import { FeaturesSection } from "@/modules/main/components/FeaturesSection";
import { Footer } from "@/modules/main/components/Footer";
import { HeroSection } from "@/modules/main/components/HeroSection";
import { Navigation } from "@/modules/main/components/Navigation";
import { ProductPreview } from "@/modules/main/components/ProductPreview";
import { WaitlistSignup } from "@/modules/main/components/WaitlistSignup";
import { WhatIsNewayziSection } from "@/modules/main/components/WhatIsNewayziSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatIsNewayziSection />
      <FeaturesSection />
      <ProductPreview />
      <WaitlistSignup />
      <ComingSoonSection />
      <Footer />
    </main>
  );
}
