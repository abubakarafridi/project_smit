// useEffect from w3school

import { createContext, useContext, useEffect, useState } from "react"

// React useEffect Hooks

// useEffect from sideEffects(without clicking a button and the component is changed) in you component.
// some side Effects are : fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)

// lets use timer as an example
// function App() {
//   const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setCount((count) => count + 1)
  //   }, 1000);
  // });

  // It keeps counting even though it should only count once!
  // useEffect runs on every render. That means that when the count changes a render happens, which then
  // triggers another effect.
  // This is not what we want there are several ways to control when side effects run.
  // We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

  // No dependency passed:
  // useEffect(() => {
    // Runs on Every Render
  // });

  // An empty array:
  // useEffect(() => {
    // Runs only the first render
  // }, []);

  // dependancy passed:
  // useEffect(() => {
    // Runs on the first render
    // And any time any dependency value changes
  // }, [props, state]);

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setCount((count) => count + 1)
  //   }, 1000);
  // }, []); <- added an empty brackets here to render it once

//   return (
//     <>
//     <h1>I have rendered {count} times</h1>
//     </>
//   )
// }

// export default App
// ---------------------------------------------------------------------------

// Using a useEffect hoot that is dependent on a variable. if the count variable updates the effect will run again
// function App() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(()=> {
//     setCalculation(() => count * 2);
//   }, [count]);


//   return (
//     <>
//     <p>count: {count}</p>
//     <button onClick={() => setCount((c) => c + 1)}>+</button>
//     <p>calculation: {calculation}</p>
//     </>
//   )
// }

// export default App
// -------------------------------------------------------------------

// Effect Cleanup
// some effect require cleanup to reduce memory leaks.
// Timeouts, subscriptions, event listeners, and other effect that no longer needed should be disposed. 
// We do this by including a return function at the end of the useEffect Hook.

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);

//     console.log(timer);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//     <h1>I have rendered {count} times!</h1>
//     </>
//   )
// }

// export default App
// ---------------------------------------------------

// React useContext Hook

// React Context

// React context is a to manage state globally
// It can be used together with the useState Hook to share state between deeply nested componenets more easily than with useState alone.

// THE PROBLEM
// To illustrate, we have many nested componenets. The componenet at the top and bottom of the stack need access to the state.
// To do this without context, we will need to pass the state as "props" through each nested componenet. This is called "PROP DRILLING".

// Passing "props" through nested components:

// PROP DRILLING
// function Componenet1() {

//   const [user, setUser] = useState("Jesse Hall")

//   return(
//     <>
//     <h1>{`Hello ${user}`}</h1>
//     <Componenet2 user={user} />
//     </>
//   )
// }

// function Componenet2({user}) {
//   return (
//     <>
//     <h1>Componenet 2</h1>
//     <Componenet3 user={user}/>  
//     </>
//   )
// }

// function Componenet3({user}) {
//   return (
//     <>
//     <h1>Component 3</h1>
//     <Componenet4 user={user}/>
//     </>
//   )
// }

// function Componenet4({user}) {
//   return (
//     <>
//     <h1>Component 4</h1>
//     <Componenet5 user={user}/>
//     </>
//   )
// }

// function Componenet5({user}) {
//   return (
//     <>
//     <h1>Component 5</h1>
//     <h2>{`Hello ${user} again!`}</h2>
//     </>
//   )
// }

// 2, 3, 4 didn't need the state. Yet still they had to pass the state along so it could reach component 5


// export default Componenet1

// The solution for prop drilling is to use create context

// Create Context
// To create context you must import createContext and initialize it.

const UserContext = createContext();

// next we'll use the Context Provider to wrap the tree of components that need the state Context.

// Context Provider
// Wrap child component in the context Provider and supply the state value

function Componenet1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Componenet2/>
    </UserContext.Provider>
  )
  
}

function Componenet2() {
  return (
    <>
    <h1>Componenet 2</h1>
    <Componenet3/>  
    </>
  )
}

function Componenet3() {
  return (
    <>
    <h1>Component 3</h1>
    <Componenet4/>
    </>
  )
}

function Componenet4() {
  return (
    <>
    <h1>Component 4</h1>
    <Componenet5/>
    </>
  )
}

function Componenet5() {
  const user = useContext(UserContext);

  return (
    <>
    <h1>Component 5</h1>
    <h2>{`Hello ${user} again!`}</h2>
    </>
  )
}

export default Componenet1