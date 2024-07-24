import React from 'react';

export function BlobRight() {
  return (
    <div
      style={{ transform: 'translate3d(0,0,0)' }}
      className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
    ></div>
  );
}

export function BlobLeft() {
  return (
    <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
  );
}

export default function Blobs() {
  return (
    <div>
      <BlobRight />
      <BlobLeft />
    </div>
  );
}
