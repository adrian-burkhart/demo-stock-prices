import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory"

export type AreaChartData = { x: number; y: number }[]

interface AreaChartProps {
  data: AreaChartData
  maxDrawdown: number
  simpleReturn: number
}
export const AreaChartUi = ({
  data,
  maxDrawdown,
  simpleReturn,
}: AreaChartProps) => {
  const highestY = data.reduce((acc, curr) => {
    if (curr.y > acc) {
      return curr.y
    }
    return acc
  }, 0)

  return (
    <div data-cy="stock-data" className="flex flex-col items-center">
      <p className="text-center text-white">
        Maximum Drawdown: {maxDrawdown.toFixed(2)} %
      </p>
      <p className="text-center text-white">
        Simple Return: {simpleReturn.toFixed(2)} %
      </p>

      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#4f38d4" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>
      </svg>
      <VictoryChart
        domain={{ x: [0, data.length - 1], y: [0, highestY + 20] }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `${datum.y.toFixed(2)} €`}
            labelComponent={<VictoryTooltip />}
          />
        }
        style={{}}
      >
        <VictoryArea style={{ data: { fill: "url(#gradient)" } }} data={data} />

        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `${tick} €`}
          style={{
            axis: { stroke: "white" },
            tickLabels: { fontSize: 12, stroke: "white" },
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: "white" },
          }}
          tickLabelComponent={<></>}
        />
      </VictoryChart>
    </div>
  )
}
