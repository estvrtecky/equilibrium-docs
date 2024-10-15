// File: src/app/docs/components/page.tsx

import path from "path";
import { redirectToFirstPage } from "@/lib/redirectToFirstPage";

export default function ComponentsPage() {
  const currentPath = path.join(process.cwd(), "src/app/docs/components");
  redirectToFirstPage(currentPath, "/docs/components");
}
