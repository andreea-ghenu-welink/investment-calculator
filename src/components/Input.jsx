export default function Input({ name, value, label, minValue, onInputChange }) {
  // Helper function to convert between display and internal values
  function getDisplayValue(value) {
    return value === 0 ? "" : value; // This is what the user sees
  }

  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        className="input"
        id={name}
        type="number"
        min={minValue}
        value={getDisplayValue(value)}
        name={name}
        onChange={onInputChange}
      />
    </div>
  );
}
