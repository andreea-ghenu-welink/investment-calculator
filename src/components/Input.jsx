import { useState } from "react";

export default function Input({ name, value, label, minValue, onInputChange }) {
  const [isInputValid, setIsInputValid] = useState(true);

  // Helper function to convert between display and internal values
  function getDisplayValue(value) {
    return value === 0 ? "" : value; // This is what the user sees
  }

  function validateInput(value) {
    setIsInputValid((value >= minValue) || (value === ""));
  }

  function handleChange(e) {
    onInputChange(e);
    validateInput(e.target.value);
  }

  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        className={`input ${isInputValid ? "" : "invalid-input"}`}
        id={name}
        type="number"
        min={minValue}
        value={getDisplayValue(value)}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
