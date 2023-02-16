export const ButtonUi = ({
  children,
  type,
}: {
  children: React.ReactNode
  type: "submit"
}) => {
  return (
    <button
      className="self-end rounded-lg bg-accent py-3 px-8 text-base text-white  focus:border-accent focus:ring-2 focus:ring-accent"
      data-cy={type}
      type={type}
    >
      {children}
    </button>
  )
}
