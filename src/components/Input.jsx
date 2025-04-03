import { useState } from "react";

export default function Input({ name, value, label, minValue, onChange }) {
  const [isInputValid, setIsInputValid] = useState(true);
  const [wasCleared, setWasCleared] = useState(false);

  // Helper function to convert between display and internal values
  function getDisplayValue(value) { 
    // If the value is 0 and it wasn't cleared by the user, show 0
    // If the value is 0 and it was cleared by the user, show empty string
    return (value === 0 && !wasCleared) ? 0 : (value === 0 ? "" : value);
  }

  function validateInput(value) {
    setIsInputValid((value >= minValue) || (value === ""));
  }

  function handleChange(e) {
    const newValue = e.target.value;
    // Track if the user is clearing the field
    setWasCleared(newValue === "")

    // Extract and parse the value here
    const inputValue = newValue === "" ? 0 : parseFloat(newValue);
    
    // Pass the name and parsed value directly
    onChange(name, inputValue);
    
    validateInput(newValue);
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
        required
      />
    </div>
  );
}
