import React from "react";

interface TagBadgeProps {
  children: React.ReactNode;
  icon?: boolean;
}

export function TagBadge({ children, icon = true }: TagBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#797d86] bg-[#0a0a0b] border border-[#303236] rounded-[4px] px-2.5 py-1">
      {icon && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#34d59a] animate-pulse" />
      )}
      {children}
    </span>
  );
}
