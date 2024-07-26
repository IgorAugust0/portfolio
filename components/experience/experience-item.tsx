'use client';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ExperienceItemProps } from '@/lib/types';
import { useTheme } from '@/context/theme-context';

export default function ExperienceItem({
  title,
  location,
  description,
  date,
  icon,
  // url,
}: ExperienceItemProps) {
  const { theme } = useTheme();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        textAlign: 'left',
        padding: '1.3rem 2rem',
        borderRadius: '1rem',
      }}
      contentArrowStyle={{
        borderRight:
          theme === 'light'
            ? '0.4rem solid #9ca3af'
            : '0.4rem solid rgba(255, 255, 255, 0.5)',
      }}
      date={date}
      icon={icon}
      iconStyle={{
        background: theme === 'light' ? 'white' : '#111827',
        fontSize: '1.5rem',
      }}
    >
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="!mt-0 font-normal">{location}</p>
      {/* {url && (
        <a
          target="_blank"
          href={url}
          className="mb-2 text-sm text-gray-500 dark:text-gray-400"
        >
          {url}
        </a>
      )} */}
      <p className="!mt-1 !text-sm !font-normal text-gray-700 dark:text-white/75">
        {description}
      </p>
    </VerticalTimelineElement>
  );
}
