import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoContext from "./context/todoContext.js";
function App() {
      const [list, setList] = useState([]);
      return (
            <TodoContext.Provider value={{ list, setList }}>
                  <TodoList></TodoList>
            </TodoContext.Provider>
      );
}

export default App;
