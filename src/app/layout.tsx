import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import AppShell from "../component/AppShell";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Onyba",
  description: "Onyba Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/styles/all.min.css" rel="stylesheet" type="text/css" />
        <link href="/styles/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/styles/layout.css" rel="stylesheet" type="text/css" />
        <link href="/styles/style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <AppShell>{children}</AppShell>
        <ToastContainer />
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/layout.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}