import { AboutSection } from "@/components/AboutSection";
import { CapabilityMap } from "@/components/CapabilityMap";
import { ContactSection } from "@/components/ContactSection";
import { DeliveryModel } from "@/components/DeliveryModel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceScenarios } from "@/components/ServiceScenarios";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CapabilityMap />
      <ServiceScenarios />
      <DeliveryModel />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
