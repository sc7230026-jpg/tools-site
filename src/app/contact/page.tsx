import { Metadata } from "next";
import { Mail, Phone, MapPin, Globe, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | RetireSmart",
  description: "Have questions about retirement planning? Get in touch with our team of experts.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary">Get in touch.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're a first-time saver or a seasoned investor, our team 
                is here to help you navigate your retirement journey.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-end text-sm font-bold text-primary/40 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Response time: &lt; 2 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em]">Contact Channels</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-slate-50 rounded-lg text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">Support</div>
                        <div className="text-sm text-muted-foreground">support@retiresmart.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-slate-50 rounded-lg text-primary">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">Media & Press</div>
                        <div className="text-sm text-muted-foreground">press@retiresmart.com</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-slate-50 rounded-lg text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">Phone</div>
                        <div className="text-sm text-muted-foreground">+1 (800) 555-0199</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em]">Global Headquarters</h3>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-slate-50 rounded-lg text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary">Financial District</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        120 Wall Street, 24th Floor<br />
                        New York, NY 10005
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-[2rem] space-y-4">
                <h4 className="text-lg font-bold text-primary">Institutional Inquiries</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Looking to integrate our calculator into your firm's advisory platform? 
                  Reach out to our partnership team.
                </p>
                <div className="pt-2 text-accent font-black text-sm uppercase tracking-widest cursor-pointer hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Learn about API <Globe className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold tracking-tight text-primary mb-2">Send an inquiry</h2>
                  <p className="text-muted-foreground font-medium">Please provide your details and we'll connect you with the right specialist.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
