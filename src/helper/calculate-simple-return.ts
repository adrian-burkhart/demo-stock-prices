export const calculateSimpleReturn = (
  startingPrice: number,
  finalPrice: number
): number => {
  return ((finalPrice - startingPrice) / startingPrice) * 100
}
