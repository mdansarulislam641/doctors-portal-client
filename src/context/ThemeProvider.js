import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const  ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false);
    useEffect(()=>{
        const element = document.documentElement;
        if(theme){
            element.classList.add('dark');
            element.classList.remove('light');
        }
        else{
            element.classList.add('light');
            element.classList.remove('dark');
        }
        const storedTheme = JSON.parse(localStorage.getItem('theme'));
        setTheme(storedTheme)

    },[theme])
    const themeToggle = ()=>{
        setTheme(!theme)
        // set theme in local storage
        localStorage.setItem('theme',!theme);
    }
    return (
        <ThemeContext.Provider value={{themeToggle, theme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;