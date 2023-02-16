export const SelectInputUi = ({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: string[]
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-base text-label">
        {label}
      </label>
      <select
        className="w-full appearance-none rounded-lg border border-black bg-input px-3 py-2 text-base text-white placeholder-label focus:z-10 focus:border-accent focus:outline-none focus:ring-accent"
        name={name}
        data-cy={name}
      >
        {options.sort().map((ticker) => (
          <option key={ticker} value={ticker}>
            {ticker}
          </option>
        ))}
      </select>
    </div>
  )
}
