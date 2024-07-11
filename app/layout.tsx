import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { inter } from '../components/fonts';
import '@/app/globals.css';
import TopNav from '@/components/topnav';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Igor Augusto | Full-stack Developer',
  description:
    'Igor is a full-stack developer with 2 years of experience that have done multiple projects with many technologies.',
  // metadataBase: new URL('https://igor-augusto.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 antialiased sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <TopNav />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
