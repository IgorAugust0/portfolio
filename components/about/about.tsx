'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import useSectionObserver from '@/lib/hooks';

export default function About() {
  const ref = useSectionObserver({ sectionName: 'Sobre', threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      id="sobre"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[46rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Atualmente sou estudante do 7º período do curso de
        <span className="font-medium"> Sistemas de Informação</span> na
        Universidade Federal de Uberlândia. Sempre tive interesse em tecnologia
        desde mais novo.
        <span className="italic"> Minha parte favorita de programação</span> é o
        aspecto da resolução de problemas. Eu&nbsp;
        <span className="underline">amo</span> a sensação de finalmente
        descobrir uma solução para um problema. Minha stack principal é Java com
        <span className="font-medium">
          &nbsp;Spring Boot, React, Next.js e PostgreSQL
        </span>
        . Também sou familiar com desenvolvimento mobile para iOS. Estou sempre
        procurando aprender novas tecnologias!
      </p>

      <p>
        Quando não estou <span className="italic">estudando/programando</span>,
        gosto de jogar videogames, assistir filmes/séries, e praticar esportes.
        Gosto sempre de
        <span className="font-medium"> aprender coisas novas</span>. Atualmente
        estou aprendendo sobre<span className="font-medium"> astronomia</span>.
        Também estou tentando pegar o hábito de ler mais livros.
      </p>
    </motion.section>
  );
}
