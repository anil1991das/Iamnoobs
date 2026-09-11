export interface GstResult {
  baseAmount: number;
  gstRate: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalAmount: number;
  type: "intra" | "inter";
}

export function calculateGst(amount: number, rate: number, type: "intra" | "inter", inclusive: boolean = false): GstResult {
  const gstRates = [0, 5, 12, 18, 28];
  if (!gstRates.includes(rate)) throw new Error("Invalid GST rate. Use 0, 5, 12, 18, or 28");
  const baseAmount = inclusive ? amount / (1 + rate / 100) : amount;
  const gstAmount = baseAmount * rate / 100;
  return {
    baseAmount: Math.round(baseAmount * 100) / 100,
    gstRate: rate,
    cgst: type === "intra" ? Math.round(gstAmount / 2 * 100) / 100 : 0,
    sgst: type === "intra" ? Math.round(gstAmount / 2 * 100) / 100 : 0,
    igst: type === "inter" ? Math.round(gstAmount * 100) / 100 : 0,
    totalAmount: Math.round((baseAmount + gstAmount) * 100) / 100,
    type,
  };
}

export interface IncomeTaxResult {
  regime: "old" | "new";
  taxableIncome: number;
  tax: number;
  cess: number;
  totalTax: number;
  effectiveRate: number;
  slabs: { range: string; rate: number; tax: number }[];
}

export function calculateIncomeTax(income: number, regime: "old" | "new", deductions: number = 0): IncomeTaxResult {
  const slabs: { range: string; rate: number; tax: number }[] = [];
  let taxableIncome = regime === "old" ? Math.max(0, income - deductions) : income;
  let tax = 0;

  if (regime === "new") {
    // FY 2024-25 New Regime
    const brackets = [
      { limit: 300000, rate: 0 }, { limit: 700000, rate: 5 }, { limit: 1000000, rate: 10 },
      { limit: 1200000, rate: 15 }, { limit: 1500000, rate: 20 }, { limit: Infinity, rate: 30 },
    ];
    let prev = 0;
    for (const bracket of brackets) {
      const slab = Math.max(0, Math.min(taxableIncome, bracket.limit) - prev);
      const slabTax = slab * bracket.rate / 100;
      if (slab > 0) slabs.push({ range: `₹${prev.toLocaleString("en-IN")} - ₹${bracket.limit === Infinity ? "Above" : bracket.limit.toLocaleString("en-IN")}`, rate: bracket.rate, tax: Math.round(slabTax) });
      tax += slabTax;
      prev = bracket.limit;
      if (prev >= taxableIncome) break;
    }
    // Rebate u/s 87A for income up to 7L
    if (taxableIncome <= 700000) tax = 0;
  } else {
    // Old Regime
    const brackets = [
      { limit: 250000, rate: 0 }, { limit: 500000, rate: 5 }, { limit: 1000000, rate: 20 }, { limit: Infinity, rate: 30 },
    ];
    let prev = 0;
    for (const bracket of brackets) {
      const slab = Math.max(0, Math.min(taxableIncome, bracket.limit) - prev);
      const slabTax = slab * bracket.rate / 100;
      if (slab > 0) slabs.push({ range: `₹${prev.toLocaleString("en-IN")} - ₹${bracket.limit === Infinity ? "Above" : bracket.limit.toLocaleString("en-IN")}`, rate: bracket.rate, tax: Math.round(slabTax) });
      tax += slabTax;
      prev = bracket.limit;
      if (prev >= taxableIncome) break;
    }
    if (taxableIncome <= 500000) tax = 0; // Rebate
  }

  const cess = Math.round(tax * 0.04);
  const totalTax = Math.round(tax + cess);

  return {
    regime, taxableIncome, tax: Math.round(tax), cess, totalTax,
    effectiveRate: income > 0 ? Math.round(totalTax / income * 10000) / 100 : 0,
    slabs,
  };
}

export interface SipResult {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
  monthlyInvestment: number;
  years: number;
  rate: number;
}

export function calculateSip(monthlyAmount: number, years: number, expectedReturnRate: number): SipResult {
  const monthlyRate = expectedReturnRate / 12 / 100;
  const months = years * 12;
  const totalValue = monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const invested = monthlyAmount * months;
  return {
    investedAmount: Math.round(invested),
    estimatedReturns: Math.round(totalValue - invested),
    totalValue: Math.round(totalValue),
    monthlyInvestment: monthlyAmount,
    years, rate: expectedReturnRate,
  };
}

export interface LoanEligibility {
  maxLoanAmount: number;
  maxEmi: number;
  monthlyIncome: number;
  existingEmi: number;
  availableEmi: number;
  interestRate: number;
  tenure: number;
}

