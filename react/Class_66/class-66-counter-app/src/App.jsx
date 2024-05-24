import { useState } from 'react'
import './App.css'

function App() {
  const [counter , setCounter] = useState(0);

  function reset() {
    setCounter(0);
  }
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    if(counter !== 0) {
      setCounter(counter - 1);
    } else {
      alert("number cant be less then 0");
    }
  }

  return (
    <>
    <h1>{counter}</h1>
    <div>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
    </>
  )
}

export default App
