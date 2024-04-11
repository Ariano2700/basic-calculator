import { ChangeEvent } from "react";
import NumberInputType from "../types/NumberInputTypes";
const NumberInputs = ({ phText, onChange }: { phText: string, onChange:(value: string) => void }) => {
  const inputType: NumberInputType["inputType"] = "text";
  const handleChange=(e: ChangeEvent<HTMLInputElement>) =>{
    onChange(e.target.value)
  }
  return (
    <>
      <input
        type={inputType}
        name={inputType}
        className="inputNumber"
        placeholder={phText}
        onChange={handleChange}
      ></input>
    </>
  );
};
export default NumberInputs;
