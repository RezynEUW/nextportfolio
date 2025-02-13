"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Lukas Hedström</title>
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}