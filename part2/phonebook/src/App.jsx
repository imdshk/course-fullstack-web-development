import { useState, useEffect } from 'react'
import axios from 'axios'

import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import personService from './services/persons'
import persons from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, []) 

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const eventValue = event.target.value
    setFilteredName(eventValue)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const isNameInPersons = persons.find(({name}) => name === newName)
    if(newName === "" || newNumber === ""){
      alert("name or number is empty")
      return
    }
    
    if(typeof(isNameInPersons) !== "undefined"){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const isNumberInPersons = persons.find(({number}) => number === newNumber)
    if(typeof(isNumberInPersons) !== "undefined"){
      alert(`${newNumber} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      }) 
  }

  const deletePerson = (person) => {
    if(window.confirm(`Are you sure you want to delete ${person.name}?`)){
      personService
        .remove(person.id)
        .then(response => {
          console.log("person deleted")
          const personsAfterDelete = persons.filter(person => person.id !== response.id)
          setPersons(personsAfterDelete)
        })
        .catch(error => {
          console.log(`Person with ${person.id} is not found or already deleted from the phonebook.`)
        })
    }
  }

  const peopleToShow = (filteredName) !== ""
    ? persons.filter(person => person.name.toLowerCase().includes(filteredName.toLowerCase()))
    : persons

  return (
    <div>
      <h1>Phonebook</h1>
      filter shown with <input onChange={handleFilterChange}/>
      <h2>Add a new person</h2>
      <AddPersonForm 
        onSubmit={addPerson} 
        name={newName} 
        number={newNumber} 
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <PersonsList persons={peopleToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
