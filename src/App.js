import React, { Component, useState, useEffect } from 'react'
import Team from './components/Team'

const App = () => {
  return (
    <>
      <h1 className="scoreboard-header">Pokemon Scoreboard</h1>

      <Team teamName={'Butterfree'} />
      <Team teamName={'Pikachu'} />
    </>
  )
}

export default App
