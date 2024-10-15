// File: src/lib/redirectToFirstPage.ts

import fs from "fs";
import { redirect } from "next/navigation";

export const redirectToFirstPage = (
  currentPath: string,
  redirectPath: string
) => {
  // Get all pages within a specified folder
  const pages = fs
    .readdirSync(currentPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // Get only directories
    .map((dirent) => dirent.name) // Get names of directories
    .sort(); // Sort directories alphabetically

  // Redirect the user to the first page
  if (pages.length > 0) {
    redirect(`${redirectPath}/${pages[0]}`);
  }
};
