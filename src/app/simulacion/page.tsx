"use client";

import React from "react";
import Link from "next/link";
import { TagBadge } from "@/components/ui/tag-badge";
import { Surface3D } from "@/components/three/surface-3d";
import { OptimizationChart } from "@/components/charts/optimization-chart";
import { SimplexCalculator } from "@/components/math/simplex-calculator";
import { ArrowLeft, Cpu, Layers } from "lucide-react";

export default function SimulacionPage() {
  return (
    <div className="bg-[#000000] text-[#ffffff] min-h-screen py-16 px-6 bg-grid-neon">
      <div className="max-w-[1200px] mx-auto space-y-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#797d86] hover:text-[#ffffff] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver a Inicio
        </Link>

        <div className="space-y-4 border-b border-[#303236] pb-8">
          <TagBadge icon>LABORATORIO DE SIMULACIÓN</TagBadge>
          <h1 className="font-sans font-medium text-4xl md:text-[60px] tracking-[-3.2px] text-[#ffffff]">
            Simulaciones 3D & Algoritmos
          </h1>
          <p className="text-[#797d86] text-base max-w-2xl">
            Entorno interactivo para renderizar regiones factibles 2D en tiempo real, superficies de funciones no lineales en 3D aceleradas con Three.js y evaluación algebraica con MathJS.
          </p>
        </div>

        <div className="space-y-12">
          <Surface3D />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <OptimizationChart />
            <SimplexCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}
