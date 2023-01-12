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
import { getHour } from "../helpers/helpers";
import Degree from "./Degree";
var HourlyForecast = function (_a) {
    var data = _a.data;
    return (_jsx("section", __assign({ className: "flex overflow-x-scroll mt-4 pb-4 mb-5 scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-zinc-700" }, { children: data.list.map(function (item, i) { return (_jsxs("div", __assign({ className: "inline-block text-center w-[50px] flex-shrink-0" }, { children: [_jsx("p", __assign({ className: "text-sm" }, { children: i === 0 ? "Now" : getHour(item.dt) })), _jsx("img", { className: "", alt: "weather-icon-".concat(item.weather[0].description), src: "https://openweathermap.org/img/wn/".concat(item.weather[0].icon, "@2x.png") }), _jsx("p", __assign({ className: "text-sm font-bold" }, { children: _jsx(Degree, { temp: Math.round(item.main.temp) }) }))] }), i)); }) })));
};
export default HourlyForecast;
