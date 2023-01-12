import { forecastType } from "../types"
import HourlyForecast from "./HourlyForecast"
import MainForecastInfo from "./MainForecastInfo"
import WeatherWidgets from "./WeatherWidgets"

type Props = {
  data: forecastType
}

const Forecast = ({ data }: Props): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-center md:max-w-[500px] py-4 md:py-4 md:px-6 lg:px-16 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto max-w-[350px] ">
        <MainForecastInfo data={data} />
        <HourlyForecast data={data} />
        <WeatherWidgets data={data} />
      </div>
    </div>
  )
}

export default Forecast
