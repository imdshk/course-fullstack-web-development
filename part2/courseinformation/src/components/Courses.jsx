const Header = ({name}) => {
    return (
      <h2>{name}</h2>
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
  
  const Courses = ({courses}) => {
    return(
      <>
        {courses.map(course => 
          <Course key={course.id} course={course} />
        )}
      </>
    )
  }

export default Courses