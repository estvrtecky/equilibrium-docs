// File: src/app/docs/layout.tsx

import type { Metadata } from "next";
import DocsNav from "./DocsNav";

export const metadata: Metadata = {
  title: "Docs | Equilibrium.js",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DocsNav />
      <main>{children}</main>
    </div>
  );
}
