"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Cpu, Terminal, BookOpen, Layers, Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Unidades", href: "/unidades", icon: BookOpen },
    { name: "Prog. Lineal", href: "/unidades/u1" },
    { name: "Simplex", href: "/unidades/u2" },
    { name: "Simulaciones 3D", href: "/simulacion", icon: Layers, highlight: true },
  ];

  const isPathActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#34d59a]/10 border border-[#34d59a]/20 flex items-center justify-center text-[#34d59a] group-hover:scale-105 group-hover:bg-[#34d59a]/20 transition-all">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-bold tracking-tight text-white group-hover:text-[#34d59a] transition-colors">
                MOP115<span className="text-[#34d59a]">//</span>2016
              </span>
              <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-[#34d59a] border border-[#34d59a]/20">
                OPTIMIZACIÓN
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isPathActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  active
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      active ? "text-[#34d59a]" : "text-slate-400"
                    }`}
                  />
                )}
                <span>{link.name}</span>
                {link.highlight && !active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d59a] animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Link href="/unidades" className="hidden sm:inline-flex">
            <Button variant="ghost" size="sm" className="gap-2 text-xs">
              <Terminal className="w-4 h-4 text-[#34d59a]" />
              Consola
            </Button>
          </Link>
          <Link href="/unidades">
            <Button variant="primary" size="sm" className="text-xs">
              Comenzar
            </Button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e14] border-b border-slate-800 px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const active = isPathActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      active ? "text-[#34d59a]" : "text-slate-400"
                    }`}
                  />
                )}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
