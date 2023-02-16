import { z } from "zod"
import { env } from "../env.mjs"
import type { fetchSchema } from "../pages/stocks"

export const StocksSchema = z.object({
  datatable: z.object({
    data: z.array(z.array(z.number()).max(1).nonempty()).min(2).nonempty(),
  }),
})

export const fetchStocks = async ({
  ticker,
  startDate,
  endDate,
}: z.infer<typeof fetchSchema>) => {
  const url = `${env.NASDAQ_API_URL}?api_key=${env.NASDAQ_API_KEY}&ticker=${ticker}&date.gte=${startDate}&date.lte=${endDate}&qopts.columns=adj_close`

  const parsedData = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return StocksSchema.parse(data)
    })
    .catch((err) => {
      console.log(err)
      throw new Error("Invalid ticker or dates")
    })
  return parsedData
}
