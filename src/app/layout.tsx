// File: src/app/layout.tsx

import type { Metadata } from "next";

import "equilibrium.js/dist/css/equilibrium.css";

import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Equilibrium.js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
