import Content from "./Content";
import Header from "./Header"

const Course = ({course}) => {
    const { name, parts } = course
    console.log(parts);
    
  return (
    <div>
        < Header name={name} />
        < Content parts={parts}/>
    </div>
  )
}

export default Course