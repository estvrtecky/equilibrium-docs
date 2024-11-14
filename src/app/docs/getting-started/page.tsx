// File: src/app/docs/getting-started/page.tsx

import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Getting Started | Equilibrium.js",
};

export default function GettingStartedPage() {
  redirect("/docs/getting-started/introduction");
}
