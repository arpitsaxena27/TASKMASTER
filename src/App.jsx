import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoContext from "./context/todoContext.js";
function App() {
      const [list, setList] = useState([{id:1,todoData:"todo1",finished:false}]);
      return (
            <TodoContext.Provider value={{ list, setList }}>
                  <TodoList></TodoList>
            </TodoContext.Provider>
      );
}

export default App;
