import React from 'react'
import ReactDOM from 'react-dom/client'
import ParentComponent from './App.jsx'

const cars = ["Ford", "BMW", "Audi"];
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentComponent/>
  </React.StrictMode>,
)
