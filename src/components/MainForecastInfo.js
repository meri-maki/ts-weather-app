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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Degree from "./Degree";
var MainForecastInfo = function (_a) {
    var data = _a.data;
    var today = data.list[0];
    return (_jsxs("section", __assign({ className: "text-center" }, { children: [_jsxs("h2", __assign({ className: "text-2xl font-black" }, { children: [data.name, _jsxs("span", __assign({ className: "font-thin" }, { children: [" ", data.country] }))] })), _jsx("h1", __assign({ className: "text-4xl font-extrabold" }, { children: _jsx(Degree, { temp: Math.round(today.main.temp) }) })), _jsxs("p", __assign({ className: "text-sm" }, { children: [today.weather[0].main, ":", "  ", today.weather[0].description] })), _jsxs("p", __assign({ className: "text-sm" }, { children: ["H: ", _jsx(Degree, { temp: Math.ceil(today.main.temp_max) }), "  ", "L:", _jsx(Degree, { temp: Math.floor(today.main.temp_min) })] }))] })));
};
export default MainForecastInfo;
