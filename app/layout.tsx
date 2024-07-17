import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { inter } from '../components/fonts';
import '@/app/globals.css';
import TopNav from '@/components/topnav';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import ToastWrapper from '@/components/toast-wrapper';
import { BlobRight, BlobLeft } from '@/components/blobs';

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
        className={`${inter.className} theme-transition relative bg-gray-50 pt-28 text-gray-950 antialiased sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <BlobRight />
        <BlobLeft />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <TopNav />
            {children}
            <Footer />
            <ToastWrapper />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
