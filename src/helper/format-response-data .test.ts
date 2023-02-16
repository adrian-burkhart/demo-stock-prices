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
    }

    const actual = formatResponseData(data)

    expect(actual).toEqual(expected)
  })
})
