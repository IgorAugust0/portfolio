'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

export default function NavLinks() {
  return (
    <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3.5">
        {links.map((link) => (
          <motion.li
            key={link.hash}
            className="relative flex h-3/4 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href={link.hash}
              className="flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
