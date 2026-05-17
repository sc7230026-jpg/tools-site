"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => {
          const el = document.getElementById('calculator');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="w-full h-14 bg-accent text-white font-bold rounded-2xl shadow-2xl shadow-accent/40 flex items-center justify-center gap-2 transition-transform active:scale-95"
      >
        <TrendingUp className="h-5 w-5" /> Calculate Your Future
      </button>
    </div>
  );
}
