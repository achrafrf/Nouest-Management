import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ServiceCards from "@/components/sections/service-cards";
import AboutUsSection from "@/components/sections/about-us";
import ProjectsList from "@/components/sections/projects-list";
import StatsSection from "@/components/sections/stats-section";
import TestimonialSection from "@/components/sections/testimonial";
import ValuesBlack from "@/components/sections/values-black";
import CtaYellow from "@/components/sections/cta-yellow";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <AboutUsSection />
        <ProjectsList />
        <StatsSection />
        <TestimonialSection />
        <ValuesBlack />
        <CtaYellow />
      </main>
      <Footer />
    </div>
  );
}
