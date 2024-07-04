'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IntroImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/79866605?v=4"
            alt="Igor's profile picture"
            width={460}
            height={460}
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </motion.div>
        <motion.span
          className="absolute bottom-0 right-0 text-3xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          🚀
        </motion.span>
      </div>
    </div>
  );
}
