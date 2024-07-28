import { useState } from "react";

const Counter = ({startingValue, incrementBy})=>{
  const [count, setCount] = useState(startingValue)

  const increment = ()=>{
    setCount(count + incrementBy)
  }

  const decrement = ()=>{
    setCount(count - 1)
  }

  return(
    <div>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
    </div>
  )

}

export { Counter }