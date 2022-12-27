export const calculateConversionResult = (
  currency_from_rate: number,
  currency_to_rate: number,
  amount: string
) => {
  // converting values from USD base to new currency Base
  const new_from_rate = 1 / currency_from_rate;
  const new_to_rate = 1 / currency_to_rate;

  const convertedValue = ((new_from_rate / new_to_rate) * Number(amount)).toFixed(2);

  return convertedValue;
};
