'use client';

import { Fragment } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiencesData } from '@/lib/data';
import SectionHeading from '@/components/section-heading';
import 'react-vertical-timeline-component/style.min.css';
import { useSectionObserver } from '@/lib/hooks';
import ExperienceItem from '@/components/experience/experience-item';

export default function Experience() {
  const { ref } = useSectionObserver({ sectionName: 'Experiência' });

  return (
    <section ref={ref} id="experiencia" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Minha experiência</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience) => (
          <Fragment key={experience.id}>
            <ExperienceItem {...experience} />
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
