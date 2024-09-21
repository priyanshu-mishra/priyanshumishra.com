import {Header} from "@/sections/Header";
import {HeroSection} from "@/sections/Hero";
import {AboutSection} from "@/sections/About";
import {ProjectsSection} from "@/sections/Projects";
import {TapeSection} from "@/sections/Tape";
import {TestimonialsSection} from "@/sections/Experience";
import {ContactSection} from "@/sections/Contact";
import {Footer} from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <section id="projects">
        <ProjectsSection />
      </section>
      <TapeSection />
      <TestimonialsSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
