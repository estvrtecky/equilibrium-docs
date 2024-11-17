// File: src/components/BreadcrumbNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { formatUrlSegment } from "@/lib/formatUrlSegment";

export default function BreadcrumbNav() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLastSegment = index === pathSegments.length - 1;

          return (
            <li
              key={path}
              className={`breadcrumb-item ${isLastSegment ? "active" : ""}`}
              aria-current={isLastSegment ? "page" : undefined}>
              {isLastSegment ? (
                formatUrlSegment(segment)
              ) : (
                <Link href={path}>{formatUrlSegment(segment)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
