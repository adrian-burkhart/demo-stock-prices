import Head from "next/head"
import { LayoutUi } from "../ui"
import { StockSearch } from "./stock-search"
import { Title } from "./title"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Stock Prices</title>
        <meta name="description" content="re:cap coding challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutUi>
        <Title />
        <StockSearch />
        {children}
      </LayoutUi>
    </>
  )
}
