"use client";

import React from "react";
import Link from "next/link";
import { TagBadge } from "@/components/ui/tag-badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MathRenderer } from "@/components/math/math-renderer";
import { ArrowRight, BookOpen, Terminal, Cpu, GitBranch, Sparkles, Layers } from "lucide-react";

const unidadesData = [
  {
    id: "u1",
    num: "01",
    title: "Unidad 1: Programación Lineal y Formulación de Modelos",
    desc: "Fundamentos de la programación lineal. Identificación de variables de decisión, planteamiento de la función objetivo y construcción de restricciones explícitas e implícitas.",
    topics: ["Variables de Decisión", "Función Objetivo Maximizar/Minimizar", "Restricciones de Desigualdad", "Región Factible 2D"],
    formula: "\\max Z = \\sum_{j=1}^n c_j x_j \\quad s.t. \\quad \\sum_{j=1}^n a_{ij} x_j \\le b_i",
  },
  {
    id: "u2",
    num: "02",
    title: "Unidad 2: El Método Simplex y Variantes",
    desc: "Algoritmo tabular Simplex para encontrar vértices óptimos. Incorporación de variables de holgura, exceso y artificiales. Métodos de las Dos Fases y Gran M.",
    topics: ["Variables de Holgura y Exceso", "Criterio de Entrante y Saliente (Pivote)", "Método de las Dos Fases", "Degeneración y Ciclaje"],
    formula: "z_j - c_j = c_B^T B^{-1} a_j - c_j",
  },
  {
    id: "u3",
    num: "03",
    title: "Unidad 3: Teoría de Dualidad y Análisis de Sensibilidad",
    desc: "Relación entre el problema Primal y Dual. Teoremas de dualidad débil y fuerte. Precios sombra, análisis de cambios en el vector RHS (b) y coeficientes de costo (c).",
    topics: ["Problema Primal y Dual", "Teorema de Holgura Complementaria", "Precios Sombra (Shadow Prices)", "Sensibilidad en Coeficientes"],
    formula: "\\text{Primal: } \\max c^T x \\quad \\Longleftrightarrow \\quad \\text{Dual: } \\min b^T y",
  },
  {
    id: "u4",
    num: "04",
    title: "Unidad 4: Programación No Lineal y Optimización Convexa",
    desc: "Modelos con funciones objetivo o restricciones no lineales. Condiciones de primer orden de Karush-Kuhn-Tucker (KKT), hessiano, convexidad y gradiente descendente.",
    topics: ["Funciones Convexas y Cóncavas", "Condiciones KKT", "Multiplicadores de Lagrange", "Método del Gradiente Descendente"],
    formula: "\\nabla f(x^*) + \\sum_{i=1}^m \\lambda_i \\nabla g_i(x^*) = 0",
  },
  {
    id: "u5",
    num: "05",
    title: "Unidad 5: Optimización en Redes y Transporte",
    desc: "Modelos de flujo en redes, algoritmo de transporte y asignación, problema de la ruta más corta (Dijkstra/Floyd-Warshall) y flujo máximo (Ford-Fulkerson).",
    topics: ["Algoritmo de Transporte", "Problema de Asignación (Húngaro)", "Ruta Más Corta", "Flujo Máximo y Mínimo Corte"],
    formula: "\\min \\sum_{(i,j) \\in E} c_{ij} x_{ij} \\quad s.t. \\quad \\sum_{j} x_{ij} - \\sum_{k} x_{ki} = b_i",
  },
];

export default function UnidadesIndexPage() {
  return (
    <div className="bg-[#000000] text-[#ffffff] min-h-screen py-16 px-6 bg-grid-neon">
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-[#303236] pb-8">
          <TagBadge icon>PROGRAMA DE ESTUDIOS</TagBadge>
          <h1 className="font-sans font-medium text-4xl md:text-[60px] tracking-[-3.2px] text-[#ffffff]">
            Unidades de Métodos de Optimización
          </h1>
          <p className="text-[#797d86] text-base max-w-2xl font-sans">
            Guía modular para la materia MOP115-2016. Selecciona cualquiera de las unidades para acceder a las notas teóricas, fórmulas interactiva KaTeX y simuladores algorítmicos.
          </p>
        </div>

        {/* Unidades List */}
        <div className="space-y-6">
          {unidadesData.map((u) => (
            <Card key={u.id} className="p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#303236] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[#000000] bg-[#34d59a] font-bold px-3 py-1 rounded-[4px]">
                    UNIDAD {u.num}
                  </span>
                  <h2 className="font-sans text-xl font-semibold text-[#ffffff]">
                    {u.title}
                  </h2>
                </div>
                <Link href={`/unidades/${u.id}`}>
                  <Button variant="ghost" className="text-xs py-2 px-4">
                    Ver Unidad <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </Link>
              </div>

              <p className="text-[#797d86] text-sm leading-relaxed">
                {u.desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="bg-[#0a0a0b] border border-[#303236] rounded-[4px] p-4 text-center">
                  <span className="text-[11px] font-mono text-[#797d86] block mb-2">
                    FORMULACIÓN MODELO MATEMÁTICO
                  </span>
                  <MathRenderer math={u.formula} block />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-[#34d59a] uppercase tracking-wider block">
                    Temas Clave:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {u.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs text-[#ffffff] bg-[#0a0a0b] border border-[#303236] px-2.5 py-1 rounded-[4px]"
                      >
                        • {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
