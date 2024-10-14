// File: src/app/docs/layout.tsx

import DocsNav from "./DocsNav";

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
