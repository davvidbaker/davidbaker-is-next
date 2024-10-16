import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import 'highlight.js/styles/github-dark.css';
import { Analytics } from "@vercel/analytics/react";

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
        <>
          <div className="homework-print-heading">For better viewing of this document in its original form, visit <a href="https://davidbaker.is/slinging-jellybeans">https://davidbaker.is/slinging-jellybeans</a>.</div>
          {children}
          <Analytics />
        </></body>
    </html>
  );
}
