"use client";

import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from "react-katex";

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

export function MathRenderer({ math, block = false, className }: MathRendererProps) {
  return (
    <div className={`inline-block font-mono text-[#ffffff] ${className || ""}`}>
      {block ? <BlockMath math={math} /> : <InlineMath math={math} />}
    </div>
  );
}
