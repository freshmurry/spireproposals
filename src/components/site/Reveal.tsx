import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, as: As = "div", className = "" }: {
  children: ReactNode; delay?: number; as?: "div" | "section" | "article" | "li"; className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("is-visible"); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = As as any;
  return <Tag ref={ref as any} className={`reveal ${className}`}>{children}</Tag>;
}
