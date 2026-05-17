"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <Label htmlFor="first-name" className="text-xs font-black uppercase tracking-widest text-primary/60">First Name</Label>
          <Input id="first-name" placeholder="John" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:border-slate-200 transition-all rounded-xl" />
        </div>
        <div className="space-y-3">
          <Label htmlFor="last-name" className="text-xs font-black uppercase tracking-widest text-primary/60">Last Name</Label>
          <Input id="last-name" placeholder="Smith" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:border-slate-200 transition-all rounded-xl" />
        </div>
      </div>
      <div className="space-y-3">
        <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-primary/60">Email Address</Label>
        <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:border-slate-200 transition-all rounded-xl" />
      </div>
      <div className="space-y-3">
        <Label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-primary/60">Subject</Label>
        <Input id="subject" placeholder="Partnership Inquiry" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:border-slate-200 transition-all rounded-xl" />
      </div>
      <div className="space-y-3">
        <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-primary/60">Message</Label>
        <textarea 
          id="message" 
          className="flex min-h-[160px] w-full rounded-xl border-transparent bg-slate-50 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/5 focus:bg-white focus:border-slate-200 transition-all disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us more about your inquiry..."
        ></textarea>
      </div>
      <Button className="w-full h-14 text-base font-black uppercase tracking-widest rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/10 group" size="lg">
        Send Inquiry <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Button>
    </form>
  );
}
