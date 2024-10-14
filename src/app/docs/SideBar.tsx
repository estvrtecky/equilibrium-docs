// File: src/app/docs/SideBar.tsx

import Link from "next/link";

export default function SideBar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <h5>Getting Started</h5>
            <ul>
              <li>
                <Link href="/docs">Introduction</Link>
              </li>
            </ul>
          </li>
          <li>
            <h5>Components</h5>
            <ul>
              <li>
                <Link href="/docs/components/buttons">Buttons</Link>
              </li>
              <li>
                <Link href="/docs/components/navbar">Navbar</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
