import React, { useState } from 'react'


const Header = ({title}) => {

  return (
    <h1>{title}</h1>
  )
}

const FeedbackButton = (props) => {

  return (
    <button onClick={props.onClickHandler}> {props.name} </button>
  )
}

const Statistic = (props) => {
  return (
    <p>{props.name} pressed {props.value} times </p>
  )
}

const Statistics = ({good,neutral,bad}) => {

  const calcAverage = () => {
    return (good-bad);
  }

  const calcGood = () => {
    return (good/(good + neutral + bad));
  }

  const noData = () => {
    return (bad === 0 && neutral === 0 && good === 0);
  }

  if (noData()) {
    return ( <p>No feedback given</p>
    )
  }
  else {
    return (
      <div>
        <Statistic name="Good" value={good} />
        <Statistic name="Neutral" value={neutral} />
        <Statistic name="Bad" value={bad} />
        <p>Average {calcAverage()}</p>
        <p>Good {calcGood()} %</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  return (
    <div>
      <Header title="Give Feedback" />
      <FeedbackButton name="Good" onClickHandler={() => setGood(good+1)}/>
      <FeedbackButton name="Neutral" onClickHandler={() => setNeutral(neutral+1)}/>
      <FeedbackButton name="Bad" onClickHandler={() => setBad(bad+1)}/>
      <Header title="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App