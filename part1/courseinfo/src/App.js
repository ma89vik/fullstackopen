import React from 'react'

const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (prop) => {
  return (
    <div>
      <Part part={prop.parts[0]} />
      <Part part={prop.parts[1]} />
      <Part part={prop.parts[2]} />
    </div>
  )
}

const Total = () => {

  return (
    <p>Number of exercises </p>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }];



  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total />
    </div>
  )
}

//<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>


export default App