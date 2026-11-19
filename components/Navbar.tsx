"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, routes } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const Icon = open ? X : Menu;
  return (
    <header className="sticky top-0 z-30 bg-white">
      <nav className="container-x flex h-20 items-center justify-between gap-10">
        <Logo />
        <div className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-20 flex-col gap-4 bg-white p-4 shadow md:static md:flex md:flex-1 md:flex-row md:items-center md:p-0 md:shadow-none`}>
          <ul className="flex flex-col gap-4 font-medium md:flex-1 md:flex-row md:gap-8">
            {navLinks.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-brand">{l.label}</Link></li>
            ))}
          </ul>
          <div className="flex items-center gap-10">
            <Link href={routes.login} className="font-medium hover:text-brand">Login</Link>
            <Link href={routes.register} className="btn">Register</Link>
          </div>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu"><Icon /></button>
      </nav>
    </header>
  );
}
