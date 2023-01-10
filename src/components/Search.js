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
var Search = function (_a) {
    var term = _a.term, options = _a.options, onInputChange = _a.onInputChange, onOptionSelect = _a.onOptionSelect, onSubmit = _a.onSubmit;
    return (_jsxs("section", __assign({ className: "w-full md:max-w-[500px] p-4  flex flex-col text-center items-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700" }, { children: [_jsxs("h1", __assign({ className: "text-4xl font-thin" }, { children: ["Weather ", _jsx("span", __assign({ className: "font-black" }, { children: "Forecast" }))] })), _jsx("p", __assign({ className: "text-sm mt-2" }, { children: "Enter below a place you want to know the weather of and select an option from the dropdown" })), _jsxs("div", __assign({ className: " relative mt-8 md:mt-3 flex flex-row " }, { children: [_jsx("input", { type: "text", value: term, onChange: onInputChange, className: "px-2 py-1 rounded-l-md border-2 border-white" }), _jsx("ul", __assign({ className: "absolute top-9 bg-white ml-1 rounded-b-md" }, { children: options.map(function (option) { return (_jsx("li", { children: _jsxs("button", __assign({ onClick: function () { return onOptionSelect(option); }, className: "text-left text-sm hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer w-full" }, { children: [option.name, ", ", option.country] })) }, option.lat)); }) })), _jsx("button", __assign({ onClick: onSubmit, className: "rounded-r-md border-2 border-zinc-100 text-white hover:border-zinc-500 hover-text-zinc-500  px-2 py-1 cursor-pointer" }, { children: "search" }))] }))] })));
};
export default Search;
