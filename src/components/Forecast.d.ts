/// <reference types="react" />
import { forecastType } from "../types";
declare type Props = {
    data: forecastType;
};
declare const Forecast: ({ data }: Props) => JSX.Element;
export default Forecast;
