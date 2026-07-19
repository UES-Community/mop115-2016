import React from "react";
import { Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#0b0c10] border-b border-[#303236] text-xs py-2 px-6 text-slate-300">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#34d59a]/10 text-[#34d59a] text-[11px] font-medium border border-[#34d59a]/20">
          <Sparkles className="w-3 h-3" /> Cátedra Oficial
        </span>
        <span className="text-slate-300">
          <strong className="text-white">MOP115-2016</strong> — Métodos de Optimización Base en Next.js
        </span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <Link
          href="/unidades"
          className="inline-flex items-center text-[#34d59a] hover:underline font-medium ml-1 transition-colors"
        >
          Explorar Unidades <ChevronRight className="w-3 h-3 ml-0.5" />
        </Link>
      </div>
    </div>
  );
}
