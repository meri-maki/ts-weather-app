import Feels from "./icons/Feels"
import Wind from "./icons/Wind"
import Humidity from "./icons/Humidity"
import Visibility from "./icons/Visibility"
import Pressure from "./icons/Pressure"
import Pop from "./icons/Pop"

type Props = {
  icon: "wind" | "feels" | "humidity" | "pop" | "visibility" | "pressure"
  title: string
  info: string | JSX.Element
  description: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  const Icon = icons[icon]
  return (
    <article className="w-[160px] h-[100px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-sm font-bold">
        <Icon />
        <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg font-extrabold">{info}</h3>
      <p className="text-xs font-bold">{description}</p>
    </article>
  )
}

export default Tile
