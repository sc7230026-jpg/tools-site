"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  Info,
  RefreshCcw,
  Table as TableIcon,
  BarChart3,
  DollarSign,
  Percent,
  Calendar,
} from "lucide-react";
import { BreakdownTable } from "./BreakdownTable";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ─── Labelled Slider ──────────────────────────────────── */
function SliderField({
  label,
  value,
  displayValue,
  min,
  max,
  step,
  onChange,
  tooltip,
}: {
  label: string;
  value: number;
  displayValue: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  tooltip?: string;
}) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">
            {label}
          </label>
          {tooltip && (
            <span title={tooltip} className="cursor-help text-slate-300 hover:text-slate-400 transition-colors">
              <Info className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
        <span className="text-sm font-black text-primary tabular-nums">{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        aria-label={label}
      />
      <div className="flex justify-between text-[10px] font-bold text-muted-foreground/50 tabular-nums">
        <span>{min.toLocaleString()}</span>
        <span>{max.toLocaleString()}</span>
      </div>
    </div>
  );
}

/* ─── Number Input ─────────────────────────────────────── */
function NumberField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
  tooltip,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: React.ReactNode;
  suffix?: string;
  tooltip?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground block">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none">
            {prefix}
          </div>
        )}
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step ?? 1}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            "w-full h-12 rounded-xl border border-slate-200 bg-slate-50 font-bold text-primary text-base",
            "focus:border-accent focus:bg-white focus:outline-none transition-all",
            prefix ? "pl-8 pr-4" : "px-4",
            suffix ? "pr-10" : ""
          )}
          aria-label={label}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground/60 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Stat Card ────────────────────────────────────────── */
function StatCard({
  label,
  value,
  accent,
  sub,
}: {
  label: string;
  value: string;
  accent?: boolean;
  sub?: string;
}) {
  return (
    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className={cn("text-xl font-black tabular-nums", accent ? "text-accent" : "text-primary")}>{value}</p>
      {sub && <p className="text-[11px] text-muted-foreground font-medium">{sub}</p>}
    </div>
  );
}

