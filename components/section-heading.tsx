import React from 'react';

// // or type SectionHeadingProps = {
interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="mb-8 text-3xl font-medium capitalize text-center">{children}</h2>;
}
