'use client';

import React, { useEffect } from 'react';
import IntroImage from '@/components/intro/intro-image';
import IntroHeading from '@/components/intro/intro-heading';
import IntroButtons from '@/components/intro/intro-buttons';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection, lastClicked } = useActiveSectionContext();

  // Set the active section when the intro section is in view
  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection('Início');
    }
  }, [inView, setActiveSection, lastClicked]);

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
