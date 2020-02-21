import React, { Component, useState, useEffect } from 'react'
import Team from './components/Team'
import { Button } from 'reactstrap'

const App = () => {
  const [winner, setWinner] = useState(false)
  const [winningTeam, setWinningTeam] = useState('')
  const restartGame = () => {
    setWinner(false)
    setWinningTeam('')
  }
  return (
    <>
      <>
        <h1 className="scoreboard-header">Pokemon Scoreboard</h1>
        {winner && (
          <>
            <section className="winning-section">
              <h1>{winningTeam} WINS!</h1>
              <Button color="primary" onClick={() => restartGame()}>
                Restart Game
              </Button>
            </section>
          </>
        )}
        <section className="flex-teams">
          <Team
            teamName={'Butterfree'}
            winner={winner}
            setWinner={setWinner}
            setWinningTeam={setWinningTeam}
          />
          <Team
            teamName={'Pikachu'}
            winner={winner}
            setWinner={setWinner}
            setWinningTeam={setWinningTeam}
          />
        </section>
      </>
    </>
  )
}

export default App
