import { useState } from "react";
import Button from "./components/Button";
import NumberInputs from "./components/NumberInputs";
import { handleClick } from "./hooks/HandleClick";

const App = () => {
  const [respuesta, setRespuesta] = useState<number | string | null>(null);
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  const handleNum1Change = (value:string) => {
    const parsedValue = parseInt(value)
    if(!isNaN(parsedValue)){
      setNum1(parsedValue);
    }
  }
  const handleNum2Change = (value:string) => {
    const parsedValue = parseInt(value)
    if(!isNaN(parsedValue)){
      setNum2(parsedValue);
    }
  }
  const HandleOperationClick = (operation: string) =>{
    const result = handleClick(operation, num1, num2);
    setRespuesta(result)
  }
  return (
    <>
      <div className="grid place-content-center min-h-screen bg-[#212121]">
        <div className="text-white text-xl flex mb-7 justify-center">
          <span>Semana 3 - Calculadora</span>
        </div>
        <section className="flex flex-col gap-[50px] mb-10 justify-center items-center">
          <NumberInputs key={1} phText="Primer numero" onChange={handleNum1Change} />
          <NumberInputs key={2} phText="Segundo numero" onChange={handleNum2Change}/>
        </section>
        <section className="flex gap-3">
        <Button btnText="Sumar" onClick={() => HandleOperationClick('Sumar')} />
          <Button btnText="Restar" onClick={() => HandleOperationClick('Restar')} />
          <Button btnText="Multiplicar" onClick={() => HandleOperationClick('Multiplicar')} />
          <Button btnText="Dividir" onClick={() => HandleOperationClick('Dividir')} />
          <Button btnText="Factorial" onClick={() => HandleOperationClick('Factorial')} />
        </section>
        <section className="mt-4 flex justify-center items-center">{respuesta && <span className="text-white text-4xl">{respuesta}</span>}</section>
      </div>
    </>
  );
};

export default App;
