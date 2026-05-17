import React from "react";
import Link from "next/link";
import { TrendingUp, Globe, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tighter text-primary">RetireSmart</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium financial tools for the modern professional. Built for accuracy, speed, and privacy.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  401(k) Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  Strategy Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  Financial Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
            © {currentYear} RetireSmart Financial Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black text-primary/30 uppercase tracking-widest">
              <ShieldCheck className="h-3.5 w-3.5" /> Secure Platform
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-primary/30 uppercase tracking-widest">
              <Globe className="h-3.5 w-3.5" /> US Region
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
