"use client";

import { useAdmissionOptional } from "@/context/AdmissionContext";
import { getSectionIdFromHref, scrollToSection } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  openAdmission?: boolean;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-500 hover:to-cyan-500",
  secondary:
    "bg-white/90 text-indigo-700 shadow-md hover:bg-white border border-indigo-100",
  outline:
    "border-2 border-indigo-500/60 text-indigo-600 bg-transparent hover:bg-indigo-50",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-indigo-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      openAdmission,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const admission = useAdmissionOptional();
    const pathname = usePathname();

    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      variants[variant],
      sizes[size],
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (openAdmission) {
        e.preventDefault();
        admission?.openAdmission();
      }
      onClick?.(e);
    };

    if (href && !openAdmission) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {children}
          </motion.a>
        );
      }

      const sectionId = getSectionIdFromHref(href);
      if (sectionId) {
        const targetHref = `/#${sectionId}`;

        if (pathname === "/") {
          return (
            <motion.a
              href={targetHref}
              className={classes}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionId);
              }}
            >
              {children}
            </motion.a>
          );
        }

        return (
          <Link href={targetHref} className={classes}>
            <motion.span
              className="inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {children}
            </motion.span>
          </Link>
        );
      }

      return (
        <Link href={href} className={classes}>
          <motion.span
            className="inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {children}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={props.type ?? "button"}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
