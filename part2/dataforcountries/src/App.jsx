import { useState, useEffect } from 'react'

import Notification from './components/Notification'
import Form from './components/Form'
import CountryBody from './components/CountryBody'

import countriesService from './services/countries'
import weatherService from './services/weather'

function App() {
  const [countriesData, setCountriesData] = useState(null)
  const [filteredCountryData, setfilteredCountryData] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountriesData(response)
      })
  }, [])

  const handleFilterChange = (event) => {
    const eventValue = event.target.value
    const filteredCountriesData = countriesData.filter(countryData => countryData.name.common.toLowerCase().includes(eventValue.toLowerCase()))
    const countriesDataLength = filteredCountriesData.length
    if(countriesDataLength > 10){
      setNotificationMessage("Too many matches, specify another filter")
      setfilteredCountryData(null)
    } else if (countriesDataLength > 1 && countriesDataLength <= 10) {
      setNotificationMessage(null)
      setfilteredCountryData(filteredCountriesData)
    } else if (countriesDataLength === 1) {
      setNotificationMessage(null)
      setfilteredCountryData(filteredCountriesData)
      const capital = filteredCountriesData[0].capital[0]
      weatherService
        .getWeather(capital)
        .then(response => {
          setWeatherData({
            temp: response.temp_c,
            wind: response.wind_kph,
            icon: response.condition.icon
          })
        })
    } else {
      setNotificationMessage("No match found. Try another name")
      setfilteredCountryData(null)
    }
  }

  const handleClick = (country_cca2) => {
    const filteredCountryData = countriesData.filter(countryData => countryData.cca2 === country_cca2)
    setNotificationMessage(null)
    setfilteredCountryData(filteredCountryData)
    const capital = filteredCountryData[0].capital[0]
      weatherService
        .getWeather(capital)
        .then(response => {
          setWeatherData({
            temp: response.temp_c,
            wind: response.wind_kph,
            icon: response.condition.icon
          })
        })
  }

  return (
    <>
      <Form onChange={handleFilterChange} />
      <Notification message={notificationMessage} />
      <CountryBody filteredCountryData={filteredCountryData} onClick={handleClick} weatherData={weatherData} />
    </>
  )
}

export default App
