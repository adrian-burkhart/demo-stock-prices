export const DateInputUi = ({
  name,
  defaultDate,
  label,
  maxDate,
  minDate,
}: {
  name: string
  defaultDate: string
  label: string
  maxDate: string
  minDate: string
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-base text-label">
        {label}
      </label>
      <input
        type="date"
        className="icon  
          w-52 appearance-none rounded-lg border border-black bg-input
           px-3 py-2 text-base
           text-white placeholder-label focus:z-10
           focus:border-accent focus:outline-none focus:ring-accent"
        data-cy={name}
        name={name}
        defaultValue={defaultDate}
        max={maxDate}
        min={minDate}
      />
    </div>
  )
}
