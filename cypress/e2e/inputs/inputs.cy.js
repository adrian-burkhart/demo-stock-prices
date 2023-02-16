/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("displays two inputs and one select", () => {
    cy.get("input").should("have.length", 2)
    cy.get("select").should("have.length", 1)
  })

  it("can look up and display stock data", () => {
    const ticker = "DIS"
    cy.get("[data-cy=ticker]").select(`${ticker}`)
    cy.get("[data-cy=startDate]").type("2017-10-30")
    cy.get("[data-cy=endDate]").type("2017-10-31")
    cy.get("[data-cy=submit]").click()
    cy.get("[data-cy=stock-data]").should("contain", "Maximum Drawdown: 0.23 %")
    cy.get("[data-cy=stock-data]").should("contain", "Simple Return: -0.23 %")
  })
})
