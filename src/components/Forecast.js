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
import { getHour, getTime } from "../helpers/helpers";
import Sunrise from "./icons/Sunrise";
import Sunset from "./icons/Sunset";
var Degree = function (_a) {
    var temp = _a.temp;
    return (_jsxs("span", { children: [temp, _jsx("sup", { children: "o" })] }));
};
var Forecast = function (_a) {
    var data = _a.data;
    var today = data.list[0];
    return (_jsx("div", __assign({ className: "w-full flex flex-col justify-center md:max-w-[500px] py-4 md:py-4 md:px-6 lg:px-16 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg" }, { children: _jsxs("div", __assign({ className: "mx-auto max-w-[350px] " }, { children: [_jsxs("section", __assign({ className: "text-center" }, { children: [_jsxs("h2", __assign({ className: "text-2xl font-black" }, { children: [data.name, _jsxs("span", __assign({ className: "font-thin" }, { children: [" ", data.country] }))] })), _jsx("h1", __assign({ className: "text-4xl font-extrabold" }, { children: _jsx(Degree, { temp: Math.round(today.main.temp) }) })), _jsxs("p", __assign({ className: "text-sm" }, { children: [today.weather[0].main, ":", "  ", today.weather[0].description] })), _jsxs("p", __assign({ className: "text-sm" }, { children: ["H: ", _jsx(Degree, { temp: Math.ceil(today.main.temp_max) }), "  ", "L:", _jsx(Degree, { temp: Math.floor(today.main.temp_min) })] }))] })), _jsx("section", __assign({ className: "flex overflow-x-scroll mt-4 pb-2 mb-5" }, { children: data.list.map(function (item, i) { return (_jsxs("div", __assign({ className: "inline-block text-center w-[50px] flex-shrink-0" }, { children: [_jsx("p", __assign({ className: "text-sm" }, { children: i === 0 ? "Now" : getHour(item.dt) })), _jsx("img", { className: "", alt: "weather-icon-".concat(item.weather[0].description), src: "http://openweathermap.org/img/wn/".concat(item.weather[0].icon, "@2x.png") }), _jsx("p", __assign({ className: "text-sm font-bold" }, { children: _jsx(Degree, { temp: Math.round(item.main.temp) }) }))] }), i)); }) })), _jsxs("section", __assign({ className: "flex justify-between txt-zinc-700" }, { children: [_jsxs("div", __assign({ className: "w-[160px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5 " }, { children: [_jsx(Sunrise, {}), _jsx("span", { children: getTime(data.sunrise) })] })), _jsxs("div", __assign({ className: "w-[140px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5 " }, { children: [_jsx(Sunset, {}), _jsx("span", { children: getTime(data.sunset) })] }))] }))] })) })));
};
export default Forecast;