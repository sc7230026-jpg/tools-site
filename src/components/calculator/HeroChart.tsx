"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { age: 30, balance: 25000, cont: 25000 },
  { age: 35, balance: 95000, cont: 75000 },
  { age: 40, balance: 220000, cont: 125000 },
  { age: 45, balance: 410000, cont: 175000 },
  { age: 50, balance: 750000, cont: 225000 },
  { age: 55, balance: 1245000, cont: 275000 }
];

export function HeroChart() {
  return (
    <div className="h-48 w-full mb-8 relative z-10">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorHeroBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.25}/>
              <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip 
            cursor={{ stroke: '#e2e8f0', strokeWidth: 1, strokeDasharray: '4 4' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-premium border border-slate-100 min-w-[120px]">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Age {payload[0].payload.age}</p>
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-xs font-bold text-primary">Balance</span>
                      <span className="text-sm font-black text-accent">${(payload[0].value as number / 1000).toFixed(0)}k</span>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area 
            type="monotone" 
            dataKey="balance" 
            stroke="#10B981" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#colorHeroBalance)" 
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Area 
            type="monotone" 
            dataKey="cont" 
            stroke="#1D4ED8" 
            strokeOpacity={0.3}
            strokeWidth={2} 
            strokeDasharray="4 4"
            fill="transparent" 
            isAnimationActive={true}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
      
      {/* Custom X-axis labels for premium look without Recharts axis bulk */}
      <div className="absolute -bottom-4 left-0 right-0 flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">
        <span>Age 30</span>
        <span>Age 40</span>
        <span>Age 50</span>
        <span className="text-accent">Retirement</span>
      </div>
    </div>
  );
}
