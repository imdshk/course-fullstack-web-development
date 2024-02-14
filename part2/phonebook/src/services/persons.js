import axios from "axios"

const url = "/api/persons"

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(url, newPerson)
    return request.then(response => response.data)
}

const update = (updatedPerson) => {
    const request = axios.put(`${url}/${updatedPerson.id}`, updatedPerson)
    return request.then(response => response.data)
}

const remove = (idToBeRemoved) => {
    const request = axios.delete(`${url}/${idToBeRemoved}`)
    return request.then(response => response.data)
} 

export default { getAll, create, remove, update }