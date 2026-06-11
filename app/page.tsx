import { CapabilityMap } from "@/components/CapabilityMap";
import { CustomerCases } from "@/components/CustomerCases";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CapabilityMap />
      <CustomerCases />
      <Footer />
    </main>
  );
}
