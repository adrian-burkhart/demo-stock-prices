export const ButtonUi = ({
  children,
  loading,
  type,
}: {
  children: React.ReactNode
  loading?: boolean
  type: "submit"
}) => {
  console.log(loading)
  return (
    <button
      className="self-end rounded-lg bg-accent py-3 px-8 text-base text-white  focus:border-accent focus:ring-2 focus:ring-accent"
      data-cy={type}
      type={type}
    >
      {loading && <span>Loading...</span>}
      {children}
    </button>
  )
}
