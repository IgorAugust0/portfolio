import React from 'react';
import IntroImage from '@/components/intro/intro-image';
import IntroHeader from '@/components/intro/intro-header';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[60rem] text-center sm:mb-0">
      <IntroImage />
      <IntroHeader />
    </section>
  );
}
