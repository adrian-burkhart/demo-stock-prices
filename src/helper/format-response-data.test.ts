import type { z } from "zod"
import { expect } from "@jest/globals"

import type { StocksSchema } from "./fetch-stocks"
import { formatResponseData } from "./format-response-data"

describe("formatResponseData", () => {
  it("should return simpleReturn and maxDrawdown correctly", () => {
    const data: z.infer<typeof StocksSchema> = {
      datatable: {
        data: [[100], [70], [200], [1], [50], [30], [20], [200], [50], [10]],
      },
    }

    const expected = {
      simpleReturn: 900,
      maxDrawdown: 99.5,
      chartData: [
        { x: 0, y: 10 },
        { x: 1, y: 50 },
        { x: 2, y: 200 },
        { x: 3, y: 20 },
        { x: 4, y: 30 },
        { x: 5, y: 50 },
        { x: 6, y: 1 },
        { x: 7, y: 200 },
        { x: 8, y: 70 },
        { x: 9, y: 100 },
      ],
    }

    const actual = formatResponseData(data)

    expect(actual).toEqual(expected)
  })

  it("should return simpleReturn and maxDrawdown correctly when price decreased", () => {
    const data: z.infer<typeof StocksSchema> = {
      datatable: {
        data: [[100], [200]],
      },
    }

    const expected = {
      simpleReturn: -50,
      maxDrawdown: 50,
      chartData: [
        { x: 0, y: 200 },
        { x: 1, y: 100 },
      ],
    }

    const actual = formatResponseData(data)

    expect(actual).toEqual(expected)
  })
})
