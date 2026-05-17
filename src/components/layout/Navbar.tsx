"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrendingUp, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Calculator", href: "/" },
    { name: "Blog",       href: "/blog" },
    { name: "About",      href: "/about" },
    { name: "Contact",    href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 shadow-soft"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="RetireSmart home">
            <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <TrendingUp className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="text-xl font-black tracking-tighter text-primary">RetireSmart</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition-colors hover:text-accent",
                  pathname === link.href ? "text-accent" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 px-6 py-6 md:hidden shadow-sm">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-base font-bold py-3 flex items-center justify-between border-b border-slate-100 last:border-0",
                  pathname === link.href ? "text-accent" : "text-primary"
                )}
              >
                {link.name}
                <ChevronRight className="h-4 w-4 text-slate-300" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
