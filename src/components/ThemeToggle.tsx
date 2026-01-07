import { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);
    // useEffect(() => {
    //     const storedTheme = localStorage.getItem("Theme");
    //     if (storedTheme === "dark") {
    //         setIsDarkMode(true);
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         localStorage.setItem('Theme', 'light');
    //         setIsDarkMode(false);
    //     }
    // }, [])

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("Theme") === "dark";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("Theme", isDarkMode ? "dark" : "light");
        
    }, [isDarkMode]);


    const togleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem('Theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem('Theme', 'dark');
            setIsDarkMode(true);
        }
    }
    return (
        <button onClick={togleTheme}> {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900' />} </button>
    )
}

export default ThemeToggle
