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
      className="rounded-xl border border-black/[0.1] bg-white px-5 py-3"
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
