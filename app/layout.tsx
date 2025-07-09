import type { Metadata } from "next";
import {  ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils';

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ImagineX",
  description: "AI powered image generation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
