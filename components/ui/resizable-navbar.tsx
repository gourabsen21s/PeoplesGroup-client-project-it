"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-4 inset-x-0 mx-auto z-50 transition-all duration-300",
        scrolled ? "max-w-2xl" : "max-w-7xl",
        className
      )}
      initial={false}
    >
      <div
        className={cn(
          "relative rounded-full border backdrop-blur-md transition-all duration-300",
          scrolled
            ? "bg-white/80 border-neutral-200/60 shadow-lg px-4 py-2"
            : "bg-white/40 border-white/20 shadow-sm px-6 py-3"
        )}
      >
        {children}
      </div>
    </motion.nav>
  );
};

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {children}
    </div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: Array<{ name: string; link: string }>;
  className?: string;
  onItemClick?: () => void;
}) => {
  return (
    <div className={cn("hidden md:flex items-center space-x-1", className)}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="relative group px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
          onClick={onItemClick}
        >
          {item.name}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-lime-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </Link>
      ))}
    </div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 border-b border-neutral-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}) => {
  return (
    <div className={cn("flex flex-col p-4 space-y-4", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
      aria-label="Toggle menu"
    >
      <svg
        className="w-6 h-6 text-neutral-700"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
};

export const NavbarButton = ({
  href,
  as = "a",
  children,
  className,
  variant = "primary",
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
}) => {
  const Component = as;
  
  const variants = {
    primary: "bg-lime-500 hover:bg-lime-600 text-teal-900 border-lime-500",
    secondary: "bg-transparent hover:bg-neutral-100 text-neutral-700 border-neutral-300",
    dark: "bg-teal-900 hover:bg-black text-white border-teal-900",
    gradient: "bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 text-white border-transparent",
  };

  return (
    <Component
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-full transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
};

