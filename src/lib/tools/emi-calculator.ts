export interface EmiResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  schedule: EmiRow[];
}

export interface EmiRow {
  month: number;
  emi: number;
  principal: number;
  interest: number;
  balance: number;
}

export function calculateEmi(principal: number, annualRate: number, tenureMonths: number): EmiResult {
  if (principal <= 0) throw new Error("Principal must be positive");
  if (tenureMonths <= 0) throw new Error("Tenure must be positive");

  if (annualRate === 0) {
    const emi = principal / tenureMonths;
    const schedule: EmiRow[] = [];
    for (let i = 1; i <= tenureMonths; i++) {
      schedule.push({ month: i, emi, principal: emi, interest: 0, balance: principal - emi * i });
    }
    return { emi, totalPayment: principal, totalInterest: 0, schedule };
  }

  const monthlyRate = annualRate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  let balance = principal;
  const schedule: EmiRow[] = [];
  let totalInterest = 0;

  for (let i = 1; i <= tenureMonths; i++) {
    const interest = balance * monthlyRate;
    const principalPart = emi - interest;
    balance -= principalPart;
    totalInterest += interest;
    schedule.push({
      month: i,
      emi: Math.round(emi * 100) / 100,
      principal: Math.round(principalPart * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      balance: Math.max(0, Math.round(balance * 100) / 100),
    });
  }

  return {
    emi: Math.round(emi * 100) / 100,
    totalPayment: Math.round((emi * tenureMonths) * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    schedule,
  };
}
