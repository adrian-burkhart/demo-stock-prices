import { AreaChartData, AreaChartUi } from "../ui"

export interface StocksProps {
  chartData: AreaChartData
  maxDrawdown: number
  simpleReturn: number
}

export const StockData = ({
  chartData,
  maxDrawdown,
  simpleReturn,
}: StocksProps) => {
  return (
    <AreaChartUi
      data={chartData}
      maxDrawdown={maxDrawdown}
      simpleReturn={simpleReturn}
    />
  )
}
