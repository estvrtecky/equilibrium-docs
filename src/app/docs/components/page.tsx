// File: src/app/docs/components/page.tsx

import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";

export default function ComponentsPage() {
  const currentPath = path.join(process.cwd(), "src/app/docs/components");
  const folders = fs
    .readdirSync(currentPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // Get only directories
    .map((dirent) => dirent.name)
    .sort(); // Sort folders alphabetically

  // Redirect the user to the first component page
  if (folders.length > 0) {
    redirect(`/docs/components/${folders[0]}`);
  }
}
