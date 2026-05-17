import { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Disclaimer | RetireSmart",
  description: "Important financial disclosure and disclaimer information regarding our calculators and content.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12 flex items-start gap-6">
          <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-amber-900 mb-2">Financial Disclaimer</h1>
            <p className="text-amber-800 text-lg">
              Please read this disclaimer carefully before using our website or tools.
            </p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground bg-white p-10 rounded-2xl shadow-sm border">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">1. Not Financial Advice</h2>
            <p>
              The information provided on RetireSmart, including but not limited to text, graphics, images, and tools, is for informational and educational purposes only. It is not intended as, and shall not be understood or construed as, financial advice.
            </p>
            <p className="mt-4">
              We are not financial advisors, and the information contained on this website is not a substitute for financial advice from a professional who is aware of the facts and circumstances of your individual situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">2. Projections and Estimates</h2>
            <p>
              The 401(k) calculator and other tools on this site provide estimates based on the information you provide and general financial assumptions. These projections are hypothetical and do not guarantee future results.
            </p>
            <p className="mt-4">
              Actual investment returns, inflation, and tax rates will vary over time, which will significantly impact the final outcome of your retirement savings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">3. Accuracy of Information</h2>
            <p>
              While we strive to ensure that the information on this website is accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b pb-2">4. User Responsibility</h2>
            <p>
              You are responsible for your own financial decisions. You should always consult with a qualified financial, legal, or tax professional before making any significant financial decisions.
            </p>
          </section>

          <div className="p-6 bg-slate-50 rounded-xl border italic text-sm">
            By using this website, you agree to hold RetireSmart harmless from any and all liability or loss that you or any person or entity associated with you may suffer or incur as a result of use of the information contained on this website and/or the resources you may download from this website.
          </div>
        </div>
      </div>
    </div>
  );
}
