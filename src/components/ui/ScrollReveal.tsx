import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale-up";
  duration?: number; // duration in ms
  delay?: number; // delay in ms
  threshold?: number; // intersection observer threshold
}

export default function ScrollReveal({
  children,
  id,
  className = "",
  style = {},
  animation = "slide-up",
  duration = 800,
  delay = 0,
  threshold = 0.05,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Reveal only once for smooth performance
        }
      },
      { threshold }
    );

    const currentDom = domRef.current;
    if (currentDom) {
      observer.observe(currentDom);
    }

    return () => {
      if (currentDom) {
        observer.unobserve(currentDom);
      }
    };
  }, [threshold]);

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium modern ultra-smooth curve
    };

    if (isVisible) {
      return {
        ...baseStyle,
        opacity: 1,
        transform: "translate(0, 0) scale(1)",
      };
    }

    const transformByAnimation = {
      "fade-in": "none",
      "slide-down": "translateY(-50px)",
      "slide-left": "translateX(50px)",
      "slide-right": "translateX(-50px)",
      "scale-up": "scale(0.96)",
      "slide-up": "translateY(50px)",
    };
    const transform = transformByAnimation[animation];

    return {
      ...baseStyle,
      opacity: 0,
      transform,
    };
  };

  return (
    <div
      id={id}
      ref={domRef}
      className={className}
      style={{
        ...getAnimationStyles(),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
