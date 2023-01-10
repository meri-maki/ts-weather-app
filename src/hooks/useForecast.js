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
import { useEffect, useState } from "react";
var useForecast = function () {
    var _a = useState(""), term = _a[0], setTerm = _a[1];
    var _b = useState([]), options = _b[0], setOptions = _b[1];
    var _c = useState(null), location = _c[0], setLocation = _c[1];
    var _d = useState(null), forecast = _d[0], setForecast = _d[1];
    var _e = useState(""), error = _e[0], setError = _e[1];
    var getSearchOptions = function (value) {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=".concat(value.trim(), "&limit=8&appid=").concat(import.meta.env.VITE_REACT_APP_API_KEY))
            .then(function (res) { return res.json(); })
            .then(function (data) { return setOptions(data); })
            .catch(function (error) { return setError(error.message); });
    };
    var getForecast = function (location) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(location.lat, "&lon=").concat(location.lon, "&units=metric&lang=en&appid=").concat(import.meta.env.VITE_REACT_APP_API_KEY))
            .then(function (res) { return res.json(); })
            .then(function (data) {
            var forecastData = __assign(__assign({}, data.city), { list: data.list.slice(0, 16) });
            setForecast(forecastData);
        })
            .catch(function (error) { return setError(error.message); });
    };
    var onInputChange = function (e) {
        var value = e.target.value.trim();
        setTerm(value);
        if (value === "")
            return;
        getSearchOptions(value);
    };
    var onOptionSelect = function (option) {
        setLocation(option);
    };
    useEffect(function () {
        if (location) {
            setTerm(location.name + ", " + location.country);
            setOptions([]);
        }
    }, [location]);
    var onSubmit = function () {
        if (!location)
            return;
        else {
            getForecast(location);
        }
    };
    return {
        term: term,
        options: options,
        forecast: forecast,
        onInputChange: onInputChange,
        onOptionSelect: onOptionSelect,
        onSubmit: onSubmit,
    };
};
export default useForecast;
