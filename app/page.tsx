import Intro from '@/components/intro/intro';
import SectionDivider from "@/components/section-divider";
import About from "@/components/about/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
