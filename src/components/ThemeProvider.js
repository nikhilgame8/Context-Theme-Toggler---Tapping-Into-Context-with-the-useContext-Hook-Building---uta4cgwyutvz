<<<<<<< HEAD
import React, {useState} from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [theme, setTheme]=useState('light');
=======
import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
     const [theme, setTheme] = useState('light')
>>>>>>> caa9d6e68ceb5acd536a963062ccf7c1840505d3
    return (
        <React.Fragment>
            <ThemeContext.Provider value={{theme, setTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </React.Fragment>
    )
}
export {ThemeProvider,ThemeContext}
