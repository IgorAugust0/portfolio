'use client';

import React, { useEffect } from 'react';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import ProjectCard from '@/components/projects/project-card';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection('Projetos');
    }
  }, [inView, setActiveSection, lastClicked]);

  return (
    <section ref={ref} id="projetos" className="scroll-mt-28">
      <SectionHeading>Meus projetos</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
