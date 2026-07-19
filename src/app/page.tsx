"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TagBadge } from "@/components/ui/tag-badge";
import { CodeBlock } from "@/components/ui/code-block";
import { SimplexCalculator } from "@/components/math/simplex-calculator";
import { OptimizationChart } from "@/components/charts/optimization-chart";
import { Surface3D } from "@/components/three/surface-3d";
import { MathRenderer } from "@/components/math/math-renderer";
import {
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const unidades = [
    {
      id: "u1",
      code: "UNIDAD 01",
      title: "Programación Lineal",
      desc: "Formulación de modelos matemáticos, variables de decisión, función objetivo y planteamiento de restricciones.",
      icon: Terminal,
      formula: "\\max Z = c^T x \\quad s.t. \\quad Ax \\le b",
    },
    {
      id: "u2",
      code: "UNIDAD 02",
      title: "El Método Simplex",
      desc: "Algoritmo tabular Simplex, variables de holgura y exceso, Método de las Dos Fases y Gran M.",
      icon: Cpu,
      formula: "x_B = B^{-1}b - B^{-1}N x_N",
    },
    {
      id: "u3",
      code: "UNIDAD 03",
      title: "Análisis de Sensibilidad y Dualidad",
      desc: "Teorema de dualidad, precios sombra, rangos de variación de coeficientes c_j y recursos b_i.",
      icon: GitBranch,
      formula: "\\min W = b^T y \\quad s.t. \\quad A^T y \\ge c",
    },
    {
      id: "u4",
      code: "UNIDAD 04",
      title: "Programación No Lineal",
      desc: "Condiciones necesarias y suficientes de Karush-Kuhn-Tucker (KKT), gradiente y optimización convexa.",
      icon: Sparkles,
      formula: "\\nabla f(x) + \\sum \\lambda_i \\nabla g_i(x) = 0",
    },
    {
      id: "u5",
      code: "UNIDAD 05",
      title: "Optimización en Redes y Transporte",
      desc: "Problema de transporte, asignación, ruta más corta, flujo máximo y método del árbol de expansión mínima.",
      icon: Layers,
      formula: "\\sum_{j} x_{ij} - \\sum_{k} x_{ki} = b_i",
    },
  ];

  return (
    <div className="bg-[#000000] text-[#ffffff] min-h-screen bg-grid-neon">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-6 overflow-hidden border-b border-[#303236]">
        {/* Background ambient glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#34d59a]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-[1200px] mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <TagBadge icon>MOP115-2016 // CÁTEDRA OFICIAL</TagBadge>
          </div>

          <h1 className="font-sans font-medium text-4xl sm:text-6xl md:text-[80px] leading-tight md:leading-none tracking-[-3.2px] text-[#ffffff] max-w-4xl mx-auto">
            Métodos de Optimización <span className="text-[#34d59a]">Avanzada</span>
          </h1>

          <p className="text-[#797d86] text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed tracking-[-0.36px]">
            Plataforma interactiva de simulación numérica y algorítmica para resolver modelos de programación lineal, método Simplex y optimización en 3D.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/unidades">
              <Button variant="primary" className="text-sm px-8 py-3">
                Comenzar Aprendizaje
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/simulacion">
              <Button variant="ghost" className="text-sm px-7 py-3">
                <Terminal className="w-4 h-4 mr-2 text-[#34d59a]" />
                Ver Simulaciones 3D
              </Button>
            </Link>
          </div>

          {/* Code Showcase Terminal in Hero */}
          <div className="pt-10 max-w-3xl mx-auto text-left">
            <CodeBlock
              filename="simplex_solver.py"
              code={`# MOP115-2016: Algoritmo Simplex Matricial con MathJS & Python
import numpy as np

def simplex_solve(c, A, b):
    # Formulación matricial Z = c^T * x
    tableau = np.hstack([A, np.eye(len(b)), b.reshape(-1, 1)])
    print("[LOG] Matriz de coeficientes inicializada con exito.")
    return "Solución óptima alcanzada: Z* = 37.0"`}
            />
          </div>
        </div>
      </section>

      {/* Unidades Grid Section */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#303236] pb-8">
          <div>
            <TagBadge icon>TEMARIO COMPLETO</TagBadge>
            <h2 className="font-sans font-medium text-3xl md:text-[48px] leading-tight tracking-[-1.2px] text-[#ffffff] mt-3">
              Unidades Didácticas
            </h2>
          </div>
          <p className="text-[#797d86] text-sm max-w-md">
            Explora las 5 unidades fundamentales del programa MOP115 con formulaciones matemáticas KaTeX y herramientas interactivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unidades.map((u) => {
            const Icon = u.icon;
            return (
              <Card key={u.id} className="flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#34d59a] bg-[#0a0a0b] border border-[#303236] px-2.5 py-1 rounded-[4px]">
                      {u.code}
                    </span>
                    <Icon className="w-5 h-5 text-[#797d86] group-hover:text-[#34d59a] transition-colors" />
                  </div>

                  <h3 className="font-sans text-xl font-semibold text-[#ffffff] tracking-tight">
                    {u.title}
                  </h3>

                  <p className="text-[#797d86] text-sm leading-relaxed">
                    {u.desc}
                  </p>

                  <div className="bg-[#0a0a0b] border border-[#303236] rounded-[4px] p-3 text-center">
                    <MathRenderer math={u.formula} />
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#303236]">
                  <Link
                    href={`/unidades/${u.id}`}
                    className="inline-flex items-center text-xs font-mono text-[#34d59a] hover:underline uppercase tracking-wider"
                  >
                    Estudiar Unidad <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </Card>
            );
          })}

          {/* Extra Card: Simulador Interactivo */}
          <Card className="bg-gradient-to-b from-[#151617] to-[#0a0a0b] border-[#34d59a]/40 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#000000] bg-[#34d59a] px-2.5 py-1 rounded-[4px] font-semibold">
                  INTERACTIVO
                </span>
                <Layers className="w-5 h-5 text-[#34d59a]" />
              </div>

              <h3 className="font-sans text-xl font-semibold text-[#ffffff]">
                Laboratorio 3D
              </h3>

              <p className="text-[#797d86] text-sm">
                Visualización tridimensional con Three.js para analizar gradientes, óptimos locales y superficies convexas.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#303236]">
              <Link href="/simulacion">
                <Button variant="neon" className="w-full text-xs py-2.5">
                  Lanzar Laboratorio
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Interactive Demonstration Section */}
      <section className="py-24 px-6 bg-[#0a0a0b] border-t border-b border-[#303236]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <TagBadge icon>DEMOSTRACIÓN EN TIEMPO REAL</TagBadge>
            <h2 className="font-sans font-medium text-3xl md:text-[48px] tracking-[-1.2px]">
              Calculadora Simplex & Gráficos 2D/3D
            </h2>
            <p className="text-[#797d86] text-sm">
              Experimenta con los algoritmos matemáticos en vivo ejecutados directamente en tu navegador con MathJS, Recharts y Three.js.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SimplexCalculator />
            <OptimizationChart />
          </div>

          <div className="max-w-4xl mx-auto">
            <Surface3D />
          </div>
        </div>
      </section>

      {/* Feature List Do's / Benefits */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <TagBadge icon>ARQUITECTURA MOP115</TagBadge>
            <h2 className="font-sans font-medium text-3xl md:text-[48px] leading-tight tracking-[-1.2px]">
              Diseñado para Máxima Rigurosidad Matemática
            </h2>
            <p className="text-[#797d86] text-base leading-relaxed">
              La plataforma MOP115 integra renderizado KaTeX de alta precisión, álgebra lineal simbólica con MathJS y renderizado 3D de GPU.
            </p>

            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#34d59a]" />
                <span className="text-[#ffffff]">
                  Motor de ecuaciones LaTeX KaTeX ultrarrápido y responsivo.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#34d59a]" />
                <span className="text-[#ffffff]">
                  Evaluador simbólico y operaciones matriciales con MathJS.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#34d59a]" />
                <span className="text-[#ffffff]">
                  Gráficos vectoriales 2D interactivos con Recharts para región factible.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#34d59a]" />
                <span className="text-[#ffffff]">
                  Simulaciones 3D aceleradas por hardware en Three.js / R3F.
                </span>
              </li>
            </ul>
          </div>

          <Card className="bg-[#0a0a0b] p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#303236] pb-4">
              <span className="font-mono text-xs text-[#34d59a]">ESPECIFICACIONES TÉCNICAS</span>
              <ShieldCheck className="w-5 h-5 text-[#34d59a]" />
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between border-b border-[#303236] pb-2">
                <span className="text-[#797d86]">Framework Web:</span>
                <span className="text-[#ffffff]">Next.js App Router (v16)</span>
              </div>
              <div className="flex justify-between border-b border-[#303236] pb-2">
                <span className="text-[#797d86]">Gestor de Paquetes:</span>
                <span className="text-[#34d59a]">pnpm (Strict)</span>
              </div>
              <div className="flex justify-between border-b border-[#303236] pb-2">
                <span className="text-[#797d86]">Sistema de Estilos:</span>
                <span className="text-[#ffffff]">Neon Style Reference (Dark)</span>
              </div>
              <div className="flex justify-between border-b border-[#303236] pb-2">
                <span className="text-[#797d86]">Tipografía:</span>
                <span className="text-[#ffffff]">Inter & GeistMono</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#797d86]">Estado de Repositorio:</span>
                <span className="text-[#34d59a]">Issue #1 Resuelta</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
