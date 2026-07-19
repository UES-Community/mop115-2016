"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Cpu, Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Unidades", href: "/unidades" },
    { name: "Prog. Lineal", href: "/unidades/u1" },
    { name: "Simplex", href: "/unidades/u2" },
    { name: "Simulaciones 3D", href: "/simulacion" },
  ];

  const isPathActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-[#303236]">
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-[4px] bg-[#151617] border border-[#303236] flex items-center justify-center text-[#34d59a] group-hover:border-[#34d59a] transition-colors">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-mono text-sm font-bold text-white tracking-tight">
            MOP115<span className="text-[#34d59a]">//</span>2016
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isPathActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-medium transition-colors ${
                  active
                    ? "bg-[#151617] text-white border border-[#303236]"
                    : "text-[#797d86] hover:text-white hover:bg-[#151617]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <Link href="/unidades" className="hidden sm:inline-flex">
            <Button variant="ghost" size="sm" className="text-xs py-1.5 px-3">
              <Terminal className="w-3.5 h-3.5 mr-1.5 text-[#34d59a]" />
              Consola
            </Button>
          </Link>
          <Link href="/unidades">
            <Button variant="primary" size="sm" className="text-xs py-1.5 px-4">
              Comenzar
            </Button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#797d86] hover:text-white bg-[#151617] border border-[#303236] rounded-[4px] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000000] border-b border-[#303236] px-6 py-4 space-y-1.5">
          {navLinks.map((link) => {
            const active = isPathActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-[4px] text-xs font-medium transition-colors ${
                  active
                    ? "bg-[#151617] text-white border border-[#303236]"
                    : "text-[#797d86] hover:text-white hover:bg-[#151617]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
