import { useState } from "react"
import Statistics from "./components/Statistics"
import Button from "./components/Button"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  )
}

export default App