// --------------------------------------REACT LIST----------------------------------------
// In react you render the list using some loop
// Javascript method Map() is used to render list and prefered..

// import React from "react";

// function Car(props) {
//    return  <li>the car brand is {props.brand}</li>
// }

// function App() {
//     const cars = ['ford', 'BMW', 'Audi'];
//     return (
//         <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//             {cars.map((car) => <Car brand={car}/>)}
//         </ul>
//         </>
//     );
// }

// export default App

// When You run this code it will give warning that there is no "key" provided
// Keys Allow react to keep track of element. This way if an element is updated or removed only that item will be re-rendered

// import React from "react";

// function Car(props) {
//     return <li>the car brand is {props.brand}</li>
// }

// function App() {
//     const cars = [
//         {id: 1, brand: 'Ford'},
//         {id: 2, brand: 'BMW'},
//         {id: 3, brand: 'Audi'},
//     ];
//     return (
//         <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//             {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
//         </ul>
//         </>
//     );
// }

// export default App

// -------------------------------------REACT FORMS--------------------------------------------
// just like html react uses forms to allow user to interact with the web page.

// Adding Forms in React

// function App() {
//     return (
//         <>
//         <form>
//             <label>Enter your name:
//                 <input type="text" />
//             </label>

//         </form>
//         </>
//     );
// }

// export default App

// This form will submit and the page will be refresh like normal
// But that what we dont want in react to happen and let react control it

// ----------Handling Forms
// Handling forms is about how you handle the data when it is changes value or gets submitted
// In HTML, form data is handled by DOM
// In React, form data is handled by components.
// When handled by components all the data is stored in the component state.
// You can handled changes by adding event handler in the onChange attribute
// We can use the useState Hook to keep track of each input value.

// import { useState } from "react";

// function App() {
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`The name you entered was: ${name}`)
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="submit" />
//             </label>
//         </form>
//         </>
//     );
// }

// export default App

// Multiple Input Fields
// we can control the values of more then one input field by adding a NAME attribute in each element.
// in the useState we will intialize it with an empty object.
// To access the field in use event.target.name and event.target.value.

// import { useState } from "react";

// function App() {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({...values, [name]: value}))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs)
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/>
//             </label>

//             <label>Enter your age:
//                 <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
//             </label>

//             <input type="submit" />
//         </form>
//         </>
//     );
// }

// export default App

import { useState } from 'react';

function App() {
  const [textarea, setTextarea] = useState('');

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <>
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    </>
  );
}

export default App;
