import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="Spire Proposals home">
          <BrandMark width={40} height={40} className="h-10 w-10" />
          <span className={`font-bold tracking-tight text-lg ${scrolled || open ? "text-navy" : "text-white"}`}>
            Spire <span className="font-normal opacity-80">Proposals</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((n) => {
            const active = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative text-sm font-medium transition-colors ${
                  scrolled ? "text-text-primary hover:text-navy" : "text-white/90 hover:text-white"
                } ${active ? "after:scale-x-100" : "after:scale-x-0"}
                after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full
                after:bg-gold after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">Start the Conversation</Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled || open ? "#0B1B3D" : "#fff"} strokeWidth="2.2" strokeLinecap="round">
            {open ? (<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>) : (<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>)}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out bg-white border-b border-border ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-x py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="py-3 text-base font-medium text-text-primary hover:text-navy border-b border-border last:border-0">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4">Start the Conversation</Link>
        </nav>
      </div>
    </header>
  );
}
