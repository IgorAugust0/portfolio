'use client';

import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function IntroButtons() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Link
        href="#contato"
        className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition ease-in-out hover:scale-105 focus:scale-105 focus:bg-gray-950 active:scale-100"
      >
        Entre em contato
        <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
      </Link>
      <a
        href="/resumeIgorAugusto.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download={false}
        className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100"
      >
        Currículo
        <HiDownload className="opacity-60 transition group-hover:translate-y-1.5" />
      </a>
      <a
        href="https://www.linkedin.com/in/igor-august0/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 px-7 py-3 text-[1.35rem] text-gray-700 outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100"
      >
        <BsLinkedin />
        <span className="absolute left-[50%] top-[3.25rem] z-20 origin-top -translate-x-[50%] scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          LinkedIn
        </span>
      </a>
      <a
        href="https://github.com/IgorAugust0"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 px-7 py-3 text-[1.35rem] text-gray-700 outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100"
      >
        <FaGithubSquare />
        <span className="absolute left-[50%] top-[3.25rem] z-20 origin-top -translate-x-[50%] scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          GitHub
        </span>
      </a>
      {/* socials without animated icon: */}
      {/* <a
        href="https://www.linkedin.com/in/igor-august0/"
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 px-7 py-3 text-[1.35rem] text-gray-700 outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100"
      >
        <BsLinkedin />
      </a> */}
      {/* <a
        href="https://github.com/IgorAugust0"
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 px-7 py-3 text-[1.35rem] text-gray-700 outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100"
      >
        <FaGithubSquare />
      </a> */}
    </motion.div>
  );
}
