import axios from 'axios'

const url = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data) 
}

const getOne = (country) => {
    const request = axios.get(`${url}/${country}`)
    return request.then(response => response.data)
}

export default { getAll, getOne }
