// File: src/app/docs/layout.tsx

import SideBar from "./SideBar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
