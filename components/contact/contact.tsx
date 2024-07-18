'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { useSectionObserver } from '@/lib/hooks';
import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/contact-form';

export default function Contact() {
  const ref = useSectionObserver({ sectionName: 'Contato' });
  return (
    <motion.section
      ref={ref}
      id="contato"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>contato</SectionHeading>
      <ContactForm />
    </motion.section>
  );
}
