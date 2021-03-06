import React, { useState } from "react";

const Button = ({ title, handleClick }) => {
  return <button onClick={handleClick}>{title}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const handleSelected = () => {
    const next = Math.floor(Math.random() * anecdotes.length + 0);
    setSelected(next);
  };

  const votes = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  const mostVotes = Math.max(...vote)
  const mostAnecdote = anecdotes[vote.indexOf(mostVotes)]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br></br>
      <Button handleClick={handleSelected} title="next anecdote" />
      <Button handleClick={votes} title="vote" />
      <p>has {vote[selected]} votes</p>
      <h1>Anecdote with the most votes</h1>
      {mostAnecdote}
      <p>has {mostVotes} votes</p>
    </div>
  );
};

export default App;
