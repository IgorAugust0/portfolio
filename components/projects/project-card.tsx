'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { ProjectCardProps } from '@/lib/types';

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // starts when bottom of the viewport crosses to top of the target,
  // ends when bottom of the viewport has gone 33% beyond the end of the target
  const { scrollYProgress } = useScroll({
    target: ref!,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link to ${title}`}
      >
        <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition duration-300  ease-in-out even:pl-8 hover:bg-gray-200 sm:h-[25rem] sm:pr-8 dark:bg-white/10 dark:hover:bg-white/20">
          <div className="o flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem] sm:group-even:pl-12">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 sm:group-even:mb-2 dark:text-white/70">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 "
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Projetos que fiz/participei"
            quality={95}
            className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition 
            group-even:-left-40
            group-even:right-[initial]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:scale-[1.04]
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2 sm:block"
          />
        </section>
      </a>
    </motion.div>
  );
}
