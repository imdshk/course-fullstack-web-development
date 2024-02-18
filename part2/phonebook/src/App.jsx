import { useState, useEffect } from 'react'

import AddPersonForm from './components/AddPersonForm'
import PersonsList from './components/PersonsList'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState([null, null])

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
      .catch(error => {
        setNotificationMessage([
          error.response.data.error,
          "bad"
        ])
        setTimeout(() => {
          setNotificationMessage([null, null])
        }, 5000)
      })
  }, []) 

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilteredName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(newName === "" || newNumber === ""){
      alert("name or number is empty")
      return
    }

    const personNameExists = persons.find(({name}) => name.toLowerCase() === newName.toLowerCase())
    const personNumberExists = persons.find(({number}) => number === newNumber)
    const existingPeople = Object.assign({}, personNameExists)
    // Check if person's name exists
    if(personNameExists !== undefined){
      // Check if person's number exists
      if(personNumberExists === undefined){
        // Confirm with user to update number
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          existingPeople.number = newNumber
          personService
            .update(existingPeople)
            .then(response => {
              const updatedPersons = persons.filter(person => person.id !== existingPeople.id)
              setPersons(updatedPersons.concat(response))
              setNewName('')
              setNewNumber('')
              setNotificationMessage([
                `Updated ${response.name}'s number to ${response.number}`,
                "good"
              ])
              setTimeout(() => {
                setNotificationMessage([null, null])
              }, 5000)
            })
            .catch(error => {
              setNotificationMessage([
                error.response.data.error,
                "bad"
              ])
              setTimeout(() => {
                setNotificationMessage([null, null])
              }, 5000)
            })
        }
      } else {a
        const isNumberInPersons = persons.find(({number}) => number === newNumber)
        if(typeof(isNumberInPersons) !== "undefined"){
          alert(`${newName} with number ${newNumber} is already added to phonebook`)
          return
        }
      }
    } else {
      // Check if person's number exists
      if(typeof(personNumberExists) !== "undefined"){
        alert(`${newNumber} is already added to phonebook`)
        return
      }

      const personObject = {
        name: newName,
        number: newNumber
      }

      // Add person
      personService
        .create(personObject)
        .then(response => {
          const existingPersons = persons
          const updatedPersons = existingPersons.concat(response)
          setPersons(updatedPersons)
          setNewName('')
          setNewNumber('')
          setNotificationMessage([
            `Added ${response.name}`,
            "good"
          ])
          setTimeout(() => {
            setNotificationMessage([null, null])
          }, 5000)
        })
        .catch(error => {
          setNotificationMessage([
            error.response.data.error,
            "bad"
          ])
          setTimeout(() => {
            setNotificationMessage([null, null])
          }, 5000)
        })
    }
  }

  const deletePerson = (person) => {
    if(window.confirm(`Are you sure you want to delete ${person.name}?`)){
      personService
        .remove(person.id)
        .then(response => {
          const personsAfterDelete = persons.filter(p => p.id !== person.id)
          setPersons(personsAfterDelete)
          setNotificationMessage([
            `Deleted ${person.name}`,
            "good"
          ])
          setTimeout(() => {
            setNotificationMessage([null, null])
          }, 5000)
        })
        .catch(error => {
          setNotificationMessage([
            `Information of ${person.name} has already been removed from server`,
            "bad"
          ])
          setTimeout(() => {
            setNotificationMessage([null, null])
          }, 5000)
        })
    }
  }

  const peopleToShow = (filteredName) !== ""
    ? persons.filter(person => person.name.toLowerCase().includes(filteredName.toLowerCase()))
    : persons

  const resetForm = (event) => {
    event.preventDefault()
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMessage} />
      filter shown with <input onChange={handleFilterChange} placeholder="name" />
      <h2>Add a new person</h2>
      <AddPersonForm 
        onSubmit={addPerson}
        onReset={resetForm} 
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
