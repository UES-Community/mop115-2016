"use client";

import React from "react";
import Link from "next/link";
import { TagBadge } from "@/components/ui/tag-badge";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { MathRenderer } from "@/components/math/math-renderer";
import { SimplexCalculator } from "@/components/math/simplex-calculator";
import { ArrowLeft, BookOpen } from "lucide-react";

interface UnidadDetail {
  id: string;
  title: string;
  subtitle: string;
  theory: string;
  formulas: { title: string; math: string }[];
  codeSnippet: string;
}

const details: Record<string, UnidadDetail> = {
  u1: {
    id: "u1",
    title: "Unidad 1: Programación Lineal",
    subtitle: "Formulación de Modelos Matemáticos y Región Factible",
    theory:
      "La Programación Lineal (PL) es la técnica de optimización matemática para maximizar o minimizar una función objetivo lineal sujeta a un conjunto de restricciones lineales de desigualdad o igualdad.",
    formulas: [
      { title: "Función Objetivo Generada", math: "\\max Z = c_1 x_1 + c_2 x_2 + \\dots + c_n x_n" },
      { title: "Restricciones Canónicas", math: "a_{i1}x_1 + a_{i2}x_2 + \\dots + a_{in}x_n \\le b_i" },
      { title: "Condición de No Negatividad", math: "x_j \\ge 0, \\quad \\forall j = 1, \\dots, n" },
    ],
    codeSnippet: `# Ejemplo MathJS en JS/TS
import * as math from 'mathjs';

const c = [3, 5]; // Coeficientes de Z
const x = [4, 6]; // Punto factible
const Z = math.dot(c, x);
console.log('Z evaluado:', Z); // 37`,
  },
  u2: {
    id: "u2",
    title: "Unidad 2: El Método Simplex",
    subtitle: "Algoritmo Tabular y Cambio de Base Matricial",
    theory:
      "El Método Simplex opera iterativamente desplazándose de un punto extremo (vértice) a un vértice adyacente que mejore el valor de la función objetivo Z hasta alcanzar la solución óptima.",
    formulas: [
      { title: "Variables de Holgura", math: "a_{i1}x_1 + a_{i2}x_2 + s_i = b_i" },
      { title: "Prueba de Optimidad", math: "z_j - c_j = c_B^T B^{-1} a_j - c_j \\ge 0" },
      { title: "Criterio de Razón Mínima", math: "\\theta = \\min_i \\left\\{ \\frac{\\bar{b}_i}{\\bar{a}_{ik}} : \\bar{a}_{ik} > 0 \\right\\}" },
    ],
    codeSnippet: `# Tabla Simplex en Python
import numpy as np

# Matriz base B y lado derecho b
B = np.array([[2, 1], [1, 2]])
b = np.array([16, 18])
xB = np.linalg.solve(B, b)
print("Punto extremo xB:", xB) # [4.33, 6.33]`,
  },
  u3: {
    id: "u3",
    title: "Unidad 3: Análisis de Sensibilidad y Dualidad",
    subtitle: "Precios Sombra y Rango de Coeficientes",
    theory:
      "Cada problema de programación lineal Primal tiene asociado un problema Dual. Los valores de las variables duales en la solución óptima representan los precios sombra (Shadow Prices) de los recursos.",
    formulas: [
      { title: "Teorema de Dualidad Fuerte", math: "Z^* = c^T x^* = b^T y^* = W^*" },
      { title: "Precios Sombra", math: "y^* = (B^{-1})^T c_B" },
    ],
    codeSnippet: `// Calculo de Precios Sombra en MathJS
const B_inv = math.inv([[2, 1], [1, 2]]);
const cB = [3, 5];
const y = math.multiply(cB, B_inv);
console.log('Precios sombra y*:', y);`,
  },
  u4: {
    id: "u4",
    title: "Unidad 4: Programación No Lineal",
    subtitle: "Condiciones Karush-Kuhn-Tucker (KKT)",
    theory:
      "La Programación No Lineal contempla problemas donde la función objetivo o las restricciones presentan no linealidades (convexidad o concavidad).",
    formulas: [
      { title: "Lagrangiano", math: "L(x, \\lambda, \\mu) = f(x) + \\sum \\lambda_i g_i(x) + \\sum \\mu_j h_j(x)" },
      { title: "Condición Estacionaria", math: "\\nabla_x L(x^*, \\lambda^*, \\mu^*) = 0" },
    ],
    codeSnippet: `# Gradiente de f(x, y) = x^2 + y^2
import sympy as sp
x, y = sp.symbols('x y')
f = x**2 + y**2
grad = [sp.diff(f, var) for var in (x, y)]
print("Gradiente:", grad) # [2*x, 2*y]`,
  },
  u5: {
    id: "u5",
    title: "Unidad 5: Optimización en Redes",
    subtitle: "Flujo Máximo, Ruta Más Corta y Transporte",
    theory:
      "Los modelos de redes representan flujos continuos o discretos a través de nodos y arcos dirigidos o no dirigidos.",
    formulas: [
      { title: "Conservación de Flujo", math: "\\sum_{j} x_{ij} - \\sum_{k} x_{ki} = b_i" },
      { title: "Capacidad de Arcos", math: "0 \\le x_{ij} \\le u_{ij}" },
    ],
    codeSnippet: `# Algoritmo de Dijkstra para Ruta Más Corta
import networkx as nx
G = nx.DiGraph()
G.add_edge('A', 'B', weight=4)
G.add_edge('B', 'C', weight=2)
path = nx.shortest_path(G, 'A', 'C', weight='weight')
print("Ruta óptima:", path)`,
  },
};

export function UnidadDetailView({ id }: { id: string }) {
  const data = details[id] || details["u1"];

  return (
    <div className="bg-[#000000] text-[#ffffff] min-h-screen py-16 px-6 bg-grid-neon">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <Link
          href="/unidades"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#797d86] hover:text-[#ffffff] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver al catálogo de Unidades
        </Link>

        <div className="space-y-4 border-b border-[#303236] pb-8">
          <TagBadge icon>UNIDAD ACADÉMICA // MOP115</TagBadge>
          <h1 className="font-sans font-medium text-3xl md:text-[48px] tracking-[-1.2px] text-[#ffffff]">
            {data.title}
          </h1>
          <p className="text-[#34d59a] font-mono text-sm">{data.subtitle}</p>
        </div>

        <Card className="p-8 space-y-4">
          <h2 className="font-sans text-xl font-semibold text-[#ffffff] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#34d59a]" />
            Fundamentos Teóricos
          </h2>
          <p className="text-[#797d86] text-base leading-relaxed">
            {data.theory}
          </p>
        </Card>

        <div className="space-y-4">
          <h2 className="font-sans text-xl font-semibold text-[#ffffff]">
            Formulaciones Matemáticas Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.formulas.map((f, idx) => (
              <Card key={idx} className="bg-[#0a0a0b] p-6 text-center space-y-3">
                <span className="text-xs font-mono text-[#797d86] uppercase block">
                  {f.title}
                </span>
                <MathRenderer math={f.math} block />
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-sans text-xl font-semibold text-[#ffffff]">
            Implementación en Código y Evaluación
          </h2>
          <CodeBlock code={data.codeSnippet} filename={"eval_mod_" + data.id + ".ts"} />
        </div>

        <div className="pt-6">
          <SimplexCalculator />
        </div>
      </div>
    </div>
  );
}
