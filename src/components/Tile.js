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
import Feels from "./icons/Feels";
import Wind from "./icons/Wind";
import Humidity from "./icons/Humidity";
import Visibility from "./icons/Visibility";
import Pressure from "./icons/Pressure";
import Pop from "./icons/Pop";
var icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop,
};
var Tile = function (_a) {
    var icon = _a.icon, title = _a.title, info = _a.info, description = _a.description;
    var Icon = icons[icon];
    return (_jsxs("article", __assign({ className: "w-[160px] h-[100px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between" }, { children: [_jsxs("div", __assign({ className: "flex items-center text-sm font-bold" }, { children: [_jsx(Icon, {}), _jsx("h4", __assign({ className: "ml-1" }, { children: title }))] })), _jsx("h3", __assign({ className: "mt-2 text-lg font-extrabold" }, { children: info })), _jsx("p", __assign({ className: "text-xs font-bold" }, { children: description }))] })));
};
export default Tile;
