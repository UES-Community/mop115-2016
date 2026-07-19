import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "neon" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none";

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
  };

  const variants = {
    primary:
      "bg-[#34d59a] text-[#0a0c10] hover:bg-[#2bc28b] active:scale-[0.98] font-semibold shadow-sm shadow-[#34d59a]/20",
    ghost:
      "bg-transparent text-slate-300 border border-slate-700/60 hover:text-white hover:bg-slate-800/60 hover:border-slate-600 active:scale-[0.98]",
    neon:
      "bg-[#34d59a] text-[#000000] hover:bg-[#285d49] hover:text-[#ffffff] active:scale-[0.98] font-mono",
    outline:
      "border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white",
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, sizes[size], variants[variant], className))}
      {...props}
    >
      {children}
    </button>
  );
}
