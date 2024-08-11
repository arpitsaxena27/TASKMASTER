import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import ThemeButton from "./components/ThemeButton.jsx";
import TodoContext from "./context/todoContext.js";

function App() {
    const [list, setList] = useState(() => {
        try {
            const savedTodos = localStorage.getItem("todos");
            return savedTodos ? JSON.parse(savedTodos) : [];
        } catch (error) {
            console.error("Error parsing local storage data:", error);
            return [];
        }
    });

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return JSON.parse(savedTheme) ;
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(list));
    }, [list]);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(isDarkMode));
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    if(isDarkMode==true)
    {
        document.body.classList.add("darker");
        document.body.classList.remove("lighter");
    }

    const toggleTheme = () => {setIsDarkMode(prevMode => !prevMode)
      document.body.classList.toggle("darker");
      document.body.classList.toggle("lighter");
    };

    return (
        <TodoContext.Provider value={{ list, setList }}>
            <div className="min-h-screen bg-transparent text-black dark:text-white">
                <ThemeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode}></ThemeButton>
                <TodoList />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
