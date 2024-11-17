// File: src/app/docs/layout.tsx

import type { Metadata } from "next";
import DocsNav from "./DocsNav";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Docs | Equilibrium.js",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <DocsNav />
      <main>
        <BreadcrumbNav />
        {children}
      </main>
    </div>
  );
}
