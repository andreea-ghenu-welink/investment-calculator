import Input from "./Input";

export default function UserInputs({ inputs, onChange }) {  
  return (
    <section className="flex flex-col gap-y-4 px-4 py-6 max-w-[30rem] mx-auto my-8 rounded-md bg-gradient-to-b from-[#307e6c] to-[#2b996d]">
      <div className="flex justify-evenly gap-x-4">
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
      <div className="flex justify-evenly gap-x-4">
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
