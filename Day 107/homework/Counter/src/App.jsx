import { useState } from 'react'
import { Counter } from './components/Numcount.jsx'

function App() {

  return (
    <div>
      <Counter startingValue={5} incrementBy={2}/>
    </div>
  )
}

export default App
