// File: src/app/docs/utilities/page.tsx

import path from "path";
import { redirectToFirstPage } from "@/lib/redirectToFirstPage";

export default function ComponentsPage() {
  const currentPath = path.join(process.cwd(), "src/app/docs/utilities");
  redirectToFirstPage(currentPath, "/docs/utilities");
}