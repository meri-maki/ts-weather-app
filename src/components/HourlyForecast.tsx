import { getHour } from "../helpers/helpers"
import Degree from "./Degree"
import { forecastType } from "../types"

type Props = {
  data: forecastType
}

const HourlyForecast = ({data}: Props): JSX.Element => {
  return (
    <section className="flex overflow-x-scroll mt-4 pb-4 mb-5 scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-zinc-700">
      {data.list.map((item, i) => (
        <div
          className="inline-block text-center w-[50px] flex-shrink-0"
          key={i}
        >
          <p className="text-sm">{i === 0 ? "Now" : getHour(item.dt)}</p>
          <img
            className=""
            alt={`weather-icon-${item.weather[0].description}`}
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
          <p className="text-sm font-bold">
            <Degree temp={Math.round(item.main.temp)} />
          </p>
        </div>
      ))}
    </section>
  )
}

export default HourlyForecast
