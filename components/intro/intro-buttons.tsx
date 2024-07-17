'use client';

import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function IntroButtons() {
  const { setActiveSection, setLastClicked } = useActiveSectionContext();

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Link
        href="#contato"
        className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white 
        outline-none transition ease-in-out hover:scale-105 focus:scale-105 focus:bg-gray-950 active:scale-100"
        onClick={() => {
          setActiveSection('Contato');
          setLastClicked(Date.now());
        }}
      >
        Entre em contato
        <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
      </Link>
      <a
        href="/resumeIgorAugusto.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download={false}
        className="border-blk group flex items-center gap-2 rounded-full bg-white px-7 py-3 
        outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100 dark:bg-white/10"
      >
        Currículo
        <HiDownload className="opacity-60 transition group-hover:translate-y-1.5" />
      </a>
      <a
        href="https://www.linkedin.com/in/igor-august0/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-blk group relative flex items-center gap-2 rounded-full bg-white
        p-4 px-7 py-3 text-[1.35rem] text-gray-700 outline-none transition ease-in-out 
        hover:scale-105 focus:scale-105 active:scale-100 dark:bg-white/10 dark:text-white/60"
      >
        <BsLinkedin />
        <span
          className="absolute left-[50%] top-[3.25rem] z-20 hidden origin-top 
          -translate-x-[50%] scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2
          text-sm font-bold shadow-md transition-all duration-300 ease-in-out
          group-hover:scale-100 sm:block dark:border-gray-600 dark:bg-white/10 dark:text-white/60"
        >
          LinkedIn
        </span>
      </a>
      <a
        href="https://github.com/IgorAugust0"
        target="_blank"
        rel="noopener noreferrer"
        className="border-blk group relative flex items-center gap-2 rounded-full bg-white 
        p-4 px-7 py-3 text-[1.35rem] text-gray-700 outline-none transition ease-in-out 
        hover:scale-105 focus:scale-105 active:scale-100 dark:bg-white/10 dark:text-white/60"
      >
        <FaGithubSquare />
        <span
          className="absolute left-[50%] top-[3.25rem] z-20 hidden origin-top -translate-x-[50%] 
          scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold shadow-md
          transition-all duration-300 ease-in-out group-hover:scale-100 sm:block dark:border-gray-600 dark:bg-white/10 dark:text-white/60"
        >
          GitHub
        </span>
      </a>
    </motion.div>
  );
}
