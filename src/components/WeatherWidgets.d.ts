import { forecastType } from "../types";
type Props = {
    data: forecastType;
};
declare const WeatherWidgets: ({ data }: Props) => JSX.Element;
export default WeatherWidgets;
