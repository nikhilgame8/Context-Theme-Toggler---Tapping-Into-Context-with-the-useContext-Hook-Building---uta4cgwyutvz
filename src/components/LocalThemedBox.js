import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const {theme, setTheme}=useContext(ThemeContext);
    const [toggle, setToggle]=useState("dark");
    const [localtheme, setLocal]=useState("dark");
    useEffect(()=>{
        if(theme === 'dark'){
            setLocal('dark');
            setToggle('light');
        }else{
            setLocal('light');
            setToggle('dark');
        }
    }, [theme])
    
    function handleLocalTheme(){
        if(toggle === 'dark'){
            setLocal('dark');
            setToggle('light');
        }else{
            setLocal('light');
            setToggle('dark');
        }
    }

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${localtheme}`}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={`txt-${localtheme}`}>Hiii</p>
        <button id="local-theme-toggler" className={`btn btn-${localtheme}`} onClick={handleLocalTheme}>Toggle local theme to {toggle}</button>
    </div>
)
}

export { LocalThemedBox }
