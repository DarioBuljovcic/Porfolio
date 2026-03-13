"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`nav-overlay ${menuOpen ? "nav-active" : ""}`}
        id="nav-overlay"
        onClick={closeMenu}
      />
      <header>
        <div className="container">
          <nav>
            <Link href="/" className="logo" onClick={closeMenu}>
              BEEZ<span>.DEV</span>
            </Link>

            <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`} id="nav-links">
              <li>
                <Link href="/" onClick={closeMenu}>
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/projekti" onClick={closeMenu}>
                  Projekti
                </Link>
              </li>
              <li>
                <Link href="/kontakt" onClick={closeMenu}>
                  Kontakt
                </Link>
              </li>
            </ul>

            <div className="nav-right">
              <Link href="/kontakt" className="btn-primary desktop-only" onClick={closeMenu}>
                Kontakt
              </Link>
              <div
                className={`burger ${menuOpen ? "toggle" : ""}`}
                id="burger"
                onClick={() => setMenuOpen((prev) => !prev)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setMenuOpen((prev) => !prev);
                  }
                }}
              >
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
