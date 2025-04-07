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
    const inputValue = +newValue;
    
    // Pass the name and parsed value directly
    onChange(name, inputValue);
    
    validateInput(newValue);
  }

  return (
    <div>
      <label htmlFor={name} className={`${isInputValid ? "" : "text-red-800"} block mb-1 text-sm font-mono font-bold uppercase`}> 
        {label}
      </label>
      <input
        className={`${isInputValid ? "border-[#76c0ae] " : "border-red-800 text-red-800"} | w-full p-2 border-2 font-medium rounded-sm bg-transparent text-base text-[#c2e9e0]`}
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
