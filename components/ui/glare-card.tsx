"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const [isFocused, setIsFocused] = useState(false);
  const glareRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerInside.current || !glareRef.current || !backgroundRef.current)
      return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(190, 242, 100, 0.3), transparent)`;
    
    backgroundRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(20, 184, 166, 0.1), transparent)`;
  };

  const handleMouseEnter = () => {
    isPointerInside.current = true;
  };

  const handleMouseLeave = () => {
    isPointerInside.current = false;
    if (glareRef.current && backgroundRef.current) {
      glareRef.current.style.background = "";
      backgroundRef.current.style.background = "";
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-white",
        className
      )}
    >
      <div
        ref={backgroundRef}
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-300"
      />
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-10 transition-all duration-300"
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

