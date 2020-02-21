import React, { Component, useState, useEffect } from 'react'
import Team from './components/Team'

const App = () => {
  return (
    <>
      <Team teamName={'Chicago Bulls'} />
      <Team teamName={'Milwaukee Bucks'} />
    </>
  )
}

export default App
