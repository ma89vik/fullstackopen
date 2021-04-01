import React, { useState } from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const Button = ({name, clickHandler}) => {
  return (
    <button onClick={clickHandler}>{name}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0)
  const [mostPopular, setMostPopular] = useState(0)

  const nextAnecdote = () => {
    if (selected < anecdotes.length - 1) {
      setSelected(selected+1);
    }
  }

  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1
    setVotes(copy);
    console.log(copy)
    findMostPopular();
  }

  const findMostPopular = () => {
    console.log(votes);
    votes.forEach( (vote, i) => {
      if (vote > mostPopular) {
        setMostPopular(i);
      }
    });
  }

  return (
    <div>
      <Header name="Anecdotes" />
      {anecdotes[selected]}
      <br></br>
      <p>Voted for {votes[selected]} times</p>
      <Button name="Vote" clickHandler={voteAnecdote} />
      <Button name="Next" clickHandler={nextAnecdote} />
      <Header name="Most popular" />
      {anecdotes[mostPopular]}
      <p>Voted for {votes[mostPopular]} times</p>
    </div>
  )
}

export default App