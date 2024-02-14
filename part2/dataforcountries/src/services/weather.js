import axios from 'axios'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY
const baseUrl = "http://api.weatherapi.com/v1"
const urlCurrentCondition = baseUrl + "/current.json"

const getWeather = (city) => {
    const request = axios.get(urlCurrentCondition, {
        params: {
            q: city,
            key: apiKey,
            aqi: "no"
        }
    })
    return request.then(response => 
        response.data.current
    ) 
}

// const getWeather = (city) => {
//     const request = axios.get(`${urlCurrentCondition}/${city}`)
//     return request.then(response => response.data) 
// }

export default { getWeather }
