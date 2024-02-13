import Person from './Person'

const PersonsList = ({persons, deletePerson}) => {
  return(
    <>
      {persons.map((person) => 
          <Person 
            key={person.id} 
            name={person.name} 
            number={person.number} 
            deletePerson={() => deletePerson(person)}
          />
      )}
    </>
  )
}
  
export default PersonsList