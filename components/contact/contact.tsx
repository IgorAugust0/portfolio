'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import useSectionObserver from '@/lib/hooks';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
      <SectionHeading>Entre em contato</SectionHeading>
      <p className="-mt-4 text-gray-700">
        Por favor entre em contato diretamente em&nbsp;
        <a href="mailto:augustoigor269@gmail.com" className="underline">
          augustoigor269@gmail.com
        </a>
        ,&nbsp;ou por meio do campo abaixo
      </p>

      <form className="mt-9 flex flex-col">
        <input
          type="email"
          name=""
          id=""
          placeholder="Seu email"
          className="border-blk h-14 rounded-lg border px-4"
        />
        <textarea
          name=""
          id=""
          placeholder="Sua mensagem"
          className="border-blk my-3 h-52 rounded-lg p-4"
        ></textarea>
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-100"
        >
          Enviar
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </form>
    </motion.section>
  );
}
