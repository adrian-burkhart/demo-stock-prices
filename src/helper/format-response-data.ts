import type { z } from "zod"
import { calculateMaxDrawdown } from "./calculate-max-drawdown"
import { calculateSimpleReturn } from "./calculate-simple-return"
import type { StocksSchema } from "./fetch-stocks"

export const formatResponseData = (data: z.infer<typeof StocksSchema>) => {
  const stockPrices = data.datatable.data.flat().reverse()

  const [startingPrice = 0, ...middlePrices] = stockPrices
  const finalPrice = middlePrices.pop() ?? 0

  const simpleReturn = calculateSimpleReturn(startingPrice, finalPrice)

  const maxDrawdown = calculateMaxDrawdown(stockPrices)

  return {
    maxDrawdown,
    simpleReturn,
    stockPrices,
  }
}
