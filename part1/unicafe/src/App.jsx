import { useState } from 'react'
import { Title } from './Title'
import { Button } from './Button'
import Statistic from './Statistic'

 function  App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


 
    const handleGood = () => {
      setGood(good + 1)
    } 
      const handleBad = () => {
        setBad(bad + 1)
        }
       const handleNeutral = () => { 
        setNeutral(neutral + 1)
      }

     const total = good + bad + neutral;
     const average = total == 0 ? 0 : (good - bad ) / total
     const positive =total == 0 ? 0 : (good / total ) * 100
  return (
    <div>
      <Title  text="give feedback"/>
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral}/>
      <Button text="bad" onClick={handleBad}/>

      <Title  text="statistics"/>

      <Statistic good={good} bad={bad} neutral={neutral}  total={total}  average={average} positive={positive}  />
   
    </div>
  )
}

export default App