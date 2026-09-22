"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "whatsapp";
  size?: "default" | "lg" | "sm";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-copper text-linen px-8 py-4 hover:bg-copper-hover hover:shadow-[0_0_30px_rgba(201,106,64,0.4)] hover:-translate-y-0.5 focus:ring-copper",
      ghost: "border-2 border-linen text-linen px-8 py-4 hover:bg-linen hover:text-midnight focus:ring-linen",
      whatsapp: "bg-green-600 text-white px-8 py-4 hover:bg-green-700 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 focus:ring-green-500",
    };

    const sizes = {
      default: "text-base",
      lg: "text-lg px-10 py-5",
      sm: "text-sm px-6 py-3",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";