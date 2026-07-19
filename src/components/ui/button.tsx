import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "neon";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none rounded-[9999px] text-sm";

  const variants = {
    primary:
      "bg-[#ffffff] text-[#151617] px-7 py-3 hover:bg-[#c9cbcf] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#ffffff] border border-[#303236] px-5 py-3 hover:border-[#797d86] hover:bg-[#151617] active:scale-[0.98]",
    neon:
      "bg-[#34d59a] text-[#000000] px-7 py-3 hover:bg-[#285d49] hover:text-[#ffffff] active:scale-[0.98] font-mono",
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      {children}
    </button>
  );
}
