import Tile from "./Tile"
import Sunrise from "./icons/Sunrise"
import Sunset from "./icons/Sunset"
import Degree from "./Degree"
import {
  getHumidityValue,
  getPop,
  getPressure,
  getPressureDescription,
  getTime,
  getVisibilityDescription,
  getVisibilityValue,
  getWindDirection,
} from "../helpers/helpers"
import { forecastType } from "../types"

type Props = {
  data: forecastType
}

const WeatherWidgets = ({ data }: Props): JSX.Element => {
  const today = data.list[0]
  return (
    <section className="flex justify-between text-zinc-700 flex-wrap">
      <div className="w-[160px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-2 mb-5 ">
        <Sunrise />
        <span className="mt-1">{getTime(data.sunrise)}</span>
      </div>
      <div className="w-[160px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-2 mb-5 ">
        <Sunset />
        <span className="mt-1">{getTime(data.sunset)}</span>
      </div>
      <Tile
        icon="wind"
        title="Wind"
        info={`${Math.round(today.wind.speed)} km/h`}
        description={`${getWindDirection(
          Math.round(today.wind.deg)
        )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
      />
      <Tile
        icon="feels"
        title="Feels like"
        info={<Degree temp={Math.round(today.main.feels_like)} />}
        description={`Feels ${
          Math.round(today.main.feels_like) > Math.round(today.main.temp)
            ? "warmer"
            : "colder"
        }`}
      />

      <Tile
        icon="humidity"
        title="Humidity"
        info={`${Math.round(today.main.humidity)}%`}
        description={getHumidityValue(Math.round(today.main.humidity))}
      />
      <Tile
        icon="pressure"
        title="Pressure"
        info={getPressure(Math.round(today.main.pressure))}
        description={getPressureDescription(Math.round(today.main.pressure))}
      />
      <Tile
        icon="pop"
        title="Precipitation"
        info={`${Math.round(today.pop)}%`}
        description={`${getPop(Math.round(today.pop))}, clouds at ${
          today.clouds.all
        }%`}
      />
      <Tile
        icon="visibility"
        title="Visibility"
        info={getVisibilityValue(Math.round(today.visibility))}
        description={getVisibilityDescription(Math.round(today.visibility))}
      />
    </section>
  )
}

export default WeatherWidgets
