import { useEffect, useState, ChangeEvent } from "react"
import { optionType, forecastType } from "../types"

const useForecast = () => {
  const [term, setTerm] = useState<string>("")
  const [options, setOptions] = useState<[]>([])
  const [location, setLocation] = useState<optionType | null>(null)
  const [forecast, setForecast] = useState<forecastType | null>(null)
  const [error, setError] = useState<string>("")

  const getSearchOptions = (value: string) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=8&appid=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((error) => setError(error.message))
  }

  const getForecast = (location: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${
        location.lat
      }&lon=${location.lon}&units=metric&lang=en&appid=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        }
        setForecast(forecastData)
      })
      .catch((error) => setError(error.message))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)
    if (value === "") return
    getSearchOptions(value)
  }

  const onOptionSelect = (option: optionType) => {
    setLocation(option)
  }
  useEffect(() => {
    if (location) {
      setTerm(location.name + ", " + location.country)
      setOptions([])
    }
  }, [location])

  const onSubmit = () => {
    if (!location) return
    else {
      getForecast(location)
    }
  }

  return {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  }
}

export default useForecast
