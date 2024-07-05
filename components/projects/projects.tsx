import React from 'react';
import SectionHeading from '@/components/section-heading';
import { projectsData } from '@/lib/data';
import ProjectCard from '@/components/projects/project-card';

export default function Projects() {
  return (
    <section id="projetos" className="scroll-mt-28">
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
