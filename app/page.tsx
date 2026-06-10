import HeroSection from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AchievementsSection } from "@/components/sections/achievement-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <CTASection />
    </>
  );
}