"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator as CalcIcon, 
  DollarSign, 
  Truck, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Info
} from "lucide-react";

const KES_PER_USD = 132; // Currency conversion rate baseline

export default function CalculatorPage() {
  // Input States
  const [fobPriceUsd, setFobPriceUsd] = useState<number>(2850); // Default: Posho Mill
  const [shippingType, setShippingType] = useState<"LCL" | "FCL20">("LCL");
  const [destination, setDestination] = useState<"migori" | "kisumu" | "nairobi" | "kampala">("migori");
  
  // Business ROI States
  const [dailyOutputBags, setDailyOutputBags] = useState<number>(30); // 90kg bags per day
  const [millingFeePerBag, setMillingFeePerBag] = useState<number>(350); // KES fee charged per bag
  const [operatingDaysPerMonth, setOperatingDaysPerMonth] = useState<number>(24);

  // Freight & Duty Cost Calculations
  const shippingCostUsd = shippingType === "LCL" ? 380 : 2200;
  
  // Port clearing & import duties estimation (approx 20% on CIF)
  const cifUsd = fobPriceUsd + shippingCostUsd;
  const estimatedDutyVatUsd = Math.round(cifUsd * 0.18);

  // Inland transport to town (in KES)
  const inlandTransportMap = {
    migori: 45000,
    kisumu: 35000,
    nairobi: 20000,
    kampala: 65000,
  };
  const inlandTransportKes = inlandTransportMap[destination];

  // Total Landed Cost
  const totalLandedCostUsd = cifUsd + estimatedDutyVatUsd + Math.round(inlandTransportKes / KES_PER_USD);
  const totalLandedCostKes = Math.round(totalLandedCostUsd * KES_PER_USD);

  // ROI Calculations
  const grossMonthlyRevenueKes = dailyOutputBags * millingFeePerBag * operatingDaysPerMonth;
  // Estimated operating cost (Power/Fuel + Labor + Maintenance ~ 40%)
  const estimatedMonthlyOpexKes = Math.round(grossMonthlyRevenueKes * 0.40);
  const netMonthlyProfitKes = grossMonthlyRevenueKes - estimatedMonthlyOpexKes;
  
  // Payback period in months
  const paybackPeriodMonths = netMonthlyProfitKes > 0 
    ? (totalLandedCostKes / netMonthlyProfitKes).toFixed(1)
    : "N/A";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
            Interactive Business Tool
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl flex items-center gap-3">
            <CalcIcon className="h-8 w-8 text-emerald-500" />
            Landed Cost & Processing ROI Calculator
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Calculate your total import costs delivered directly to your regional hub in East Africa, and project your monthly processing profits and equipment payback period.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Inputs Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Equipment & Freight Options */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="text-base font-bold text-zinc-100 flex items-center gap-2 mb-4">
                <Truck className="h-5 w-5 text-emerald-500" />
                1. Machine & Freight Specification
              </h2>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Factory FOB Machine Price (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                    <input
                      type="number"
                      value={fobPriceUsd}
                      onChange={(e) => setFobPriceUsd(Number(e.target.value) || 0)}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 pl-9 pr-4 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-zinc-500">
                    Baseline Posho Mill ~$2,850 | Grain Dryer ~$6,400 | Oil Press ~$1,950
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">
                      Ocean Freight Option
                    </label>
                    <select
                      value={shippingType}
                      onChange={(e) => setShippingType(e.target.value as any)}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="LCL">Shared Container (LCL) - ~$380</option>
                      <option value="FCL20">Full 20ft Container (FCL) - ~$2,200</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">
                      Final Destination Town
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value as any)}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="migori">Migori / Homa Bay (KES 45,000 transit)</option>
                      <option value="kisumu">Kisumu / Eldoret (KES 35,000 transit)</option>
                      <option value="nairobi">Nairobi / Nakuru (KES 20,000 transit)</option>
                      <option value="kampala">Kampala, Uganda (KES 65,000 transit)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Processing & Revenue Projections */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h2 className="text-base font-bold text-zinc-100 flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                2. Processing Volume & Margin Projections
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Daily Output (90kg Bags)
                  </label>
                  <input
                    type="number"
                    value={dailyOutputBags}
                    onChange={(e) => setDailyOutputBags(Number(e.target.value) || 0)}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Milling Charge (KES / Bag)
                  </label>
                  <input
                    type="number"
                    value={millingFeePerBag}
                    onChange={(e) => setMillingFeePerBag(Number(e.target.value) || 0)}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1">
                    Operating Days / Month
                  </label>
                  <input
                    type="number"
                    value={operatingDaysPerMonth}
                    onChange={(e) => setOperatingDaysPerMonth(Number(e.target.value) || 0)}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Results Summary Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Total Cost Breakdown Card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4">
                Estimated Landed Breakdown
              </h2>

              <div className="space-y-3 text-xs border-b border-zinc-800 pb-4">
                <div className="flex justify-between text-zinc-300">
                  <span>Factory FOB Price:</span>
                  <span className="font-semibold">${fobPriceUsd.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Sea Freight ({shippingType}):</span>
                  <span className="font-semibold">${shippingCostUsd.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Est. Duty, VAT & Port Fees:</span>
                  <span className="font-semibold">${estimatedDutyVatUsd.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Inland Transit ({destination.toUpperCase()}):</span>
                  <span className="font-semibold">KES {inlandTransportKes.toLocaleString()}</span>
                </div>
              </div>

              {/* Total Landed Cost Highlight */}
              <div className="mt-4 pt-2">
                <span className="text-xs text-zinc-400 font-medium">Total Landed Cost</span>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-emerald-400">
                    KES {totalLandedCostKes.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-400 font-bold">
                    (~${totalLandedCostUsd.toLocaleString()} USD)
                  </span>
                </div>
              </div>
            </div>

            {/* Projected ROI Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Return on Investment (ROI)
              </h2>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-zinc-300">
                  <span>Gross Monthly Processing:</span>
                  <span className="font-bold text-zinc-100">KES {grossMonthlyRevenueKes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Est. OpEx (Power/Labor ~40%):</span>
                  <span className="text-zinc-400">- KES {estimatedMonthlyOpexKes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-zinc-200 border-t border-zinc-800/80 pt-2 font-semibold">
                  <span>Net Monthly Profit:</span>
                  <span className="text-emerald-400 font-bold">KES {netMonthlyProfitKes.toLocaleString()}</span>
                </div>
              </div>

              {/* Payback period indicator */}
              <div className="mt-6 rounded-xl bg-zinc-950/80 p-4 border border-zinc-800 text-center">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Estimated Equipment Payback
                </span>
                <p className="mt-1 text-3xl font-extrabold text-emerald-400">
                  {paybackPeriodMonths} <span className="text-sm font-normal text-zinc-300">Months</span>
                </p>
                <p className="mt-1 text-[10px] text-zinc-500">
                  Based on continuous operation of {operatingDaysPerMonth} days/month.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-emerald-500"
                >
                  Request Official Written Proforma
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

            <div className="flex items-start gap-2.5 text-[11px] text-zinc-500 p-2">
              <Info className="h-4 w-4 shrink-0 text-zinc-400" />
              <span>
                Note: Duty rate estimates are subject to KEBS / KRA / URA import tariffs at the time of entry. Official proforma invoices will reflect exact live clearing figures.
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}