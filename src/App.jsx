import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
import UserInputs from "./components/UserInputs";
import ResultTable from "./components/ResultTable";

const USER_INPUT = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

function App() {
  const [userInput, setUserInput] = useState(USER_INPUT);

  // Validate all inputs before calculating
  const inputIsValid =
    userInput.initialInvestment !== "" &&
    !isNaN(userInput.initialInvestment) &&
    userInput.initialInvestment >= 0 &&
    userInput.annualInvestment !== "" &&
    !isNaN(userInput.annualInvestment) &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn !== "" &&
    !isNaN(userInput.expectedReturn) &&
    userInput.expectedReturn >= 0 &&
    userInput.duration !== "" &&
    !isNaN(userInput.duration) &&
    userInput.duration > 0;

  // Only calculate when inputs are valid
  const investmentResult = inputIsValid
    ? calculateInvestmentResults(userInput)
    : [];

  function handleInputChange(name, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: value,
      };
    });
  }

  return (
    <>
      <main>
        <UserInputs
          initialUserInput={USER_INPUT}
          onInputValueChange={handleInputChange}
        />
        <ResultTable
          inputIsValid={inputIsValid}
          investmentResult={investmentResult}
          formatter={formatter}
        />
      </main>
    </>
  );
}

export default App;
