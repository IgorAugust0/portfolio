'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IntroHeading() {
  return (
    <motion.h1
      className="mb-10 mt-4 px-5 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="font-bold">Olá, sou o Igor!</span> Sou um{' '}
      <span className="font-bold">desenvolvedor full-stack</span> que está em
      busca de minha primeira <span className="font-bold">oportunidade</span>.
      Gosto de construir <span className="italic">sites e apps</span>. Meu foco
      atualmente é <span className="underline">Java &#40;Spring Boot&#41;</span>{' '}
      e <span className="underline">React &#40;Next.js&#41;</span>.
    </motion.h1>
  );
}
