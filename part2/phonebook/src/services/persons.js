import axios from "axios"

const url = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(url, newPerson)
    return request.then(response => response.data)
}

const remove = (idToBeRemoved) => {
    const request = axios.delete(`${url}/${idToBeRemoved}`)
    console.log(request)
    return request.then(response => response.data)
} 

export default { getAll, create, remove }