import { useState } from 'react'

const Number = ({name}) => {
  return(
    <p>{name}</p>
  )
}

const Numbers = ({persons}) => {
  return(
    <>
      {persons.map((person) => 
          <Number key={person.name} name={person.name} />
      )}
    </>
  )
}

const Form = ({onSubmit, value, onChange}) => {
  return(
    <form onSubmit={onSubmit} >
      <div>
        name: <input value={value} onChange={onChange} />
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
    {name: "Arto Hellas"}
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={addName} value={newName} onChange={handleNameChange}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )
}

export default App
