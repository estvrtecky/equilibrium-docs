// File: src/app/docs/page.tsx

import fs from "fs";
import path from "path";
import { redirect } from "next/navigation";

export default function Docs() {
  const docsConfigPath = path.join(
    process.cwd(),
    "src/app/docs/docs-config.json"
  );
  const docsConfig = JSON.parse(fs.readFileSync(docsConfigPath, "utf-8"));
  const { defaultPage } = docsConfig;

  redirect(`/docs/${defaultPage}`);
}
