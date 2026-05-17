import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RetireSmart",
  description: "Learn how we protect your data and maintain your privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-primary mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg font-medium text-primary italic">Last Updated: May 7, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p>
              At RetireSmart, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our retirement calculator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
            <p>
              We do not store the personal financial data you enter into our calculators on our servers. The calculations are performed locally in your browser. If you subscribe to our newsletter, we collect your email address.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our website.</li>
              <li>Send you newsletters and educational content if you've subscribed.</li>
              <li>Analyze how users interact with our site to improve the user experience.</li>
              <li>Respond to your comments and questions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at privacy@retiresmart.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
