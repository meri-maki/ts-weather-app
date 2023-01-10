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
import { jsx as _jsx } from "react/jsx-runtime";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
var App = function () {
    var _a = useForecast(), term = _a.term, options = _a.options, forecast = _a.forecast, onInputChange = _a.onInputChange, onOptionSelect = _a.onOptionSelect, onSubmit = _a.onSubmit;
    return (_jsx("main", __assign({ className: "flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full" }, { children: forecast ? (_jsx(Forecast, { data: forecast })) : (_jsx(Search, { term: term, options: options, onSubmit: onSubmit, onInputChange: onInputChange, onOptionSelect: onOptionSelect })) })));
};
export default App;
