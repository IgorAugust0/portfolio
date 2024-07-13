'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function SkillItem({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) {
  return (
    <motion.li
      className="border-blk rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      {skill}
    </motion.li>
  );
}
