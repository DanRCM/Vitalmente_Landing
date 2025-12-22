import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-vital-green text-white hover:bg-vital-dark shadow-md hover:shadow-lg",
    outline: "border-2 border-vital-green text-vital-green hover:bg-vital-green/10"
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], className)} 
      {...props} 
    />
  );
}