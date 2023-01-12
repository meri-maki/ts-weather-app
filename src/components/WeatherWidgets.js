var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tile from "./Tile";
import Sunrise from "./icons/Sunrise";
import Sunset from "./icons/Sunset";
import Degree from "./Degree";
import { getHumidityValue, getPop, getPressure, getPressureDescription, getTime, getVisibilityDescription, getVisibilityValue, getWindDirection, } from "../helpers/helpers";
var WeatherWidgets = function (_a) {
    var data = _a.data;
    var today = data.list[0];
    return (_jsxs("section", __assign({ className: "flex justify-between text-zinc-700 flex-wrap" }, { children: [_jsxs("div", __assign({ className: "w-[160px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-2 mb-5 " }, { children: [_jsx(Sunrise, {}), _jsx("span", __assign({ className: "mt-1" }, { children: getTime(data.sunrise) }))] })), _jsxs("div", __assign({ className: "w-[160px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-2 mb-5 " }, { children: [_jsx(Sunset, {}), _jsx("span", __assign({ className: "mt-1" }, { children: getTime(data.sunset) }))] })), _jsx(Tile, { icon: "wind", title: "Wind", info: "".concat(Math.round(today.wind.speed), " km/h"), description: "".concat(getWindDirection(Math.round(today.wind.deg)), ", gusts ").concat(today.wind.gust.toFixed(1), " km/h") }), _jsx(Tile, { icon: "feels", title: "Feels like", info: _jsx(Degree, { temp: Math.round(today.main.feels_like) }), description: "Feels ".concat(Math.round(today.main.feels_like) > Math.round(today.main.temp)
                    ? "warmer"
                    : "colder") }), _jsx(Tile, { icon: "humidity", title: "Humidity", info: "".concat(Math.round(today.main.humidity), "%"), description: getHumidityValue(Math.round(today.main.humidity)) }), _jsx(Tile, { icon: "pressure", title: "Pressure", info: getPressure(Math.round(today.main.pressure)), description: getPressureDescription(Math.round(today.main.pressure)) }), _jsx(Tile, { icon: "pop", title: "Precipitation", info: "".concat(Math.round(today.pop), "%"), description: "".concat(getPop(Math.round(today.pop)), ", clouds at ").concat(today.clouds.all, "%") }), _jsx(Tile, { icon: "visibility", title: "Visibility", info: getVisibilityValue(Math.round(today.visibility)), description: getVisibilityDescription(Math.round(today.visibility)) })] })));
};
export default WeatherWidgets;
