import { ChangeEvent } from "react";
import { optionType, forecastType } from "../types";
declare const useForecast: () => {
    term: string;
    options: [];
    forecast: forecastType | null;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onOptionSelect: (option: optionType) => void;
    onSubmit: () => void;
};
export default useForecast;
