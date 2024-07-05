import React from "react";
import ReactDom from 'react-dom/client';
import App1 from "./App1";
// import Componenet1 from "./App";
// import App from "./App";

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Componenet1/> */}
    <App1/>
  </React.StrictMode> 
)
