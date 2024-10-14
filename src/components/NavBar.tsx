// File: src/components/NavBar.tsx

import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">Equilibrium</Link>
        </div>
        <button className="navbar-menu-toggle btn">&#9776;</button>
        <ul>
          <li>
            <Link
              href="/docs"
              className="btn">
              Docs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
