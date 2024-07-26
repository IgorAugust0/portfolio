import React from 'react';
import { IntroButtonsSocialsProps } from '@/lib/types';

export default function IntroButtonsSocials({
  href,
  icon,
  label,
  target,
  rel,
}: IntroButtonsSocialsProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="border-blk group relative flex items-center gap-2 rounded-full bg-white p-4 px-4 py-3 text-[1.35rem] text-gray-700 outline-none transition ease-in-out hover:scale-105 focus:scale-105 active:scale-100 dark:bg-white/10 dark:text-white/60"
    >
      {icon}
      <span className="absolute left-[50%] top-[3.25rem] z-20 hidden origin-top -translate-x-[50%] scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 sm:block dark:border-gray-600 dark:bg-white/10 dark:text-white/60">
        {label}
      </span>
    </a>
  );
}
