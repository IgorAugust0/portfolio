'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IntroHeading() {
  return (
    <motion.h1
      className="mb-10 mt-4 px-5 text-2xl font-medium !leading-[1.5] sm:text-3xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="font-bold">Olá, sou o Igor! <br/></span> Sou um
      <span className="font-bold">desenvolvedor web full-stack</span>
      , atualmente atuando com <span className="font-bold"> back-end</span>.
      Gosto de construir sites e apps <span className="italic">otimizados e eficientes</span>
      . Meu foco atualmente é <span className="font-bold">C# </span> com o framework 
      <span className="font-bold"> .NET</span> :&#41;
    </motion.h1>
  );
}
