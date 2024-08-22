import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { inter } from '../components/fonts';
import '@/app/globals.css';
import TopNav from '@/components/topnav';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import ToastWrapper from '@/components/toast-wrapper';
import Blobs from '@/components/blobs';
import { getEnvVariable } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import PwaInstallPrompt from "@/components/pwa-install-prompt";

const websiteUrl = getEnvVariable('WEBSITE_URL');

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    default: 'Igor Augusto | Full-Stack Developer',
    template: '%s | Igor Augusto',
  },
  description:
    'Igor é um desenvolvedor full-stack que adora criar coisas bonitas e funcionais, além de resolver problemas. Ele é apaixonado por tecnologia e sempre está procurando aprender algo novo.',
  openGraph: {
    title: 'Igor Augusto | Full-Stack Developer',
    description:
      'Igor é um desenvolvedor full-stack que adora criar coisas bonitas e funcionais, além de resolver problemas. Ele é apaixonado por tecnologia e sempre está procurando aprender algo novo.',
    type: 'website',
    locale: 'pt_BR',
    url: websiteUrl,
    siteName: 'Igor Augusto',
  },
  metadataBase: new URL(websiteUrl),
};

export const viewport: Viewport = {
  themeColor: '#1f2937',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} sm:theme-transition relative bg-gray-50 pt-28 text-gray-950 antialiased sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Blobs />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <TopNav />
            {children}
            <Footer />
            <ToastWrapper />
            <ThemeSwitch />
            <PwaInstallPrompt />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
