import type { Form } from "../components/stock-search"

export const FormUi = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<Form>) => void
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2"
    >
      {children}
    </form>
  )
}
