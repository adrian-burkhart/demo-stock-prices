import type { Form } from "../components/stock-search"

export const FormUi = ({
  action,
  children,
  onSubmit,
}: {
  action: string
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<Form>) => void
}) => {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className="grid grid-cols-2 items-center justify-center gap-4"
    >
      {children}
    </form>
  )
}
