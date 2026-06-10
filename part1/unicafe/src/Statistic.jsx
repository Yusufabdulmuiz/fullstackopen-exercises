import StatisticLine from "./StatisticLine"

const Statistic = ({total,good, neutral, bad, average, positive }) => {
  
  return total == 0 ? (
        <div>no stat yet</div>
    ): (
<table>
  <tbody>
      < StatisticLine text="good" value={good} />
      < StatisticLine text="neutral" value={neutral} />
      < StatisticLine text="bad" value={bad} />
      < StatisticLine text="total" value={total} />
      < StatisticLine text="average" value={average.toFixed(1)} /> 
      < StatisticLine text="positive" value={positive.toFixed(1)} />
  </tbody>
</table>
  )
    
  }

export default Statistic