export function calculateLoanEligibility(monthlyIncome: number, existingEmi: number, interestRate: number, tenureYears: number, maxFoirPercent: number = 50): LoanEligibility {
  const maxEmi = (monthlyIncome * maxFoirPercent / 100) - existingEmi;
  const availableEmi = Math.max(0, maxEmi);
  const r = interestRate / 12 / 100;
  const n = tenureYears * 12;
  const maxLoan = availableEmi > 0 ? availableEmi * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n))) : 0;
  return {
    maxLoanAmount: Math.round(maxLoan),
    maxEmi: Math.round(availableEmi),
    monthlyIncome, existingEmi, availableEmi: Math.round(availableEmi),
    interestRate, tenure: tenureYears,
  };
}

export function calculateProfitMargin(revenue: number, cost: number): { grossProfit: number; grossMargin: number; markup: number } {
  const grossProfit = revenue - cost;
  return {
    grossProfit: Math.round(grossProfit * 100) / 100,
    grossMargin: revenue > 0 ? Math.round(grossProfit / revenue * 10000) / 100 : 0,
    markup: cost > 0 ? Math.round(grossProfit / cost * 10000) / 100 : 0,
  };
}

export function calculateBreakEven(fixedCosts: number, pricePerUnit: number, variableCostPerUnit: number): { units: number; revenue: number; contributionMargin: number } {
  const contributionMargin = pricePerUnit - variableCostPerUnit;
  if (contributionMargin <= 0) throw new Error("Price must be greater than variable cost");
  const units = Math.ceil(fixedCosts / contributionMargin);
  return { units, revenue: Math.round(units * pricePerUnit * 100) / 100, contributionMargin: Math.round(contributionMargin * 100) / 100 };
}

export interface SalaryBreakup {
  ctc: number;
  basic: number;
  hra: number;
  specialAllowance: number;
  employerPf: number;
  employeePf: number;
  professionalTax: number;
  grossSalary: number;
  totalDeductions: number;
  netSalary: number;
  monthlyInHand: number;
}

export function calculateSalary(ctc: number): SalaryBreakup {
  const basic = ctc * 0.4;
  const hra = basic * 0.5;
  const employerPf = Math.min(basic * 0.12, 21600);
  const inHandCTC = ctc - employerPf;
  const specialAllowance = Math.max(0, inHandCTC - basic - hra);
  const employeePf = Math.min(basic * 0.12, 21600);
  const professionalTax = 2400; // Standard PT
  const grossSalary = basic + hra + specialAllowance;
  const totalDeductions = employeePf + professionalTax;
  const netSalary = grossSalary - totalDeductions;

  return {
    ctc, basic: Math.round(basic), hra: Math.round(hra),
    specialAllowance: Math.round(specialAllowance),
    employerPf: Math.round(employerPf), employeePf: Math.round(employeePf),
    professionalTax, grossSalary: Math.round(grossSalary),
    totalDeductions: Math.round(totalDeductions), netSalary: Math.round(netSalary),
    monthlyInHand: Math.round(netSalary / 12),
  };
}

export function calculateFreelanceRate(annualExpenses: number, annualSavingsGoal: number, billableHoursPerWeek: number, weeksOff: number = 4): { hourlyRate: number; dailyRate: number; monthlyTarget: number } {
  const workingWeeks = 52 - weeksOff;
  const totalNeeded = annualExpenses + annualSavingsGoal;
  const withTaxBuffer = totalNeeded * 1.3; // 30% tax buffer
  const hourlyRate = withTaxBuffer / (billableHoursPerWeek * workingWeeks);
  return {
    hourlyRate: Math.round(hourlyRate * 100) / 100,
    dailyRate: Math.round(hourlyRate * 8 * 100) / 100,
    monthlyTarget: Math.round(withTaxBuffer / 12),
  };
}

export function calculateSavingsGoal(goalAmount: number, currentSavings: number, months: number, annualReturn: number = 0): { monthlyRequired: number; totalContributions: number; interestEarned: number } {
  const remaining = goalAmount - currentSavings;
  if (annualReturn <= 0) {
    return { monthlyRequired: Math.round(remaining / months * 100) / 100, totalContributions: Math.round(remaining * 100) / 100, interestEarned: 0 };
  }
  const monthlyRate = annualReturn / 12 / 100;
  const fvFactor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
  const growthOnCurrent = currentSavings * Math.pow(1 + monthlyRate, months);
  const neededFromContributions = goalAmount - growthOnCurrent;
  const monthly = neededFromContributions / fvFactor;
  const totalContributions = monthly * months;
  return {
    monthlyRequired: Math.round(Math.max(0, monthly) * 100) / 100,
    totalContributions: Math.round(Math.max(0, totalContributions) * 100) / 100,
    interestEarned: Math.round(Math.max(0, goalAmount - totalContributions - currentSavings) * 100) / 100,
  };
}
