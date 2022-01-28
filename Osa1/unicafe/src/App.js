import React, { useState } from 'react'

const Button = ({title,handleClick}) => {
  return (
    <button onClick={handleClick}>{title}</button>
  )
}

const StatisticLine = ({text, value}) => {
  if (text==="positive") {
    return (
      <tr>
        <td>{text}</td> 
        <td>{value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  return (
    <div>
      <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(good-bad)/all} />
      <StatisticLine text="positive" value={good/all*100}  />
      </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  if (all===0) {
    return (
    <div>
      <h1>give feedback</h1>
      <Button title= "good" handleClick={handleGood} />
      <Button title= "neutral" handleClick={handleNeutral} />
      <Button title= "bad" handleClick={handleBad} />
      <h1>Statistics</h1>
      <p>
        No feedback given
      </p>
      </div>
      )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button title= "good" handleClick={handleGood} />
      <Button title= "neutral" handleClick={handleNeutral} />
      <Button title= "bad" handleClick={handleBad} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad = {bad} all = {all}/>
    </div>
  )
}

export default App