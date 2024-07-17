import { SectionHeadingProps } from "@/lib/types";
import React from 'react';

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
}
