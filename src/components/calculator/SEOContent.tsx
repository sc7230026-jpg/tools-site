import React from "react";

export function SEOContent() {
  return (
    <article className="space-y-16 py-16">

      {/* ── What is a 401(k) ─────────────────────────────── */}
      <section id="what-is-401k" aria-labelledby="what-is-401k-heading">
        <h2
          id="what-is-401k-heading"
          className="text-2xl font-black text-primary mb-4 tracking-tight"
        >
          What Is a 401(k)?
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          A 401(k) is a workplace retirement savings account that lets you set
          aside part of your paycheck before taxes are taken out. Your money
          grows tax-deferred, meaning you only pay taxes when you withdraw funds
          in retirement — giving compound interest decades to work in your favor.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Named after Section 401(k) of the U.S. Internal Revenue Code,
          established in 1978, it remains one of the most powerful retirement
          savings tools available to American workers. For 2026, the IRS allows
          employees to contribute up to <strong className="text-primary">$23,500</strong> per
          year, with a <strong className="text-primary">$7,500 catch-up contribution</strong>{" "}
          for those aged 50 and older.
        </p>
      </section>

      {/* ── How a 401(k) Works ───────────────────────────── */}
      <section id="how-401k-works" aria-labelledby="how-401k-heading">
        <h2
          id="how-401k-heading"
          className="text-2xl font-black text-primary mb-4 tracking-tight"
        >
          How Does a 401(k) Work?
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          When you enroll, you choose how much of your paycheck goes into the
          account automatically. Your employer may match a portion of your
          contribution — effectively giving you free money. Your balance is then
          invested in a selection of funds (stocks, bonds, target-date funds)
          and grows over time.
        </p>

        {/* Roth vs Traditional Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden my-8">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/60">
            <h3 className="font-black text-primary text-base">
              Roth vs. Traditional 401(k) — Side-by-Side Comparison
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-6 py-3 font-bold text-muted-foreground w-1/3">Feature</th>
                  <th className="px-6 py-3 font-bold text-primary w-1/3">Traditional 401(k)</th>
                  <th className="px-6 py-3 font-bold text-accent w-1/3">Roth 401(k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Tax on Contributions", "Pre-tax (lower taxable income now)", "After-tax (you pay taxes today)"],
                  ["Tax on Withdrawals",   "Taxed as ordinary income",           "100% tax-free"],
                  ["Best For",             "Expect lower taxes in retirement",   "Expect higher taxes in retirement"],
                  ["Required Withdrawals", "RMDs begin at age 73",               "No RMDs during owner's lifetime"],
                  ["2026 Contribution Limit","$23,500 ($31,000 age 50+)",        "$23,500 ($31,000 age 50+)"],
                ].map(([feature, traditional, roth]) => (
                  <tr key={feature} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary text-sm">{feature}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{traditional}</td>
                    <td className="px-6 py-4 text-muted-foreground text-sm">{roth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Employer Match ───────────────────────────────── */}
      <section id="employer-match" aria-labelledby="match-heading">
        <h2
          id="match-heading"
          className="text-2xl font-black text-primary mb-4 tracking-tight"
        >
          Employer Match: The Most Powerful Retirement Benefit
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-5">
          An employer match is when your company contributes money to your 401(k)
          based on how much you put in. A common structure is a{" "}
          <strong className="text-primary">50% match on up to 6% of your salary</strong> — meaning
          if you earn $80,000 and contribute $4,800/year (6%), your employer adds
          another $2,400 for free.
        </p>
        <blockquote className="border-l-4 border-accent bg-emerald-50 px-6 py-5 rounded-r-xl">
          <p className="text-base font-semibold text-primary leading-relaxed italic">
            "Always contribute at least enough to capture your full employer
            match. It's an instant 50–100% return on your money — nothing else
            in the market guarantees that."
          </p>
          <cite className="block mt-3 text-xs font-bold text-muted-foreground not-italic uppercase tracking-widest">
            — Standard Financial Planning Advice
          </cite>
        </blockquote>
      </section>

      {/* ── 2026 Contribution Limits ─────────────────────── */}
      <section id="contribution-limits" aria-labelledby="limits-heading">
        <h2
          id="limits-heading"
          className="text-2xl font-black text-primary mb-4 tracking-tight"
        >
          2026 401(k) Contribution Limits (IRS Verified)
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          The IRS updates contribution limits annually to keep pace with
          inflation. Here are the official 2026 limits:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Under Age 50",       amount: "$23,500",  note: "Employee elective deferrals" },
            { label: "Age 50+ Catch-Up",   amount: "$31,000",  note: "Includes $7,500 catch-up" },
            { label: "Total with Employer", amount: "$70,000",  note: "Combined employer + employee" },
          ].map(({ label, amount, note }) => (
            <div
              key={label}
              className="bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-1"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</p>
              <p className="text-2xl font-black text-accent tabular-nums">{amount}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Retirement Tips ──────────────────────────────── */}
      <section id="retirement-tips" aria-labelledby="tips-heading">
        <h2
          id="tips-heading"
          className="text-2xl font-black text-primary mb-6 tracking-tight"
        >
          4 Proven 401(k) Strategies That Actually Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              step: "01",
              title: "Capture the Full Employer Match First",
              desc: "Before anything else, contribute enough to get every dollar of your employer's match. This is the single best guaranteed return available to any investor.",
            },
            {
              step: "02",
              title: "Increase Contributions With Every Raise",
              desc: "When you get a salary bump, automatically bump your contribution by 1–2%. You won't miss what you never received, but your future self will thank you.",
            },
            {
              step: "03",
              title: "Choose Low-Cost Index Funds",
              desc: "A fund charging 1% vs 0.05% in fees can cost you $150,000+ over 30 years. Look for broad-market index funds inside your 401(k) plan options.",
            },
            {
              step: "04",
              title: "Rebalance Once a Year",
              desc: "Markets drift. Set a calendar reminder each January to recheck your asset allocation and rebalance back to your target — it takes under 15 minutes.",
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-4"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent/10 text-accent text-xs font-black flex items-center justify-center">
                {step}
              </span>
              <div>
                <h3 className="font-bold text-primary mb-2 text-sm leading-snug">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
