// ------------------------------ REACT PROPS--------------------
// props are argument passed to react components.
// Props are passed to html attribute (h1, p, span) it can be any attribute of HTML.
// Props stands for properties

// REACT PROPS
// React props are like function argument in js and html attributes

// The Component recives arguments as a props object.
// function Car(props) {
//   return (
//     <h1>This is {props.brand.name} {props.brand.model}</h1>
//   )
// }

// function ParentComponent() {
  // return (
  //   <>
  //   {/* Add brand attribute to Car component */}
  //   <Car brand="ford"/>
  //   </>
  // )

  // If you have a variable to send and not string just put it in curly brackets.
  // const brands = ["toyota", "ford", "honda"];
  // Objects can also be send in curly brackets.
//   const carInfo = {name: "Ford", model: "Mustang"};
//   return (
//     <>
//     <Car brand={carInfo}/>
//     </>
//   );
// }

// export default ParentComponent

// -----------------------------REACT EVENTS-----------------------------
// Just like HTML DOM event, React can perform actions based on user events.
// React has the same events as: click, change, mouseover etc.

// React events are camelCase syntax: onClick not onclick.

// React event handlers are written inside curly braces:
// onClick={shoot} not like onclick="shoot()"

// function shoot() {
//   alert("gool")
// }

// function ParentComponent() {
  // const shoot = () => {
  //   alert("Great Shot");
  // }

  // Passing Arguments
  // To pass an argument to an event handler use arrow function
  // If we dont use arrow function the function will run directly
  // const shoot = (a, b) => {
  //   alert(b.type);
  // }
  // return (
  //   <>
  //   {/* React event object Event handler has access to react event that trigger the function */}
  //   {/* In this example it is click */}
  //   <button onClick={() => shoot("Goal", event)}>Shoot</button>
    // </>
    // In HTML it is like this
    // <button onclick="shoot()">Take the Shot!</button>
  // );
// }

// export default ParentComponent

// -----------------------------REACT CONDITONAL RENDERING-----------------

// In React You can conditionaly render components
// There are several ways to do it.

// We can use if statement to decide which component to render.

// We will use these two component
function MissedGoal() {
  return <h1>Missed</h1>
  }
  
function MadeGoal() {
  return <h1>Goal</h1>
}

// Another way to conditaonaly render a react component is by && logical operator
// function ParentComponent(props) {
//   const cars = props.cars
//   return (<>
//   {cars.length > 0 && <h2>You have {cars.length} cars in garage</h2>}
//   </>)
// }
// how this works is that if the length of cars is 0 then it will not render

function ParentComponent() {
  const isGoal = true;
  return (
    <>
    {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
  );
}

export default ParentComponent