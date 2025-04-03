// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  // Convert string inputs to numbers for calculation
  const initial = parseFloat(initialInvestment);
  const annual = parseFloat(annualInvestment);
  const returnRate = parseFloat(expectedReturn);
  const years = parseInt(duration);

  const annualData = [];
  let investmentValue = initial;
  let totalInvestedCapital = initial;
  let totalInterest = 0;

  for (let i = 0; i < years; i++) {
    const interestEarnedInYear = investmentValue * (returnRate / 100);
    totalInterest += interestEarnedInYear;
    investmentValue += interestEarnedInYear + annual;
    totalInvestedCapital = initial + annual * (i + 1);

    annualData.push({
      year: i + 1,
      valueEndOfYear: investmentValue,
      interest: interestEarnedInYear,
      totalInterest: totalInterest,
      investedCapital: totalInvestedCapital,
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
