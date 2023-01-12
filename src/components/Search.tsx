import { ChangeEvent } from "react"
import { optionType } from "../types"

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <section className="w-full md:max-w-[500px] p-4  flex flex-col text-center items-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>
      <p className="text-sm mt-2">
        Enter below a place you want to know the weather of and select an option
        from the dropdown
      </p>
      <div className=" relative mt-8 md:mt-3 flex flex-row ">
        <input
          type="text"
          value={term}
          onChange={onInputChange}
          className="px-2 py-1 rounded-l-md border-2 border-white outline-1"
        />
        <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
          {options.map((option: optionType) => (
            <li key={option.lat}>
              <button
                onClick={() => onOptionSelect(option)}
                className="text-left text-sm hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer w-full"
              >
                {option.name}, {option.country}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onSubmit}
          className="rounded-r-md border-2 border-zinc-100 text-white hover:border-zinc-500 hover-text-zinc-500  px-2 py-1 cursor-pointer"
        >
          search
        </button>
      </div>
    </section>
  )
}

export default Search
