// File: src/app/docs/DocsNav.tsx

import fs from "fs";
import path from "path";
import Link from "next/link";

export default function DocsNav() {
  const docsPath = path.join(process.cwd(), "src/app/docs");
  const docsConfigPath = path.join(docsPath, "docs-config.json");
  const docsConfig = JSON.parse(fs.readFileSync(docsConfigPath, "utf-8"));
  const { categories } = docsConfig;

  // Function to get all pages within a specified category
  const getPages = (category: string) => {
    const categoryPath = path.join(docsPath, category);

    return fs
      .readdirSync(categoryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory()) // Get only directories
      .map((dirent) => dirent.name); // Get names of directories
  };

  return (
    <aside>
      <nav>
        <ul>
          {categories.map((category: string) => (
            <li key={category}>
              <h5>{category}</h5>
              <ul>
                {getPages(category).map((page) => (
                  <li key={page}>
                    <Link href={`/docs/${category}/${page}`}>{page}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
