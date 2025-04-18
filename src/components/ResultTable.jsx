import { calculateInvestmentResults, formatter } from "../util/investment";

function areAllInputsFilled(inputs) {
  return inputs.every(input => input !== "");
}

function areAllInputsValid(inputs) {
  return inputs.every(input => !isNaN(input) && input >= 0);
}

export default function ResultTable({inputs}) {
  // Check if all inputs are filled
  const allInputsFilled = areAllInputsFilled(Object.values(inputs));
  
  // Check if all inputs are valid (only if they're all filled)
  const allInputsValid = areAllInputsValid(Object.values(inputs));
  
  // Specific check for duration input
  const isDurationValid = (!isNaN(inputs.duration) && inputs.duration > 0) || inputs.duration === "";
  
  // Only calculate when inputs are valid
  const investmentResult = allInputsFilled && allInputsValid
    ? calculateInvestmentResults(inputs)
    : [];

  const resultList = investmentResult.map((result, index) => (
    <tr key={index}>
      {Object.entries(result).map(([name, value]) => (
        <td key={name}>{name === "year" ? value : formatter.format(value)}</td>
      ))}
    </tr>
  ));

  const generalErrorMessage = <p className="text-center font-semibold text-red-500">Invalid input! Please enter a positive number.</p>;
  const durationErrorMessage = <p className="text-center font-semibold text-red-500">Invalid duration! Duration must be greater than zero.</p>;

  return (
    <section className="result-section">
      {!allInputsValid && !isDurationValid && durationErrorMessage}
      {!allInputsValid && isDurationValid && generalErrorMessage}
      {allInputsValid && (
        <table id="result" className="table-fixed border-separate border-spacing-4 max-w-[50rem] mx-auto mt-12 mb-8 p-4 text-right">
          <thead className="text-[#83e6c0] mb-8">
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[#c2e9e0]">{resultList}</tbody>
        </table>)}
    </section>
  );
}
