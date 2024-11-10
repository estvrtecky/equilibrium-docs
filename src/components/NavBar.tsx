// File: src/components/NavBar.tsx

"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Menu } from "equilibrium.js/dist/js/equilibrium.js";

export default function NavBar() {
  useEffect(() => {
    new Menu();
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">Equilibrium</Link>
        </div>
        <button
          className="navbar-menu-toggle btn"
          data-eq-toggle="navbar-menu">
          &#9776;
        </button>
        <ul className="navbar-nav">
          <li>
            <Link
              href="/docs"
              className="btn">
              Docs
            </Link>
          </li>
        </ul>
      </nav>
      <div
        id="navbar-menu"
        className="menu right">
        <div className="menu-header">
          <div className="navbar-logo">
            <Link
              href="/"
              data-eq-toggle="navbar-menu">
              Equilibrium
            </Link>
          </div>
          <button
            className="navbar-menu-toggle btn"
            data-eq-toggle="navbar-menu">
            &#10006;
          </button>
        </div>
        <div className="menu-main">
          <ul>
            <li>
              <Link
                href="/docs"
                className="btn"
                data-eq-toggle="navbar-menu">
                Docs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
