import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "bg-[#151617] border border-[#303236] rounded-[4px] p-6 text-[#ffffff] transition-colors duration-200",
          hoverEffect && "hover:border-[#34d59a]/40 hover:bg-[#1a1b1d]",
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
}
