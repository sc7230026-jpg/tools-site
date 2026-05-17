import { Metadata } from "next";
import { ShieldCheck, Users, Target, Award, Globe, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us | RetireSmart",
  description: "Learn about our mission to simplify retirement planning and empower individuals to take control of their financial future.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background border-b border-slate-50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/[0.02] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight">
              We're rewriting the rules of <span className="text-accent">financial</span> planning.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our mission is to empower every individual with professional-grade retirement analysis 
              tools that were previously only available to elite investors.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary">The Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2026, RetireSmart was born out of a simple observation: 
                financial independence shouldn't require a degree in finance. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've combined decades of actuarial science with world-class product 
                design to build a platform that is as powerful as it is intuitive.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-1">50k+</div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Active Users</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-1">$2.4B</div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Assets Modeled</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Speed & Precision", desc: "Our engine processes complex market data in milliseconds for instant clarity." },
                  { icon: ShieldCheck, title: "Absolute Privacy", desc: "No data is stored on our servers. Your finances remain your private business." },
                  { icon: Heart, title: "Independent Advice", desc: "We are 100% independent. No hidden agendas, just honest math." },
                  { icon: Globe, title: "Global Perspective", desc: "Built for the global professional navigating the complex US tax system." }
                ].map((item, i) => (
                  <Card key={i} className="border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[1.5rem]">
                    <CardContent className="p-8 space-y-4">
                      <div className="p-3 bg-primary/5 text-primary rounded-xl w-fit">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Principles</h2>
            <p className="text-muted-foreground">The foundation of everything we build.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Transparency First", 
                desc: "We open-source our core calculation logic so you can verify the math yourself." 
              },
              { 
                title: "Human Design", 
                desc: "We believe financial tools should feel elegant and simple, not overwhelming." 
              },
              { 
                title: "Impact Driven", 
                desc: "Every feature we build is designed to move the needle on your retirement readiness." 
              }
            ].map((principle, i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="text-accent font-black text-6xl opacity-10 italic">0{i+1}</div>
                <h3 className="text-xl font-bold text-primary">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
