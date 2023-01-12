import {
  getHour,
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
import Sunrise from "./icons/Sunrise"
import Sunset from "./icons/Sunset"
import Tile from "./Tile"
type Props = {
  data: forecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
)

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0]
  return (
    <div className="w-full flex flex-col justify-center md:max-w-[500px] py-4 md:py-4 md:px-6 lg:px-16 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto max-w-[350px] ">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name}
            <span className="font-thin"> {data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-sm">
            {today.weather[0].main}:{"  "}
            {today.weather[0].description}
          </p>
          <p className="text-sm">
            H: <Degree temp={Math.ceil(today.main.temp_max)} />
            {"  "}
            L:
            <Degree temp={Math.floor(today.main.temp_min)} />
          </p>
        </section>
        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5 scrollbar-thin scrollbar-track-white scrollbar-thumb-zinc-700">
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
        <section className="flex justify-between txt-zinc-700 flex-wrap">
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
            description={getPressureDescription(
              Math.round(today.main.pressure)
            )}
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
      </div>
    </div>
  )
}

export default Forecast
