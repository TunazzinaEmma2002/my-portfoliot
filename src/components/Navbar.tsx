"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
      >
        <a href="#top" className="font-display text-lg font-bold">
          {site.name}
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              download
              className="rounded-full border border-line px-4 py-2 font-medium hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-line bg-night px-5 py-3 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              download
              onClick={() => setOpen(false)}
              className="block py-2 font-medium text-accent"
            >
              Download resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}