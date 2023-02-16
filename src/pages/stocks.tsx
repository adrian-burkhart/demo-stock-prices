import { type NextPage } from "next"
import { z } from "zod"
import { StockData } from "../components/stock-data"
import type { StocksProps } from "../components/stock-data"

import { fetchStocks } from "../helper/fetch-stocks"
import { formatResponseData } from "../helper/format-response-data"

export const fetchSchema = z.object({
  ticker: z.string(),
  startDate: z.string(),
  endDate: z.string(),
})

const Stocks: NextPage<StocksProps> = (props) => {
  return (
    <>
      <StockData {...props} />
    </>
  )
}

export async function getServerSideProps({
  query,
}: {
  query: { stock: string; startDate: string; endDate: string }
}) {
  const parsedQuery = fetchSchema.parse(query)
  const { ticker, startDate, endDate } = parsedQuery

  const fetchedStockData = await fetchStocks(parsedQuery)

  const formattedStockData = formatResponseData(fetchedStockData)

  return {
    props: {
      ticker,
      startDate,
      endDate,
      ...formattedStockData,
    },
  }
}

export default Stocks
