'use client';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { experiencesData } from '@/lib/data';
import 'react-vertical-timeline-component/style.min.css';

type ExperienceItemProps = (typeof experiencesData)[number];

export default function ExperienceItem({
  title,
  location,
  description,
  date,
  icon,
}: ExperienceItemProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#f3f4f6',
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
        padding: '1.3rem 2rem',
      }}
      contentArrowStyle={{
        borderRight: '0.4rem solid #9ca3af',
      }}
      date={date}
      icon={icon}
      iconStyle={{
        background: 'white',
        fontSize: '1.5rem',
      }}
    >
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="!mt-0 font-normal">{location}</p>
      <p className="!mt-1 !font-normal text-gray-700">{description}</p>
    </VerticalTimelineElement>
  );
}
