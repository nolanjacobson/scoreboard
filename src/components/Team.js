import React, { useState } from 'react'

const Team = props => {
  const [teamName, setTeamName] = useState(props.teamName)
  const [score, setScore] = useState(0)

  const updateScore = action => {
    if (action === 'add') {
      setScore(score + 1)
    } else {
      setScore(score - 1)
    }
  }
  return (
    <>
      <section>
        <div>{teamName}</div>
        <p>Update Team Name: {teamName}</p>
        <input type="text" onChange={e => setTeamName(e.target.value)}></input>
        <p>{score}</p>
        {/* <button onClick={() => setScore(score + 1)}>Add Point</button> */}
        <button onClick={() => updateScore('add')}>Add Point</button>
        <button disabled={score <= 0} onClick={() => updateScore('subtract')}>
          Subtract Point
        </button>
      </section>
    </>
  )
}

export default Team
