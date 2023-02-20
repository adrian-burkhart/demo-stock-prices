import type { z } from "zod"
import { calculateMaxDrawdown } from "./calculate-max-drawdown"
import { calculateSimpleReturn } from "./calculate-simple-return"
import type { StocksSchema } from "./fetch-stocks"

export const formatResponseData = (data: z.infer<typeof StocksSchema>) => {
  const stockPrices = [...data.datatable.data.flat().reverse()]

  const startingPrice = stockPrices[0] ?? 0
  const finalPrice = stockPrices[stockPrices.length - 1] ?? 0

  const simpleReturn = calculateSimpleReturn(startingPrice, finalPrice)

  const maxDrawdown = calculateMaxDrawdown(stockPrices)

  const chartData = stockPrices.map((price, index) => ({
    x: index,
    y: price,
  }))

  return {
    maxDrawdown,
    simpleReturn,
    chartData,
  }
}
