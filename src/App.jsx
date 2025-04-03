import { useState } from "react";
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

  function handleChange(name, value) {
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
        <UserInputs inputs={userInput} onChange={handleChange} />
        <ResultTable inputs={userInput} />
      </main>
    </>
  ); 
}

export default App;
