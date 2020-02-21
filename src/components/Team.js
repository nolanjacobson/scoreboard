import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Button } from 'reactstrap'
const Team = props => {
  const [teamName, setTeamName] = useState(props.teamName)
  const [score, setScore] = useState(0)
  const [pokemon, setPokemon] = useState({})

  const updateScore = action => {
    if (action === 'add') {
      setScore(score + 1)
    } else {
      setScore(score - 1)
    }
  }

  const getPokemon = async () => {
    try {
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${teamName.toLowerCase()}`
      )
      console.log(response)
    } catch (error) {
      alert('Please try with a valid Pokemon name')
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])
  return (
    <>
      {score === 10 && (
        <>
          <div>{teamName} WINS!</div>
          <button onClick={() => setScore(0)}>Restart Game</button>
        </>
      )}
      <section>
        <div>{teamName}</div>
        <p>Update Team Name: {teamName}</p>
        <input type="text" onChange={e => setTeamName(e.target.value)}></input>
        <p>{score}</p>
        {/* <button onClick={() => setScore(score + 1)}>Add Point</button> */}
        <Button
          outline
          color="primary"
          disabled={score === 10}
          onClick={() => updateScore('add')}
        >
          Add Point
        </Button>
        <button
          disabled={score <= 0 || score === 10}
          onClick={() => updateScore('subtract')}
        >
          Subtract Point
        </button>
      </section>
    </>
  )
}

export default Team
