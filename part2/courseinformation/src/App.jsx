const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Part = ({name, exercises}) => {
  return(
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Total = ({parts}) => {
  const initialExercise = 0
  const totalExercise = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialExercise
  )
  return (
    <p><b>Total of {totalExercise} exercises</b></p>
  )
}

const Course = ({course}) => {
  return(
    <div id={"course-" + course.id}>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App