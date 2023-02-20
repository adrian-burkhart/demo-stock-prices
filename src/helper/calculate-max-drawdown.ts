export const calculateMaxDrawdown = (stockPrices: number[]): number => {
  let maxDrawdown = 0
  stockPrices.forEach((buyPrice, index) => {
    stockPrices.slice(index + 1).forEach((salePrice) => {
      const drawdown = (salePrice - buyPrice) / buyPrice
      maxDrawdown = Math.min(maxDrawdown, drawdown)
    })
  })

  return maxDrawdown * -100
}
