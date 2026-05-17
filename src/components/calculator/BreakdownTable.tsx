"use client";

import React from "react";

interface YearlyData {
  year: number;
  age: number;
  balance: number;
  contributions: number;
}

export function BreakdownTable({ data }: { data: YearlyData[] }) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 font-bold text-primary">Year</th>
              <th className="px-6 py-4 font-bold text-primary">Age</th>
              <th className="px-6 py-4 font-bold text-primary text-right">Contributions</th>
              <th className="px-6 py-4 font-bold text-primary text-right">Total Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr key={row.year} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-muted-foreground font-medium">{row.year}</td>
                <td className="px-6 py-4 text-primary font-bold">{row.age}</td>
                <td className="px-6 py-4 text-right text-accent font-bold">{formatCurrency(row.contributions)}</td>
                <td className="px-6 py-4 text-right text-primary font-black">{formatCurrency(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
