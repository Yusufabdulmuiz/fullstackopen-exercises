
const Statistic = ({total,good, neutral, bad, average, positive }) => {
  if (total== 0) {
    return(
        <div>
no stat yet
        </div>
    )
  } else {
    return(
          <> 
          <p>{good}</p>
      <p>{neutral}</p>
     <p>{bad}</p>
      <p> total:{total}</p>
      <p> average:{average}</p>
      <p> positive:{positive}</p>
      </>
    )
    
  }

}

export default Statistic