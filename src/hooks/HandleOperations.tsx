export const handleSumar = ({ a }: { a: number }, { b }: { b: number }) => {
  const result = a + b;
  return result;
};
export const handleRestar = ({ a }: { a: number }, { b }: { b: number }) => {
  const result = a - b;
  return result;
};
export const handleMultiplicar = (
  { a }: { a: number },
  { b }: { b: number }
) => {
  const result = a * b;
  return result;
};
export const handleDividir = ({ a }: { a: number }, { b }: { b: number }) => {
  const result = a / b;
  return result;
};
//SACAR FACTORIAL DE LOS NUMEROS
const factorial = (n: number):number => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result
};
export const handleFactorial = (
  a: number,
  b: number
): { factorialA: number; factorialB: number } => {
  const factorialA = factorial(a);
  const factorialB = factorial(b);
  return { factorialA, factorialB };
};
