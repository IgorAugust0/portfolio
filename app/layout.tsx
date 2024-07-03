import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import './';

export const metadata: Metadata = {
  title: "Igor Augusto | Portfolio",
  description:
    "Igor is a full-stack developer with 2 years of experience that have done multiple projects with many technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative antialiased bg-gray-50 rela text-gray-950`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>

        {children}
      </body>
    </html>
  );
}
