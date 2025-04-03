export default function ResultTable({
  inputIsValid,
  investmentResult,
  formatter,
}) {
  const resultList = investmentResult.map((result, index) => (
    <tr key={index}>
      {Object.entries(result).map(([name, value]) => (
        <td key={name}>{name === "year" ? value : formatter.format(value)}</td>
      ))}
    </tr>
  ));

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{inputIsValid && resultList}</tbody>
    </table>
  );
}
