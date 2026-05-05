import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SkipLink from "@/components/SkipLink";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SkipLink />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
