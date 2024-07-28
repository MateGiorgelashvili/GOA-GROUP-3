import { useState } from 'react'
import { Counter } from './components/Counter.jsx'

const App = () => {
  return(
    <div>
      <Counter startingValue={5} incrementBy={2}/>
      <br />
      <Counter />
      <br />
      <Counter />
    </div>
  )
}

export default App
