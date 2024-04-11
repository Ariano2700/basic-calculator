import { handleDividir, handleFactorial, handleMultiplicar, handleRestar, handleSumar } from "./HandleOperations";

export const handleClick = (
  operation: string,
  num1: number,
  num2: number
): number | string | null => {
  switch (operation) {
    case "Sumar":
      return handleSumar({ a: num1 }, { b: num2 });
    case "Restar":
      return handleRestar({ a: num1 }, { b: num2 });
    case "Multiplicar":
      return handleMultiplicar({ a: num1 }, { b: num2 });
    case "Dividir":
      return handleDividir({ a: num1 }, { b: num2 });
    case "Factorial":
      const { factorialA, factorialB } = handleFactorial(num1, num2);
      return `Factorial del primer número: ${factorialA}, Factorial del segundo número: ${factorialB}`;
    default:
      return null;
  }
};
