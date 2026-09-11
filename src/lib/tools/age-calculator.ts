export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  nextBirthday: string;
  daysUntilBirthday: number;
  dayOfBirth: string;
}

export function calculateAge(birthDate: string): AgeResult {
  const birth = new Date(birthDate);
  const today = new Date();

  if (birth > today) throw new Error("Birth date cannot be in the future");
  if (isNaN(birth.getTime())) throw new Error("Invalid date");

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = years * 12 + months;

  const nextBirthdayYear = today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate())
    ? today.getFullYear() + 1
    : today.getFullYear();

  const nextBday = new Date(nextBirthdayYear, birth.getMonth(), birth.getDate());
  const daysUntilBirthday = Math.ceil((nextBday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const dayOfBirth = birth.toLocaleDateString("en-US", { weekday: "long" });

  return {
    years, months, days, totalDays, totalWeeks, totalMonths,
    nextBirthday: nextBday.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    daysUntilBirthday,
    dayOfBirth,
  };
}
