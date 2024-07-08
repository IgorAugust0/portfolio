'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import ProjectCard from '@/components/projects/project-card';

import useSectionObserver from '@/lib/hooks';

export default function Projects() {
  const ref = useSectionObserver({ sectionName: 'Projetos' });

  return (
    <section ref={ref} id="projetos" className="scroll-mt-28 mb-28">
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
