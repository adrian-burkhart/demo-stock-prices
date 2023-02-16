export interface StocksProps {
  maxDrawdown: number
  simpleReturn: number
  stockPrices: number[]
}

export const StockData = ({
  maxDrawdown,
  simpleReturn,
  stockPrices,
}: StocksProps) => {
  return (
    <div className="text-white" data-cy="stock-data">
      <p>Maximum Drawdown: {maxDrawdown.toFixed(2)} %</p>
      <p>Simple Return: {simpleReturn.toFixed(2)} %</p>
    </div>
  )
}
