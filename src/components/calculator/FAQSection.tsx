import React from "react";

const faqs = [
  {
    q: "How much should I put into my 401(k) each month?",
    a: "Start by contributing at least enough to receive your full employer match — that's free money you don't want to leave behind. From there, aim to work toward saving 10%–15% of your gross income. If that feels too much right now, even starting at 3%–5% and increasing by 1% each year will make a meaningful difference over time.",
  },
  {
    q: "What is the 4% rule in retirement planning?",
    a: "The 4% rule is a widely used guideline suggesting that retirees can safely withdraw 4% of their total savings in year one of retirement, then adjust annually for inflation, without running out of money for at least 30 years. For example, a $1,000,000 portfolio would generate roughly $40,000 per year, or about $3,333 per month.",
  },
  {
    q: "Can I contribute to both a 401(k) and a Roth IRA?",
    a: "Yes — and this is a smart strategy for many people. You can max out your 401(k) contributions and also contribute to a Roth IRA (up to $7,000/year in 2026, or $8,000 if you're 50+), as long as your income falls within the Roth IRA limits. This gives you both tax-deferred and tax-free retirement income streams.",
  },
  {
    q: "When can I withdraw from my 401(k) without penalty?",
    a: "You can make penalty-free withdrawals starting at age 59½. Withdrawals before that age are typically subject to a 10% early withdrawal penalty, plus ordinary income taxes on the amount withdrawn. There are limited exceptions, such as certain hardship withdrawals, disability, or separation from service at age 55 or older.",
  },
  {
    q: "What is an employer match and why does it matter?",
    a: "An employer match is when your company contributes to your 401(k) based on what you put in. For example, if your employer offers a 50% match on up to 6% of your salary and you earn $70,000, contributing $4,200/year earns you an extra $2,100 in free contributions. Over a 30-year career, that can add hundreds of thousands to your retirement balance.",
  },
  {
    q: "What happens to my 401(k) if I change jobs?",
    a: "Your vested 401(k) balance belongs to you regardless of where you work. When you leave a job, you can roll the balance into your new employer's 401(k), move it into an IRA, keep it with your old employer (if the balance is above $5,000), or cash it out — though cashing out triggers taxes and a 10% penalty if you're under 59½.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 border-t border-slate-100"
      aria-labelledby="faq-heading"
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <h2
        id="faq-heading"
        className="text-2xl font-black text-primary mb-2 tracking-tight"
      >
        Frequently Asked Questions
      </h2>
      <p className="text-base text-muted-foreground mb-10 max-w-xl">
        Straightforward answers to the most common 401(k) questions — no
        financial jargon, just clear and helpful information.
      </p>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group border border-slate-200 rounded-2xl bg-white overflow-hidden"
          >
            <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer font-bold text-primary list-none hover:bg-slate-50/50 transition-colors">
              <span className="leading-snug">{faq.q}</span>
              <span
                className="flex-shrink-0 mt-0.5 text-muted-foreground group-open:text-accent transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 9 7 7 7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-slate-100 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
