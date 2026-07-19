import React from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#000000] border-b border-[#303236] text-xs py-2 px-4 text-center">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#34d59a]" />
        <span className="text-[#c9cbcf]">
          <strong className="text-[#ffffff]">MOP115-2016</strong> — Métodos de Optimización Base en Next.js & App Router
        </span>
        <Link
          href="/unidades"
          className="inline-flex items-center text-[#34d59a] hover:underline font-mono text-[11px] uppercase tracking-wide ml-1"
        >
          Explorar Unidades <ChevronRight className="w-3 h-3 ml-0.5" />
        </Link>
      </div>
    </div>
  );
}
