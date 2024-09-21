import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});
const calistoga = Calistoga({subsets: ['latin'], variable: '--font-serif', weight: ['400']});

export const metadata: Metadata = {
  title: "Priyanshu Mishra's Portfolio",
  description: "Explore the projects, experiences, and interests of Priyanshu Mishra, an engineer on a quest to become a polymath.",
  keywords: "Portfolio, Engineering, Design, Data Science, Technology, Projects, AI, Machine Learning, UI, UX, Developer, LLM, Student, Researcher",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable, 
        calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
