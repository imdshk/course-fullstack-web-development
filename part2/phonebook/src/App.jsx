import { useState } from 'react'

const Number = ({name, number}) => {
  return(
    <p>{name} {number}</p>
  )
}

const Numbers = ({persons}) => {
  return(
    <>
      {persons.map((person) => 
          <Number key={person.name} name={person.name} number={person.number} />
      )}
    </>
  )
}

const Form = ({onSubmit, name, number, onNameChange, onNumberChange}) => {
  return(
    <form onSubmit={onSubmit} >
      <div>
        name: <input value={name} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={number} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">
          add
        </button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-1234567"
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)

  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
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
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form 
        onSubmit={addName} 
        name={newName} 
        number={newNumber} 
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )
}

export default App
