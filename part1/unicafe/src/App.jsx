import { useState } from 'react'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick} >{text}</button>
  )
}

const Statistic = ({type, value, isPercentage}) => {
  if(isPercentage) {
    return (
      <p>{type} {value*100} %</p>
    )
  }
  return(
    <p>{type} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const allScoreValue = good + neutral + bad
  const averageScoreValue = ((good * 1) + (bad * -1)) / allScoreValue
  const positivePercentageScoreValue = (good / allScoreValue)
  
  if(allScoreValue === 0) {
    return(
      <p>No feedback given</p>
    )
  }

  return(
    <>
      <Statistic type="good" value={good} />
      <Statistic type="neutral" value={neutral} />
      <Statistic type="bad" value={bad} />
      <Statistic type="all" value={allScoreValue} />
      <Statistic type="average" value={averageScoreValue} />
      <Statistic type="positive" value={positivePercentageScoreValue} isPercentage={true} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
  }

  return( 
    <>
      <h1>give feedback</h1>
      <Button onClick={incrementGood} text="good" />
      <Button onClick={incrementNeutral} text="neutral" />
      <Button onClick={incrementBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
    )
}

export default App
