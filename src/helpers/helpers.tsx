export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return "NE"

  if (deg > 76 && deg <= 105) return "E"
  if (deg > 105 && deg <= 165) return "SE"

  if (deg > 166 && deg <= 195) return "S"
  if (deg > 195 && deg <= 255) return "SW"

  if (deg > 255 && deg <= 285) return "W"
  if (deg > 285 && deg <= 345) return "NW"

  return "N"
}

export const getHumidityValue = (level: number): string => {
  if (level <= 55) return "Dry and comfortable"
  if (level > 55 && level <= 65) return "A bit uncomfortable, sticky feeling"

  return "Lots of moisture, uncomfortable air"
}

export const getVisibilityDescription = (number: number): string => {
  if (number <= 50) return "Dangerously foggy"
  if (number > 50 && number <= 500) return "Expect heavy fog"
  if (number > 500 && number <= 2000) return "Expect some fog"
  if (number > 2000 && number <= 9000) return "Expect some haze"

  return "Very clear day"
}

export const getVisibilityValue = (value: number): string => {
  if (value < 1000) return `${value} m`
  if (value >= 1000) return `${value / 1000} km`
  else return "No data"
}

export const getTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

export const getHour = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()

  if (hours.length <= 1) hours = `0${hours}`

  return `${hours}`
}

export const getPop = (value: number): string => {
  if (value <= 0.33) return "Low probability"
  if (value > 0.33 && value <= 0.66) return "Moderate probability"

  return "High probability"
}

export const getPressure = (value: number): string =>
  `${Math.round(value * 0.75006156)} mm Hg`

export const getPressureDescription = (value: number): string => {
  if (value === 1013) {
    return "Normal atmospheric pressure"
  }
  if (value > 1013 && value < 1025) {
    return "Slightly high atmospheric pressure"
  }

  if (value >= 1025) {
    return "High atmospheric pressure"
  }
  if (value < 1013 && value > 1000) {
    return "Slightly low atmospheric pressure"
  }
  if (value <= 1000) {
    return "Low atmospheric pressure"
  } else {
    return "No atmospheric pressure description"
  }
}
