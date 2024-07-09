import Intro from '@/components/intro/intro';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about/about';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';
import Experience from '@/components/experience/experience';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
