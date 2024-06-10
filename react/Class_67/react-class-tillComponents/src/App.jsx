import './index.css'
// import React,{Component} from 'react'

// function App() {
//   // The Html uses jsx in this code and allow you to write html tags inside javascript code.
//   const myElement = (
//     <table>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>Jhon</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );
//   return (
//     <>
//     {myElement}
//     </>
//   )
// }

// export default App

/* React is a JavaScript library for building user interfaces.
        React is used to build single-page applications.
        React allows us to create reusable UI components. 
*/

// before starting React you should have an intermediate experience of 
// html, css, and JavaScript
// and should have knowledge about es6

// WHAT IS REACT?
// React sometimes referred as frontend JavaScript framework, is a javaScript library created by facebook

// How does React Work?
// React creates a virtual DOM in memory and manipulates it. It does not change the DOM directly.
// React changes are reflected in DOM when the changes are done in virtual DOM.
// React changes what need to be changed in terms that it does not change the things that already changed.


// React Goal is to reander html in web page
// React Render web page using createRoot() and its method render().

// React createRoot() function takes one argument an html elment. The purpose is that where should
// be the component render.

// The render method is then called to define what react component should be render.
// The whole react folder there is an index.html file that has a div with id="root" there is where the component is render.

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <App />
// </React.StrictMode>,
// )

// <div id="root"></div>

// The root node in main.jsx can be anything it can be a p a header. And the id="root" can be name anything.

// What is jsx?
// jsx is javascript xml
// jsx allows you to write Html in react
// jsx makes it easier to write and add HTML in react.

// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
// JSX converts HTML tags into react elements.

// it is not compulsory to use jsx but it become easier to create react application with it.

// Expressions in JSX
// With JSX you can write expressions inside curly braces { }.
// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

// React Component
// Component are reuseable peace of function or class that is use to build UI and return html elements.

// Components are independent reusable bits of code. They serve the same purpose as javascript function but work in isolation and return HTML.
// Components comes in two types Class components and functional components.

// In older React code bases, you may find Class components primarily used.
// It is now suggested to use Function components along with Hooks, which were added in React 16.8.

// Create Your first Component
// Component MUST start with upper case letter

// Class Component

// Class component must include extands React.Component statment.
// React.Component gives your component access to React.Component's functions.

// class Car extends React.Component {
//   render() {
//     return <h1>hello world</h1>;
//   }
// }

// export default Car

// Function Component

// Here Component as above but in function
// Functional Component behaves the same way and returns Html and written with less code and easier to understand.

// function Car() {
//   return <h1>Hi, where are you</h1>;
// }

// export default Car

// Component In Component

function Car() {
  return <h1>Hi, this is car.</h1>;
}

function Garage() {
  return (
    <>
    <h1>Who lives in Garage?</h1>
    <Car/>
    </>
  );
}

export default Garage