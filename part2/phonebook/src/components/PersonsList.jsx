import Person from './Person'

const PersonsList = ({persons}) => {
  return(
    <>
      {persons.map((person) => 
          <Person key={person.id} name={person.name} number={person.number} />
      )}
    </>
  )
}
  
export default PersonsList