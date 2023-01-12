import Degree from "./Degree"
import { forecastType } from "../types"
type Props = {
  data: forecastType
}
const MainForecastInfo = ({ data }: Props): JSX.Element => {
  const today = data.list[0]
  return (
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
  )
}

export default MainForecastInfo
