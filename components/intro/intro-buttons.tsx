'use client';

import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';
import IntroButtonsSocials from '@/components/intro/intro-buttons-socials';

export default function IntroButtons() {
  const { setActiveSection, setLastClicked } = useActiveSectionContext();
  const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL as string;
  const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL as string;

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Link
        href="#contato"
        className="group flex items-center gap-2 rounded-full border border-white border-opacity-30 bg-gray-800 
        px-7 py-3 text-white outline-none transition ease-in-out hover:scale-105 focus:scale-105 focus:bg-gray-900 active:scale-100 sm:border-none dark:bg-gray-950"
        onClick={() => {
          setActiveSection('Contato');
          setLastClicked(Date.now());
        }}
      >
        Entre em contato
        <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
      </Link>
      <a
        href="/assets/resumeIgorAugusto.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download={false}
        className="border-blk group flex items-center gap-2 rounded-full bg-white px-7 py-3 
        outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100 dark:bg-white/10"
      >
        Currículo
        <HiDownload className="opacity-60 transition group-hover:translate-y-1.5" />
      </a>
      <div className="flex gap-2">
        <IntroButtonsSocials
          href={LINKEDIN_URL}
          icon={<BsLinkedin />}
          label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        />
        <IntroButtonsSocials
          href={GITHUB_URL}
          icon={<FaGithub />}
          label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        />
        {/* <IntroButtonsSocials
          href="mailto:augustoigor269@gmail.com"
          icon={<MdEmail />}
          label="Email"
        /> */}
      </div>
    </motion.div>
  );
}
