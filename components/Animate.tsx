"use client";
import { useInView } from "@/hooks/useInView";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  style?: CSSProperties;
}

export default function Animate({ children, delay = 0, direction = "up", style }: Props) {
  const { ref, inView } = useInView();

  const translate = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
    fade: "none",
  }[direction];

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : translate,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
