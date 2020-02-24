import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Button } from 'reactstrap'
const Team = props => {
  const [teamName, setTeamName] = useState(props.teamName)
  const [score, setScore] = useState(0)
  const [pokemon, setPokemon] = useState({})
  const [image, setImage] = useState('')
  const updateScore = action => {
    if (action === 'add') {
      setScore(score + 1)
    } else {
      setScore(score - 1)
    }
  }

  useEffect(() => {
    if (!props.winner) {
      setScore(0)
    }
  }, [props.winner])

  const getPokemon = async () => {
    try {
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${teamName.toLowerCase()}`
      )
      setPokemon(response.data)
      console.log(response.data)
      setImage(response.data.sprites.back_default)
    } catch (error) {
      alert('Please try with a valid Pokemon name')
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {
    if (score === 10) {
      props.setWinner(true)
      props.setWinningTeam(teamName)
    }
  }, [score])
  return (
    <>
      <section>
        <div>{teamName}</div>
        <img src={image} />
        <p>Update Team Name: {teamName}</p>
        <input
          placeholder="Update Api Call"
          type="text"
          onChange={e => setTeamName(e.target.value)}
        ></input>
        <Button color="warning" onClick={getPokemon}>
          Submit
        </Button>
        <p>{score}</p>
        {/* <button onClick={() => setScore(score + 1)}>Add Point</button> */}
        <Button
          color="primary"
          disabled={props.winner}
          onClick={() => updateScore('add')}
        >
          Add Point
        </Button>
        <Button
          color="danger"
          disabled={score <= 0 || props.winner}
          onClick={() => updateScore('subtract')}
        >
          Subtract Point
        </Button>
      </section>
    </>
  )
}

export default Team
