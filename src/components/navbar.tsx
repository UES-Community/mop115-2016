"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TagBadge } from "./ui/tag-badge";
import { Button } from "./ui/button";
import { Cpu, Terminal, BookOpen, Layers, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[#303236]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 group py-2 px-1 rounded-[4px] transition-colors"
          >
            <div className="w-9 h-9 rounded-[4px] bg-[#151617] border border-[#303236] flex items-center justify-center group-hover:border-[#34d59a] transition-colors">
              <Cpu className="w-5 h-5 text-[#34d59a]" />
            </div>
            <span className="font-mono text-lg font-semibold tracking-tight text-[#ffffff]">
              MOP115<span className="text-[#34d59a]">//</span>2016
            </span>
          </Link>
          <div className="hidden lg:block">
            <TagBadge icon>OPTIMIZACIÓN</TagBadge>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-3.5 py-2 rounded-[4px] transition-all"
          >
            Inicio
          </Link>
          <Link
            href="/unidades"
            className="text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-3.5 py-2 rounded-[4px] transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#797d86] group-hover:text-[#ffffff]" />
            Unidades
          </Link>
          <Link
            href="/unidades/u1"
            className="text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-3.5 py-2 rounded-[4px] transition-all"
          >
            Prog. Lineal
          </Link>
          <Link
            href="/unidades/u2"
            className="text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-3.5 py-2 rounded-[4px] transition-all"
          >
            Simplex
          </Link>
          <Link
            href="/simulacion"
            className="text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-3.5 py-2 rounded-[4px] transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-[#34d59a]" />
            Simulaciones 3D
          </Link>
        </nav>

        {/* CTA Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/unidades" className="hidden sm:inline-block">
            <Button variant="ghost" className="text-xs py-2.5 px-4">
              <Terminal className="w-4 h-4 mr-2 text-[#34d59a]" />
              Consola
            </Button>
          </Link>
          <Link href="/unidades">
            <Button variant="primary" className="text-xs py-2.5 px-6">
              Comenzar
            </Button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#797d86] hover:text-[#ffffff] bg-[#151617] border border-[#303236] rounded-[4px]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000000] border-b border-[#303236] px-6 py-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-4 py-3 rounded-[4px] text-sm font-medium"
          >
            Inicio
          </Link>
          <Link
            href="/unidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-4 py-3 rounded-[4px] text-sm font-medium"
          >
            Unidades Didácticas
          </Link>
          <Link
            href="/unidades/u1"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-4 py-3 rounded-[4px] text-sm font-medium"
          >
            Unidad 1: Programación Lineal
          </Link>
          <Link
            href="/unidades/u2"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#797d86] hover:text-[#ffffff] hover:bg-[#151617] px-4 py-3 rounded-[4px] text-sm font-medium"
          >
            Unidad 2: Método Simplex
          </Link>
          <Link
            href="/simulacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#34d59a] hover:text-[#ffffff] hover:bg-[#151617] px-4 py-3 rounded-[4px] text-sm font-medium"
          >
            Simulaciones 3D
          </Link>
        </div>
      )}
    </header>
  );
}
