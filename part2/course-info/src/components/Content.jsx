import Part from "./Part"

const Content = ({parts}) => {
  console.log(parts, 'what here');
  
  const total = parts.reduce((sum,part)=>{
    console.log(sum,"hello", part.exercises);
    return sum + part.exercises
  }, 0)
  return (
    <div>
      {parts.map( part => < Part key={part.id} part={part} />)}
      <b>Total of  {total} Exercises</b>
    </div>
  )
}

export default Content