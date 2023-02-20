import { useRouter } from "next/router"
import React from "react"
import {
  ButtonUi,
  DateInputUi,
  DisclaimerUi,
  FormUi,
  SelectInputUi,
} from "../ui"

const AVAILABLE_TICKERS = [
  "MMM",
  "AXP",
  "AAPL",
  "BA",
  "CAT",
  "CVX",
  "CSCO",
  "KO",
  "DIS",
  "XOM",
  "GE",
  "GS",
  "HD",
  "IBM",
  "INTC",
  "JNJ",
  "JPM",
  "MCD",
  "MRK",
  "MSFT",
  "NKE",
  "PFE",
  "PG",
  "TRV",
  "UTX",
  "UNH",
  "VZ",
  "V",
  "WMT",
] // In a real app, you'd want to fetch this from an API

interface FormElements extends HTMLFormControlsCollection {
  ticker: HTMLInputElement
  startDate: HTMLInputElement
  endDate: HTMLInputElement
}

export interface Form extends HTMLFormElement {
  readonly elements: FormElements
}

export const StockSearch = () => {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<Form>) => {
    event.preventDefault()
    setLoading(true)

    void router.push(
      `/stocks/?ticker=${event.currentTarget.elements.ticker.value}&startDate=${event.currentTarget.elements.startDate.value}&endDate=${event.currentTarget.elements.endDate.value}`
    )
    setLoading(false)
  }

  return (
    <>
      <DisclaimerUi>
        Only works with dates between 2017-09-01 and 2017-10-31.
      </DisclaimerUi>
      <FormUi onSubmit={handleSubmit}>
        <SelectInputUi
          label={"Ticker"}
          name={"ticker"}
          options={AVAILABLE_TICKERS}
        />

        <DateInputUi
          name="startDate"
          defaultDate={"2017-09-01"}
          label="Start Date"
          minDate={"2017-09-01"}
          maxDate={"2017-10-31"}
        />

        <DateInputUi
          name="endDate"
          defaultDate={"2017-10-31"}
          label="End Date"
          minDate={"2017-09-01"}
          maxDate={"2017-10-31"}
        />

        <ButtonUi loading={loading} type="submit">
          Search
        </ButtonUi>
      </FormUi>
    </>
  )
}
