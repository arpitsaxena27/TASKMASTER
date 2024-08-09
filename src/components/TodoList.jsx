import { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./Todoinput";
import List from "./List";
function TodoList() {
      function add() {
        setUpdate(addTask);
        updateAddTask("");
      }
      const [update, setUpdate] = useState("");
      const [addTask, updateAddTask] = useState("");
      return (
            <div className="flex justify-center items-center gap-5 flex-col mx-0 lg:mx-60">
                  <h1 className="text-6xl mb-8">TASKS</h1>
                  <TodoInput setValues={updateAddTask} add={add}></TodoInput>
                  {/* <Todo todoData={update}></Todo> */}
                  <List update={update}></List>
            </div>
      );
}
export default TodoList;
