export const calculateMaxDrawdown = (stockPrices: number[]): number => {
  const cumulativeMax = stockPrices.reduce(
    (max, price) => Math.max(max, price),
    Number.MIN_VALUE
  )
  const drawdowns = stockPrices.map(
    (price) => (price - cumulativeMax) / cumulativeMax
  )
  const maxDrawdown =
    Math.abs(
      drawdowns.reduce(
        (max, drawdown) => Math.min(max, drawdown),
        Number.MAX_VALUE
      )
    ) * 100
  return maxDrawdown
}
