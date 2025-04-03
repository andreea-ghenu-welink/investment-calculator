import { useState } from "react";
import Input from "./Input";

export default function UserInputs({ initialUserInput, onInputValueChange }) {
  const [inputValues, setInputValues] = useState(initialUserInput);

  function handleChange(e) {
    const inputName = e.target.getAttribute("name");
    const displayValue = e.target.value; // What the user sees
    const calculationValue = displayValue === "" ? 0 : parseFloat(displayValue);

    // Update local component state (for display)
    setInputValues((prevInputValues) => {
      return { ...prevInputValues, [inputName]: displayValue };
    });

    // Only pass numeric value when there's actually a value
    onInputValueChange(inputName, calculationValue);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          name="initialInvestment"
          label="Initial Investment"
          value={inputValues.initialInvestment}
          minValue="0"
          onInputChange={handleChange}
        />
        <Input
          name="annualInvestment"
          label="Annual Investment"
          value={inputValues.annualInvestment}
          minValue="0"
          onInputChange={handleChange}
        />
      </div>
      <div className="input-group">
        <Input
          name="expectedReturn"
          label="Expected Return"
          value={inputValues.expectedReturn}
          minValue="0"
          onInputChange={handleChange}
        />
        <Input
          name="duration"
          label="Duration"
          value={inputValues.duration}
          minValue="1"
          onInputChange={handleChange}
        />
      </div>
    </div>
  );
}
