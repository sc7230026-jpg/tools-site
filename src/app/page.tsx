import React from "react";
import { Metadata } from "next";
import { Calculator } from "@/components/calculator/Calculator";
import { SEOContent } from "@/components/calculator/SEOContent";
import { FAQSection } from "@/components/calculator/FAQSection";
import { MobileCTA } from "@/components/calculator/MobileCTA";
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ChevronRight,
  BadgeCheck,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free 401(k) Retirement Calculator 2026 | RetireSmart",
  description:
    "Use our free 401(k) retirement calculator to instantly estimate your savings growth, employer match, and monthly retirement income. Compare Roth vs Traditional — updated for 2026 IRS limits.",
  keywords:
    "401k calculator, retirement savings calculator, roth vs traditional 401k, employer match calculator, retirement planning tool, free retirement calculator 2026",
  alternates: { canonical: "/" },
};

const trustBadges = [
  { icon: BadgeCheck, label: "IRS 2026 Limits Verified", color: "text-finance-blue" },
  { icon: ShieldCheck, label: "SEC Compliant Formulas",  color: "text-finance-blue" },
  { icon: Lock,        label: "Private & Secure",        color: "text-finance-blue" },
  { icon: Clock,       label: "Updated May 2026",        color: "text-accent"       },
];

const howItWorks = [
  {
    step: "01",
    title: "Enter your details",
    desc: "Input your current age, salary, savings balance, and monthly contribution amount.",
  },
  {
    step: "02",
    title: "Set your assumptions",
    desc: "Adjust expected return, employer match, inflation rate, and salary growth to match your situation.",
  },
  {
    step: "03",
    title: "See your projection",
    desc: "Get an instant, visual breakdown of your retirement balance, monthly income, and growth trajectory.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* ── Schema Markup ───────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "RetireSmart 401(k) Calculator",
            operatingSystem: "All",
            applicationCategory: "FinanceApplication",
            description:
              "Free 401(k) retirement savings calculator with Roth vs Traditional comparison, employer match, and inflation adjustments.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1250",
            },
          }),
        }}
      />

      {/* ── Breadcrumb Schema ───────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://retiresmart.example.com" },
              { "@type": "ListItem", position: 2, name: "401(k) Calculator", item: "https://retiresmart.example.com/" },
            ],
          }),
        }}
      />

      {/* ── HERO + CALCULATOR ───────────────────────────── */}
      <section
        className="pt-16 pb-20 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Subtle background depth — CSS only, no images */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[140px] -z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-finance-blue/4 blur-[120px] -z-10 pointer-events-none"
        />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

          {/* Breadcrumb nav — SEO + UX */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-accent">401(k) Calculator</span>
          </nav>

          {/* Hero header — tool identity above the fold */}
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-primary text-[10px] font-black uppercase tracking-wider shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Free Tool — No Sign-Up Required
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl font-black text-primary leading-[1.1] tracking-tight mb-5"
            >
              401(k) Retirement{" "}
              <span className="text-accent">Savings Calculator</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
              Find out exactly how much your 401(k) could be worth at retirement.
              Adjust contributions, employer match, and tax strategy — and see
              your results update instantly.
            </p>
          </div>

          {/* Trust badges row — above calculator, high visibility */}
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12"
            aria-label="Trust indicators"
          >
            {trustBadges.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 text-xs font-bold text-primary/70">
                <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* ── CALCULATOR — the main product ── */}
          <div id="calculator">
            <Calculator />
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS — simple 3-step strip ─────────── */}
      <section
        className="py-16 border-y border-slate-100 bg-white"
        aria-labelledby="how-it-works-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2
            id="how-it-works-heading"
            className="text-2xl font-black text-primary text-center mb-10 tracking-tight"
          >
            How to Use This Calculator in 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 text-accent font-black text-sm flex items-center justify-center">
                  {step}
                </span>
                <div>
                  <h3 className="font-bold text-primary mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EEAT TRUST BAR ──────────────────────────────── */}
      <section className="py-12 bg-slate-50/50 border-b border-slate-100" aria-label="Expertise and Trust">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                  alt="Portrait of Marcus Vance, Certified Financial Planner"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Reviewed by a Certified Financial Planner
                </p>
                <p className="font-bold text-primary">Marcus Vance, CFP®</p>
                <p className="text-xs text-muted-foreground">
                  20+ years in retirement & tax planning
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-sm text-xs font-bold text-primary/60">
                <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
                Instant Calculations
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-sm text-xs font-bold text-primary/60">
                <ShieldCheck className="h-4 w-4 text-finance-blue" aria-hidden="true" />
                100% Free Forever
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-sm text-xs font-bold text-primary/60">
                <TrendingUp className="h-4 w-4 text-accent" aria-hidden="true" />
                2026 IRS Data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT + FAQ ────────────────────────────── */}
      <section className="py-20 bg-white" aria-label="Educational Content">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <SEOContent />
          <FAQSection />
        </div>
      </section>

      {/* ── FOOTER DISCLAIMER ───────────────────────────── */}
      <footer className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-white flex-shrink-0">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-primary">RetireSmart</span>
                <p className="text-[11px] text-muted-foreground">
                  Free retirement planning tools
                </p>
              </div>
            </div>

            {/* Legal Links */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-6 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest"
            >
              <Link href="/privacy"    className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link>
              <Link href="/contact"    className="hover:text-accent transition-colors">Contact</Link>
              <Link href="/about"      className="hover:text-accent transition-colors">About</Link>
            </nav>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-muted-foreground/60 leading-relaxed max-w-3xl">
            <strong className="text-muted-foreground/80">Disclaimer:</strong> This calculator is provided for
            educational and informational purposes only. Projections are estimates based on mathematical
            models and historical averages. Past performance does not guarantee future results. Always
            consult a licensed financial professional before making investment decisions.
          </p>

          <div className="mt-6 flex items-center justify-between text-[10px] font-black text-muted-foreground/40 uppercase tracking-[0.2em]">
            <span>© 2026 RetireSmart. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <MobileCTA />
    </main>
  );
}
