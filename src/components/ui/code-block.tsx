"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

export function CodeBlock({
  code,
  filename = "terminal.sh",
  language = "bash",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#151617] border border-[#303236] rounded-[4px] overflow-hidden font-mono text-xs text-[#ffffff]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0a0b] border-b border-[#303236]">
        <div className="flex items-center gap-2 text-[#797d86]">
          <Terminal className="w-3.5 h-3.5 text-[#34d59a]" />
          <span className="text-[12px]">{filename}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[#797d86] hover:text-[#ffffff] transition-colors"
          title="Copiar código"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#34d59a]" />
              <span className="text-[#34d59a]">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-[14px] leading-relaxed">
        <pre className="text-[#ffffff]">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
