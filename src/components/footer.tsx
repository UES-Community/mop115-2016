import React from "react";
import Link from "next/link";
import { Cpu, GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#303236] bg-[#000000] text-[#797d86] text-xs py-12">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#34d59a]" />
            <span className="font-mono text-sm font-medium text-[#ffffff]">
              MOP115-2016 — Métodos de Optimización
            </span>
          </div>
          <p className="max-w-md text-[#797d86]">
            Plataforma interactiva para la resolución de modelos de programación lineal, método Simplex, optimización en redes y simulaciones numéricas en 3D.
          </p>
          <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-[#34d59a]">
            <span className="w-2 h-2 rounded-full bg-[#34d59a] animate-ping" />
            SISTEMA OPERATIVO Y SIMULADOR ACTIVO
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs text-[#ffffff] uppercase tracking-wider mb-3">
            Unidades del Curso
          </h4>
          <ul className="space-y-2 text-[#797d86]">
            <li>
              <Link href="/unidades/u1" className="hover:text-[#ffffff]">
                Unidad 1: Programación Lineal
              </Link>
            </li>
            <li>
              <Link href="/unidades/u2" className="hover:text-[#ffffff]">
                Unidad 2: Método Simplex
              </Link>
            </li>
            <li>
              <Link href="/unidades/u3" className="hover:text-[#ffffff]">
                Unidad 3: Análisis de Sensibilidad
              </Link>
            </li>
            <li>
              <Link href="/unidades/u4" className="hover:text-[#ffffff]">
                Unidad 4: Programación No Lineal
              </Link>
            </li>
            <li>
              <Link href="/unidades/u5" className="hover:text-[#ffffff]">
                Unidad 5: Optimización en Redes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs text-[#ffffff] uppercase tracking-wider mb-3">
            Tecnologías & Estilo
          </h4>
          <ul className="space-y-2 text-[#797d86]">
            <li>Next.js App Router (v16)</li>
            <li>pnpm Package Manager</li>
            <li>KaTeX Math Engine</li>
            <li>MathJS Linear Algebra</li>
            <li>Three.js & Recharts</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-12 pt-6 border-t border-[#303236] flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4">
        <span>© {new Date().getFullYear()} MOP115-2016. Todos los derechos reservados.</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[#797d86] hover:text-[#ffffff]"
          >
            <GitBranch className="w-3.5 h-3.5" />
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