/* ─── Custom Tooltip ───────────────────────────────────── */
function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null;
  const fmt = (v: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);
  return (
    <div className="bg-white border border-slate-100 rounded-xl shadow-premium p-3 min-w-[160px]">
      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2">Age {label}</p>
      <div className="space-y-1.5">
        <div className="flex justify-between gap-4">
          <span className="text-[11px] font-bold text-slate-500">Balance</span>
          <span className="text-[11px] font-black text-primary">{fmt(payload[0].value)}</span>
        </div>
        {payload[1] && (
          <div className="flex justify-between gap-4">
            <span className="text-[11px] font-bold text-slate-500">Contributions</span>
            <span className="text-[11px] font-black text-accent">{fmt(payload[1].value)}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────── */
export function Calculator() {
  const [currentAge,        setCurrentAge]        = useState(30);
  const [retirementAge,     setRetirementAge]     = useState(65);
  const [currentSavings,    setCurrentSavings]    = useState(25000);
  const [monthlyContrib,    setMonthlyContrib]    = useState(800);
  const [annualSalary,      setAnnualSalary]      = useState(95000);
  const [employerMatch,     setEmployerMatch]     = useState(50);
  const [employerMatchLimit,setEmployerMatchLimit]= useState(6);
  const [expectedReturn,    setExpectedReturn]    = useState(7);
  const [inflationRate,     setInflationRate]     = useState(2.5);
  const [salaryIncrease,    setSalaryIncrease]    = useState(3);
  const [isRoth,            setIsRoth]            = useState(false);
  const [showTable,         setShowTable]         = useState(false);

  const fmt = useCallback(
    (val: number) =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val),
    []
  );

  const results = useMemo(() => {
    const years = Math.max(0, retirementAge - currentAge);
    const data: Array<{ year: number; age: number; balance: number; contributions: number }> = [];
    let balance = currentSavings;
    let totalContributed = currentSavings;
    let salary = annualSalary;

    for (let i = 0; i <= years; i++) {
      const yearEmployeeCont = monthlyContrib * 12;
      const matchLimit       = salary * (employerMatchLimit / 100);
      const yearEmployerCont = Math.min(yearEmployeeCont, matchLimit) * (employerMatch / 100);
      const totalYearCont    = yearEmployeeCont + yearEmployerCont;

      data.push({
        year: i,
        age: currentAge + i,
        balance: Math.round(balance),
        contributions: Math.round(totalContributed),
      });

      balance          += totalYearCont + balance * (expectedReturn / 100);
      totalContributed += totalYearCont;
      salary           *= 1 + salaryIncrease / 100;
    }

    const inflFactor       = Math.pow(1 + inflationRate / 100, years);
    const inflationAdjusted = balance / inflFactor;

    return {
      data,
      total: balance,
      contributed: totalContributed,
      growth: balance - totalContributed,
      inflationAdjusted,
      monthlyIncome: (inflationAdjusted * 0.04) / 12,
    };
  }, [currentAge, retirementAge, currentSavings, monthlyContrib, annualSalary,
      employerMatch, employerMatchLimit, expectedReturn, inflationRate, salaryIncrease]);

  const yearsToRetire = retirementAge - currentAge;

  return (
    <div className="space-y-8" id="calculator-tool">

      {/* Top summary bar */}
      <div className="bg-primary rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">
            Estimated 401(k) Balance at Retirement
          </p>
          <p className="text-4xl font-black text-white tracking-tighter tabular-nums">
            {fmt(results.total)}
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <div className="flex items-center gap-2 text-sm font-bold text-accent">
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            <span>In {yearsToRetire} year{yearsToRetire !== 1 ? "s" : ""} · Age {retirementAge}</span>
          </div>
          <p className="text-xs text-white/40 font-medium">
            {isRoth ? "Roth 401(k) — Tax-Free Withdrawals" : "Traditional 401(k) — Pre-Tax Contributions"}
          </p>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ─── LEFT: Inputs ─── */}
        <aside className="lg:col-span-5 space-y-6" aria-label="Calculator inputs">

          {/* Account type toggle */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-widest text-primary">Account Type</h2>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setIsRoth(false)}
                  className={cn(
                    "px-4 py-1.5 text-xs font-bold rounded-lg transition-all",
                    !isRoth ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"
                  )}
                  aria-pressed={!isRoth}
                >
                  Traditional
                </button>
                <button
                  onClick={() => setIsRoth(true)}
                  className={cn(
                    "px-4 py-1.5 text-xs font-bold rounded-lg transition-all",
                    isRoth ? "bg-accent text-white shadow-sm" : "text-muted-foreground hover:text-primary"
                  )}
                  aria-pressed={isRoth}
                >
                  Roth
                </button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {isRoth
                ? "Roth 401(k): You pay taxes now and enjoy tax-free withdrawals in retirement."
                : "Traditional 401(k): Contributions reduce taxable income today; withdrawals are taxed later."}
            </p>
          </div>

          {/* Personal details */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-soft">
            <h2 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
              Your Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <NumberField label="Current Age"    value={currentAge}      onChange={setCurrentAge}      min={18}  max={80} />
              <NumberField label="Retirement Age" value={retirementAge}   onChange={setRetirementAge}   min={50}  max={90} />
            </div>
            <NumberField
              label="Annual Salary"
              value={annualSalary}
              onChange={setAnnualSalary}
              min={0}
              max={1000000}
              step={1000}
              prefix={<DollarSign className="h-4 w-4" />}
            />
            <SliderField
              label="Current Savings"
              value={currentSavings}
              displayValue={fmt(currentSavings)}
              min={0}
              max={500000}
              step={1000}
              onChange={setCurrentSavings}
              tooltip="Your existing 401(k) balance today"
            />
            <SliderField
              label="Monthly Contribution"
              value={monthlyContrib}
              displayValue={fmt(monthlyContrib)}
              min={0}
              max={5000}
              step={50}
              onChange={setMonthlyContrib}
              tooltip="How much you contribute to your 401(k) each month"
            />
          </div>

          {/* Employer match */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-soft">
            <h2 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-accent" aria-hidden="true" />
              Employer Match
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <NumberField
                label="Match Rate"
                value={employerMatch}
                onChange={setEmployerMatch}
                min={0}
                max={100}
                suffix="%"
                tooltip="Your employer matches this % of your contribution"
              />
              <NumberField
                label="Up to % of Salary"
                value={employerMatchLimit}
                onChange={setEmployerMatchLimit}
                min={0}
                max={20}
                suffix="%"
                tooltip="Match applies up to this % of your salary"
              />
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 text-xs font-bold text-accent">
              ✓ Your employer adds{" "}
              {fmt(
                Math.min(monthlyContrib * 12, annualSalary * (employerMatchLimit / 100)) *
                  (employerMatch / 100)
              )}{" "}
              / year in free matching contributions.
            </div>
          </div>

          {/* Growth assumptions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-soft">
            <h2 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
              <Percent className="h-4 w-4 text-accent" aria-hidden="true" />
              Growth Assumptions
            </h2>
            <SliderField
              label="Expected Annual Return"
              value={expectedReturn}
              displayValue={`${expectedReturn}%`}
              min={1}
              max={15}
              step={0.5}
              onChange={setExpectedReturn}
              tooltip="Historical S&P 500 average: ~7% after inflation"
            />
            <SliderField
              label="Inflation Rate"
              value={inflationRate}
              displayValue={`${inflationRate}%`}
              min={0}
              max={10}
              step={0.5}
              onChange={setInflationRate}
              tooltip="Used to show what your savings are worth in today's dollars"
            />
            <SliderField
              label="Annual Salary Growth"
              value={salaryIncrease}
              displayValue={`${salaryIncrease}%`}
              min={0}
              max={10}
              step={0.5}
              onChange={setSalaryIncrease}
              tooltip="Expected annual salary raise percentage"
            />
          </div>

          {/* Reset */}
          <button
            onClick={() => {
              setCurrentAge(30); setRetirementAge(65); setCurrentSavings(25000);
              setMonthlyContrib(800); setAnnualSalary(95000); setEmployerMatch(50);
              setEmployerMatchLimit(6); setExpectedReturn(7); setInflationRate(2.5);
              setSalaryIncrease(3); setIsRoth(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-xs font-bold text-muted-foreground hover:text-primary hover:border-slate-300 transition-all"
          >
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            Reset to Defaults
          </button>
        </aside>

        {/* ─── RIGHT: Results ─── */}
        <div className="lg:col-span-7 space-y-6">

          {/* Stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard label="Total Balance"      value={fmt(results.total)}           />
            <StatCard label="In Today's Dollars" value={fmt(results.inflationAdjusted)} />
            <StatCard label="Total Contributed"  value={fmt(results.contributed)}     />
            <StatCard label="Compound Growth"    value={fmt(results.growth)}  accent  />
          </div>

          {/* Monthly income highlight */}
          <div className="bg-white rounded-2xl border border-slate-200 px-6 py-5 shadow-soft flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                Estimated Monthly Retirement Income
              </p>
              <p className="text-2xl font-black text-primary tabular-nums">
                {fmt(results.monthlyIncome)}
                <span className="text-sm font-bold text-muted-foreground"> / month</span>
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">
                Based on the 4% safe withdrawal rule, inflation-adjusted
              </p>
            </div>
            <div className="hidden sm:flex w-14 h-14 bg-emerald-50 rounded-2xl items-center justify-center text-accent flex-shrink-0">
              <TrendingUp className="h-7 w-7" aria-hidden="true" />
            </div>
          </div>

          {/* Growth Chart */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-soft">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-black text-primary text-base">Growth Trajectory</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  How your balance compounds from age {currentAge} to {retirementAge}
                </p>
              </div>
              <button
                onClick={() => setShowTable(!showTable)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-bold text-primary"
                title={showTable ? "View chart" : "View year-by-year table"}
              >
                {showTable ? (
                  <><BarChart3 className="h-4 w-4" /> Chart</>
                ) : (
                  <><TableIcon className="h-4 w-4" /> Table</>
                )}
              </button>
            </div>

            {showTable ? (
              <div className="h-[400px] overflow-auto rounded-xl border border-slate-100">
                <BreakdownTable data={results.data} />
              </div>
            ) : (
              <>
                <div className="w-full" style={{ height: 300, minHeight: 300 }}>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={results.data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                      <defs>
                        <linearGradient id="gradBalance" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor="#10B981" stopOpacity={0.18} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}    />
                        </linearGradient>
                        <linearGradient id="gradContrib" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor="#1D4ED8" stopOpacity={0.10} />
                          <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0}    />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis
                        dataKey="age"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 700 }}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 700 }}
                        tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                        width={52}
                      />
                      <Tooltip content={<ChartTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="balance"
                        stroke="#10B981"
                        strokeWidth={2.5}
                        fill="url(#gradBalance)"
                      />
                      <Area
                        type="monotone"
                        dataKey="contributions"
                        stroke="#1D4ED8"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="url(#gradContrib)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                {/* Legend */}
                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <span className="w-3 h-3 rounded-full bg-accent" />
                    Total Balance
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <span className="w-4 h-0.5 bg-finance-blue" style={{ borderTop: "2px dashed #1D4ED8" }} />
                    Total Contributions
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
