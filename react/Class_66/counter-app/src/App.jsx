import './App.css'
import { useState } from 'react';


export default function App() {
  const [counter, setCounter] = useState(0);
  let buttonStyle = {margin: 10, padding: 10, color: "white", backgroundColor: "black"};
  function resetHandler() {
    setCounter(0)
  }
  
  function decrementHandler() {
    if(counter>0){
      setCounter(counter-1)
    } else {
      alert("Dimag da karab di")
    }
  }
  
  function IncrementHandler() {
    setCounter(counter+1)
  }
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={resetHandler} style={buttonStyle}>reset</button>
    <button onClick={decrementHandler} style={buttonStyle}>decrement</button>
    <button onClick={IncrementHandler} style={buttonStyle}>Increment</button>
    </>
  )
}