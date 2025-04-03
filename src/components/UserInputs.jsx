import Input from "./Input";

export default function UserInputs({ inputs, onChange }) {  
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          name="initialInvestment"
          label="Initial Investment"
          value={inputs.initialInvestment}
          minValue="0"
          onChange={onChange}
        />
        <Input
          name="annualInvestment"
          label="Annual Investment"
          value={inputs.annualInvestment}
          minValue="0"
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <Input
          name="expectedReturn"
          label="Expected Return"
          value={inputs.expectedReturn}
          minValue="0"
          onChange={onChange}
        />
        <Input
          name="duration"
          label="Duration"
          value={inputs.duration}
          minValue="1"
          onChange={onChange}
        />
      </div>
    </section>
  );
}
