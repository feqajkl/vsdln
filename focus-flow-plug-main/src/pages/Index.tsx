import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import DownloadSection from "@/components/DownloadSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <DownloadSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
