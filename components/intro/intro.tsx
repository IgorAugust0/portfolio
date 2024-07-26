'use client';

import React from 'react';
import IntroImage from '@/components/intro/intro-image';
import IntroHeading from '@/components/intro/intro-heading';
import IntroButtons from '@/components/intro/intro-buttons';
import { useSectionObserver } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionObserver({ sectionName: 'Início' });

  return (
    <section
      ref={ref}
      id="inicio"
      className="mb-28 max-w-[60rem] scroll-mt-36 text-center sm:mb-0"
    >
      <IntroImage />
      <IntroHeading />
      <IntroButtons />
    </section>
  );
}
