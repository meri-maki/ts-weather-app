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
import HourlyForecast from "./HourlyForecast";
import MainForecastInfo from "./MainForecastInfo";
import WeatherWidgets from "./WeatherWidgets";
var Forecast = function (_a) {
    var data = _a.data;
    return (_jsx("div", __assign({ className: "w-full flex flex-col justify-center md:max-w-[500px] py-4 md:py-4 md:px-6 lg:px-16 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg" }, { children: _jsxs("div", __assign({ className: "mx-auto max-w-[350px] " }, { children: [_jsx(MainForecastInfo, { data: data }), _jsx(HourlyForecast, { data: data }), _jsx(WeatherWidgets, { data: data })] })) })));
};
export default Forecast;
