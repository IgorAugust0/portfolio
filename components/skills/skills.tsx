'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { skillsData } from '@/lib/data';
import { useSectionObserver } from '@/lib/hooks';
import SkillItem from '@/components/skills/skill-item';

export default function Skills() {
  const { ref } = useSectionObserver({ sectionName: 'Habilidades' });
  return (
    <section
      ref={ref}
      id="habilidades"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading>Minhas Habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}
