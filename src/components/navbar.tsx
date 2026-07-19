"use client";

import React from "react";
import Link from "next/link";
import { TagBadge } from "./ui/tag-badge";
import { Button } from "./ui/button";
import { Cpu, Terminal, BookOpen, Layers } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-[#303236]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-[4px] bg-[#151617] border border-[#303236] flex items-center justify-center group-hover:border-[#34d59a] transition-colors">
              <Cpu className="w-4 h-4 text-[#34d59a]" />
            </div>
            <span className="font-mono text-base font-semibold tracking-tight text-[#ffffff]">
              MOP115<span className="text-[#34d59a]">//</span>2016
            </span>
          </Link>
          <div className="hidden sm:block">
            <TagBadge icon>OPTIMIZACIÓN</TagBadge>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/"
            className="text-[#797d86] hover:text-[#ffffff] transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/unidades"
            className="text-[#797d86] hover:text-[#ffffff] transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Unidades
          </Link>
          <Link
            href="/unidades/u1"
            className="text-[#797d86] hover:text-[#ffffff] transition-colors"
          >
            Prog. Lineal
          </Link>
          <Link
            href="/unidades/u2"
            className="text-[#797d86] hover:text-[#ffffff] transition-colors"
          >
            Simplex
          </Link>
          <Link
            href="/simulacion"
            className="text-[#797d86] hover:text-[#ffffff] transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-[#34d59a]" />
            Simulaciones 3D
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/unidades">
            <Button variant="ghost" className="hidden sm:inline-flex text-xs py-2 px-4">
              <Terminal className="w-3.5 h-3.5 mr-2 text-[#34d59a]" />
              Consola
            </Button>
          </Link>
          <Link href="/unidades">
            <Button variant="primary" className="text-xs py-2 px-5">
              Comenzar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
