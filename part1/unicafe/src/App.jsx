import { useState } from 'react'
import { Title } from './Title'
import { Button } from './Button'
import Statistic from './Statistic'

 function  App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total , setTotal] = useState(0);
  const [average , setAverage] = useState(0);
    const [positive , setPositive] = useState(0);

 
    const handleGood = () => {
      const updateGood = good+1

    setGood(updateGood)
         setTotal(neutral+ updateGood+ bad)
         const updateTotal = total +1
                  setPositive(good/updateTotal)

         console.log(updateTotal)
          setAverage(neutral/updateTotal)
         

    } 
      const handleBad = () => {
        const updateBad = bad+1

    setBad(updateBad)
         setTotal(neutral+ good+ updateBad)
        const updateTotal = total +1
                  setPositive(good/updateTotal)
                   setAverage(neutral + updateTotal)

 }
       const handleNeutral = () => { 
const updateNeutral = neutral+1
    setNeutral(updateNeutral) 
     setTotal(updateNeutral+ good+ bad)
               const updateTotal = total +1
                  setPositive(good/updateTotal)
                               setAverage(updateNeutral/updateTotal)



      }

     

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