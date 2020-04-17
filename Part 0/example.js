import React from 'react'
import ReactDOM from 'react-dom'

const Header =(course)=>{
   return <h1>{course}</h1>
}

const Content = (props) =>{
    console.log(props)
    const {part1, part2, part3, exercises3, exercises2, exercises1} = props
 return   (
     <>
    <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      </>
      )
}

const Total =({exercises1, exercises2, exercises3})=>{
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts ={
    part1 = 'Fundamentals of React',
    part2 ='Using props to pass data',
    part3 = 'State of a component'
  }
  const excercises ={
    exercises1 = 10,
    exercises2 = 7, 
    exercises3 =14
  }
  
  

  return (
    <div>
        <Header course={course}/>
        <Content parts={parts} excercises={exercises} />
        <Total excercises={excercises}/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))