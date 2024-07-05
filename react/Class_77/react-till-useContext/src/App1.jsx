import { createContext, useContext, useState } from "react"
import { FaMoon, FaRegSun } from "react-icons/fa";
import "./App.css"

const ThemeContext = createContext();

function App () {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        let updatedTheme = theme === "light" ? "dark" : "light"
        setTheme(updatedTheme);
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            <div style={{backgroundColor: theme === "light" ? "white" : "black"}} className="theme">
            {theme === "light"? <FaMoon size={50} onClick={toggleTheme}/> : <FaRegSun style={{color: "white"}} size={50} onClick={toggleTheme}/>}
            </div>
        </ThemeContext.Provider>
    );
}


function App1() {
    return (
        <App/>
    )
}

export default App1