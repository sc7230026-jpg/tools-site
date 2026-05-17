"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export function Newsletter({ 
  title = "Stay ahead of the curve.", 
  description = "Join 50,000+ professionals who receive our weekly insights on retirement planning.",
  variant = "default" 
}) {
  return (
    <Card className={variant === "primary" ? "bg-primary text-white border-none overflow-hidden relative rounded-[3rem]" : "border border-slate-100 shadow-sm rounded-3xl"}>
      <CardContent className="p-8 md:p-16 relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
        <div className="lg:w-1/2 space-y-4">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-black uppercase tracking-[0.2em] mb-2">
            <Mail className="h-4 w-4" /> Editorial
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          <p className={variant === "primary" ? "text-slate-300 text-lg" : "text-muted-foreground text-lg"}>{description}</p>
        </div>
        <div className="lg:w-1/2 w-full max-w-md">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="name@company.com"
              className={variant === "primary" ? "h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl focus-visible:ring-white/20" : "h-14 rounded-xl"}
            />
            <Button 
              variant={variant === "primary" ? "secondary" : "default"} 
              size="lg" 
              className="h-14 px-8 font-bold rounded-xl"
            >
              Subscribe
            </Button>
          </form>
          <p className={variant === "primary" ? "mt-4 text-[11px] text-white/40 italic" : "mt-4 text-[11px] text-muted-foreground/60 italic"}>
            * We value your privacy. No spam, ever. Unsubscribe with one click.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
