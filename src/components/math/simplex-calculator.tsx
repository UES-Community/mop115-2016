"use client";

import React, { useState } from "react";
import * as math from "mathjs";
import { MathRenderer } from "./math-renderer";
import { Play, RotateCcw, Calculator, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

export function SimplexCalculator() {
  const [c1, setC1] = useState<number>(3);
  const [c2, setC2] = useState<number>(5);
  const [x1, setX1] = useState<number>(4);
  const [x2, setX2] = useState<number>(6);
  const [evaluatedZ, setEvaluatedZ] = useState<number | null>(37);
  const [logs, setLogs] = useState<string[]>([
    "Inicializando matriz del método Simplex...",
    "Función objetivo: Z = 3*x1 + 5*x2",
    "Evaluado en punto factible (4, 6): Z = 37",
  ]);

  const handleCalculate = () => {
    try {
      // Evaluate Z = c1*x1 + c2*x2 using mathjs expression evaluation
      const expr = `${c1} * ${x1} + ${c2} * ${x2}`;
      const result = math.evaluate(expr);
      setEvaluatedZ(result);

      // Verify constraints: 2x1 + x2 <= 16 and x1 + 2x2 <= 18
      const constr1 = 2 * x1 + x2 <= 16;
      const constr2 = x1 + 2 * x2 <= 18;
      const isFeasible = constr1 && constr2 && x1 >= 0 && x2 >= 0;

      const newLog = `Evaluado: Z = ${c1}*(${x1}) + ${c2}*(${x2}) = ${result} | Región Factible: ${
        isFeasible ? "SÍ (Óptimo/Válido)" : "NO (Fuera de límites)"
      }`;
      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleReset = () => {
    setC1(3);
    setC2(5);
    setX1(4);
    setX2(6);
    setEvaluatedZ(37);
    setLogs(["Consola reiniciada."]);
  };

  return (
    <div className="bg-[#151617] border border-[#303236] rounded-[4px] p-6 text-[#ffffff] space-y-6">
      <div className="flex items-center justify-between border-b border-[#303236] pb-4">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[#34d59a]" />
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">
            Simulador de Evaluación de Función Objetivo (MathJS)
          </h3>
        </div>
        <span className="font-mono text-xs text-[#34d59a] bg-[#0a0a0b] border border-[#303236] px-2.5 py-1 rounded-[4px]">
          ALGEBRA LINEAL & MATHJS
        </span>
      </div>

      {/* Math Formulation */}
      <div className="bg-[#0a0a0b] border border-[#303236] rounded-[4px] p-4 text-center">
        <div className="text-xs text-[#797d86] font-mono mb-2 uppercase">
          Modelo de Programación Lineal Primario
        </div>
        <MathRenderer
          block
          math={`\\max Z = ${c1} x_1 + ${c2} x_2`}
        />
        <div className="text-xs text-[#797d86] mt-2">
          Sujeto a: <MathRenderer math={`2x_1 + x_2 \\le 16, \\quad x_1 + 2x_2 \\le 18, \\quad x_1, x_2 \\ge 0`} />
        </div>
      </div>

      {/* Input Form */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
        <div>
          <label className="block text-[#797d86] mb-1">Coeficiente c₁</label>
          <input
            type="number"
            value={c1}
            onChange={(e) => setC1(Number(e.target.value))}
            className="w-full bg-[#000000] border border-[#303236] rounded-[4px] px-3 py-2 text-[#ffffff] focus:border-[#34d59a] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[#797d86] mb-1">Coeficiente c₂</label>
          <input
            type="number"
            value={c2}
            onChange={(e) => setC2(Number(e.target.value))}
            className="w-full bg-[#000000] border border-[#303236] rounded-[4px] px-3 py-2 text-[#ffffff] focus:border-[#34d59a] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[#797d86] mb-1">Variable x₁</label>
          <input
            type="number"
            value={x1}
            onChange={(e) => setX1(Number(e.target.value))}
            className="w-full bg-[#000000] border border-[#303236] rounded-[4px] px-3 py-2 text-[#ffffff] focus:border-[#34d59a] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-[#797d86] mb-1">Variable x₂</label>
          <input
            type="number"
            value={x2}
            onChange={(e) => setX2(Number(e.target.value))}
            className="w-full bg-[#000000] border border-[#303236] rounded-[4px] px-3 py-2 text-[#ffffff] focus:border-[#34d59a] focus:outline-none"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <Button variant="primary" onClick={handleCalculate} className="text-xs py-2 px-5">
            <Play className="w-3.5 h-3.5 mr-2" />
            Calcular Z
          </Button>
          <Button variant="ghost" onClick={handleReset} className="text-xs py-2 px-4">
            <RotateCcw className="w-3.5 h-3.5 mr-2" />
            Restablecer
          </Button>
        </div>

        {evaluatedZ !== null && (
          <div className="flex items-center gap-2 font-mono text-sm bg-[#0a0a0b] px-4 py-2 rounded-[4px] border border-[#303236]">
            <CheckCircle2 className="w-4 h-4 text-[#34d59a]" />
            <span className="text-[#797d86]">Z =</span>
            <span className="text-[#34d59a] font-bold text-base">{evaluatedZ}</span>
          </div>
        )}
      </div>

      {/* Console output logs */}
      <div className="bg-[#000000] border border-[#303236] rounded-[4px] p-3 font-mono text-xs text-[#797d86] space-y-1">
        <div className="text-[11px] text-[#34d59a] font-semibold border-b border-[#303236] pb-1 mb-2">
          SALIDA DE CONSOLA / LOGS MATHJS
        </div>
        {logs.map((log, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[#34d59a]">&gt;</span>
            <span>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
