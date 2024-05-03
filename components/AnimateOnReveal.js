"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimateOnReveal({ children, otherClassName }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div ref={elementRef} className={`${isVisible ? "slide-up" : ""} ${otherClassName}`}>
      {children}
    </div>
  );
}
