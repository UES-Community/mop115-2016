"use client";

import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ComposedChart,
} from "recharts";
import { TrendingUp, Layers } from "lucide-react";

const initialData = [
  { x: 0, restriccion1: 16, restriccion2: 9, obj: 0 },
  { x: 2, restriccion1: 12, restriccion2: 8, obj: 16 },
  { x: 4, restriccion1: 8, restriccion2: 7, obj: 32 },
  { x: 5.33, restriccion1: 5.33, restriccion2: 6.33, obj: 36 },
  { x: 6, restriccion1: 4, restriccion2: 6, obj: 38 },
  { x: 8, restriccion1: 0, restriccion2: 5, obj: 24 },
];

export function OptimizationChart() {
  const [activeCurve, setActiveCurve] = useState<"all" | "r1" | "r2">("all");

  return (
    <div className="bg-[#151617] border border-[#303236] rounded-[4px] p-6 text-[#ffffff] space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#303236] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#34d59a]" />
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">
              Visualización de Región Factible 2D (Recharts)
            </h3>
          </div>
          <p className="text-xs text-[#797d86] mt-1">
            Gráfico de rectas de restricción y región de soluciones óptimas
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveCurve("all")}
            className={`font-mono text-xs px-3 py-1.5 rounded-[9999px] border transition-colors ${
              activeCurve === "all"
                ? "bg-[#34d59a] text-[#000000] border-[#34d59a]"
                : "bg-transparent text-[#797d86] border-[#303236] hover:text-[#ffffff]"
            }`}
          >
            Ver Todo
          </button>
          <button
            onClick={() => setActiveCurve("r1")}
            className={`font-mono text-xs px-3 py-1.5 rounded-[9999px] border transition-colors ${
              activeCurve === "r1"
                ? "bg-[#34d59a] text-[#000000] border-[#34d59a]"
                : "bg-transparent text-[#797d86] border-[#303236] hover:text-[#ffffff]"
            }`}
          >
            Restricción 1
          </button>
          <button
            onClick={() => setActiveCurve("r2")}
            className={`font-mono text-xs px-3 py-1.5 rounded-[9999px] border transition-colors ${
              activeCurve === "r2"
                ? "bg-[#34d59a] text-[#000000] border-[#34d59a]"
                : "bg-transparent text-[#797d86] border-[#303236] hover:text-[#ffffff]"
            }`}
          >
            Restricción 2
          </button>
        </div>
      </div>

      <div className="h-[320px] w-full bg-[#0a0a0b] border border-[#303236] rounded-[4px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={initialData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#303236" />
            <XAxis dataKey="x" stroke="#797d86" tick={{ fill: "#797d86", fontSize: 12 }} />
            <YAxis stroke="#797d86" tick={{ fill: "#797d86", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#151617",
                borderColor: "#303236",
                borderRadius: "4px",
                color: "#ffffff",
                fontFamily: "monospace",
                fontSize: "12px",
              }}
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                fontFamily: "monospace",
                paddingTop: "8px",
              }}
            />

            {(activeCurve === "all" || activeCurve === "r1") && (
              <Line
                type="monotone"
                dataKey="restriccion1"
                name="2x₁ + x₂ = 16"
                stroke="#34d59a"
                strokeWidth={2}
                dot={{ fill: "#34d59a", r: 4 }}
              />
            )}

            {(activeCurve === "all" || activeCurve === "r2") && (
              <Line
                type="monotone"
                dataKey="restriccion2"
                name="x₁ + 2x₂ = 18"
                stroke="#ffffff"
                strokeWidth={2}
                dot={{ fill: "#ffffff", r: 4 }}
              />
            )}

            {activeCurve === "all" && (
              <Line
                type="monotone"
                dataKey="obj"
                name="Z (Función Objetivo)"
                stroke="#797d86"
                strokeDasharray="5 5"
                strokeWidth={1.5}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#797d86]">
        <div className="bg-[#0a0a0b] p-3 border border-[#303236] rounded-[4px] flex items-center justify-between">
          <span>Punto Vértice Óptimo:</span>
          <span className="text-[#34d59a] font-bold">(4, 6)</span>
        </div>
        <div className="bg-[#0a0a0b] p-3 border border-[#303236] rounded-[4px] flex items-center justify-between">
          <span>Valor Z Máximo:</span>
          <span className="text-[#ffffff] font-bold">Z = 37</span>
        </div>
        <div className="bg-[#0a0a0b] p-3 border border-[#303236] rounded-[4px] flex items-center justify-between">
          <span>Estado de Región:</span>
          <span className="text-[#34d59a] font-bold">Acotada</span>
        </div>
      </div>
    </div>
  );
}
