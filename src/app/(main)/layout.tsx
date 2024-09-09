import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Nav from './nav';
import 'highlight.js/styles/github-dark.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Baker",
  description: "David Baker's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <link rel="icon" href="/images/favicon.png" sizes="any" />
      <body className={inter.className}>
        <Nav />
        <>
          {children}
        </></body>
    </html>
  );
}
