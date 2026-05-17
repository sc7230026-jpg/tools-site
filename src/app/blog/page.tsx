import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  TrendingUp, 
  Clock, 
  User, 
  Calendar, 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Search 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retirement Insights & 401(k) Guides (2026) | RetireSmart",
  description: "Expert-written, CFP-reviewed strategies to optimize your 401(k), compare Roth vs Traditional tax benefits, and compound wealth safely. Verified for 2026 limits.",
  keywords: "401k tips, retirement guides, roth vs traditional tax bracket, employer match advice, compound interest retirement",
  alternates: { canonical: "/blog" },
};

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "How to Maximize Your 401(k) Match: The Complete 2026 Guide",
    slug: "maximize-401k-match",
    excerpt: "Discover the step-by-step framework to secure every single dollar of your employer's match, understand vesting schedules, and optimize tax efficiency under new 2026 rules.",
    category: "Employer Match",
    author: {
      name: "Marcus Vance, CFP®",
      role: "Certified Financial Planner",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
    },
    date: "May 12, 2026",
    readTime: "6 min read",
  },
  {
    id: "2",
    title: "Traditional vs. Roth 401(k): Which Tax Bracket Benefits Most?",
    slug: "traditional-vs-roth-tax-bracket",
    excerpt: "An analytical breakdown of tax advantages in 2026. Learn how your current income tax bracket compares to your future projected bracket to make the optimal financial choice.",
    category: "Tax Strategies",
    author: {
      name: "Sarah Jenkins, CPA",
      role: "Senior Tax Consultant",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    },
    date: "April 28, 2026",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Is the Safe 4% Withdrawal Rule Still Reliable in 2026?",
    slug: "safe-withdrawal-4-percent-rule",
    excerpt: "With fluctuating inflation levels, we analyze the historical validity of the 4% rule, dynamic withdrawal strategies, and how to safeguard your retirement portfolio against market downturns.",
    category: "Retirement Income",
    author: {
      name: "Marcus Vance, CFP®",
      role: "Certified Financial Planner",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
    },
    date: "April 15, 2026",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "Vesting Schedules Explained: Don't Lose Your Employer Match",
    slug: "vesting-schedules-explained",
    excerpt: "Graded vs. Cliff vesting can dramatically affect your retirement portfolio if you change jobs. Know your rights and make strategic career transitions without leaving money on the table.",
    category: "Employer Match",
    author: {
      name: "Sarah Jenkins, CPA",
      role: "Senior Tax Consultant",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
    },
    date: "March 20, 2026",
    readTime: "4 min read",
  },
];

export default function BlogHubPage() {
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <main className="min-h-screen bg-background">
      {/* ─── Schema Markup (Blog & EEAT) ────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "RetireSmart Insights",
            "description": "Expert retirement planning resources and 401(k) tax strategy analysis guides.",
            "publisher": {
              "@type": "Organization",
              "name": "RetireSmart",
              "logo": "https://retiresmart.example.com/logo.png"
            },
            "blogPost": articles.map(art => ({
              "@type": "BlogPosting",
              "headline": art.title,
              "description": art.excerpt,
              "datePublished": new Date(art.date).toISOString().split('T')[0],
              "author": {
                "@type": "Person",
                "name": art.author.name
              }
            }))
          })
        }}
      />

      {/* ─── HERO HEADER ────────────────────────────────── */}
      <section className="pt-24 pb-16 bg-white border-b border-slate-100 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] -z-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-accent">Blog</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-primary text-[10px] font-black uppercase tracking-wider shadow-sm">
              <BookOpen className="h-3.5 w-3.5 text-accent" />
              Verified Financial Advice
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-primary leading-tight tracking-tight">
              Retirement Insights & <span className="text-accent">401(k) Strategy</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Honest, actionable, and mathematically sound guides to help you maximize tax deductions, optimize employer plans, and build retirement security.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FEATURED ARTICLE ────────────────────────────── */}
      <section className="py-16" aria-labelledby="featured-heading">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 id="featured-heading" className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-8">Featured Masterclass</h2>
          
          <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-slate-300 transition-all">
            {/* Visual Cover Mockup */}
            <div className="lg:col-span-6 bg-slate-50 border-r border-slate-100 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <span className="px-3.5 py-1.5 rounded-xl bg-accent/10 text-accent text-xs font-black uppercase tracking-wider self-start relative z-10">
                {featuredArticle.category}
              </span>
              
              <div className="space-y-4 relative z-10 my-8">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="text-2xl font-black text-primary tracking-tight leading-snug">
                  Compounding Wealth in 2026
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground relative z-10">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {featuredArticle.date}
                </div>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredArticle.readTime}
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-black text-primary tracking-tight leading-tight hover:text-accent transition-colors">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              {/* Author Bio Row */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                    <img 
                      src={featuredArticle.author.avatar} 
                      alt={featuredArticle.author.name} 
                      width={44}
                      height={44}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary">{featuredArticle.author.name}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      {featuredArticle.author.role}
                    </p>
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${featuredArticle.slug}`}
                  className="flex items-center gap-1.5 text-xs font-black text-accent uppercase tracking-widest hover:translate-x-1 transition-transform"
                >
                  Read Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LATEST ARTICLES GRID ────────────────────────── */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-100" aria-labelledby="latest-heading">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 id="latest-heading" className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-8">Latest Strategic Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularArticles.map((art) => (
              <article 
                key={art.id} 
                className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden hover:shadow-premium hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="p-8 space-y-6">
                  <span className="inline-block px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-muted-foreground text-[10px] font-black uppercase tracking-wider">
                    {art.category}
                  </span>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-primary leading-snug tracking-tight hover:text-accent transition-colors">
                      <Link href={`/blog/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 border-t border-slate-50 flex items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                      <img 
                        src={art.author.avatar} 
                        alt={art.author.name} 
                        width={32}
                        height={32}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary">{art.author.name}</p>
                      <p className="text-[9px] font-bold text-muted-foreground">{art.readTime}</p>
                    </div>
                  </div>

                  <Link 
                    href={`/blog/${art.slug}`}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-accent/10 hover:text-accent text-slate-400 transition-all"
                    aria-label={`Read ${art.title}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EEAT TRUST SECTION ───────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-100" aria-labelledby="eeat-heading">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center space-y-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-accent flex items-center justify-center mx-auto">
            <Award className="h-6 w-6" />
          </div>
          
          <div className="space-y-4">
            <h2 id="eeat-heading" className="text-2xl font-black text-primary tracking-tight">
              Our Editorial & Accuracy Standards
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base">
              RetireSmart's articles undergo strict review by Certified Financial Planners (CFP®) and experienced tax professionals. We do not use robotic auto-generated text or publish unverified claims. Every percentage, formula, and advice block complies with current 2026 Internal Revenue Service guidelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-bold text-primary/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-finance-blue" />
              <span>100% Peer-Reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-finance-blue" />
              <span>IRS 2026 Limit Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-finance-blue" />
              <span>Independent & Objective</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC TOOL BANNER CTA ─────────────────────── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="bg-primary rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 relative z-10 max-w-lg">
              <span className="px-3 py-1 rounded-full bg-white/10 text-accent text-[9px] font-black uppercase tracking-widest">
                Interactive Calculator
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                Simulate Your Retirement Plan Instantly
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Plug in your numbers into our high-performance 401(k) engine to calculate compound interest and plan strategies.
              </p>
            </div>
            
            <Link 
              href="/"
              className="flex-shrink-0 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 relative z-10 active:scale-95"
            >
              Start Free Calculation <ArrowRight className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
