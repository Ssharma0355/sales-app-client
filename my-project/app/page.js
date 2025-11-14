import Image from "next/image";
import LandingPage from "./page/LandingPage";
import Header from "@/components/Header";
import HeroSection from "./page/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardPreview from "@/components/DashboardPreview";
import TeamSection from "@/components/TeamSection";
import ProfileSection from "@/components/ProfileSection";
import PricingSection from "@/components/PricingSection";
import FutureFeatures from "@/components/FutureFeatures";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <TeamSection />
      <ProfileSection />
      <PricingSection />
      <FutureFeatures />
      <Footer />
    </div>
  );
}
