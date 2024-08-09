import { useContext, useState } from "react";
import todoContext from "../context/todoContext";

function Todo({ todoData }) {
      const [checked, setChecked] = useState(false);
      const { list, setList } = useContext(todoContext);
      const [edit, setEdit] = useState("Edit");
      //   const [editfeild, setEditField] = useState(todoData);
      function deleteit() {
            const updatedList = list.filter((t) => t !== todoData);
            setList(updatedList);
            setChecked(false);
      }
      //   function editit() {
      //         if (edit == "Edit") setEdit("Save");
      //         else setEdit("Edit");
      //   }
      return (
            <>
                  <div className="flex border-4 items-center justify-between rounded-lg w-full py-3 px-4 pr-0 lg:pr-3 md:pr-3">
                        <input
                              className="lg:w-5 lg:h-5 md:w-5 md:h-5 w-3 h-3"
                              type="checkbox"
                              checked={checked}
                              onChange={(e) => setChecked(e.target.checked)}
                        ></input>
                        {edit == "Save" ? (
                              <input type="text" name="" id="" />
                        ) : checked ? (
                              <h1 className="w-1/2 text-sm break-words text-center line-through [text-decoration-thickness:3px] md:text-2xl lg:text-2xl ">
                                    {todoData}
                              </h1>
                        ) : (
                              <h1 className="w-1/2 text-sm break-words text-center md:text-2xl lg:text-2xl ">
                                    {todoData}
                              </h1>
                        )}

                        <div className="flex gap-2">
                              {/* <button
                                    onClick={editit}
                                    className="font-bold border-white border-2 px-2 py-1 rounded-md"
                              >
                                    {edit}
                              </button> */}
                              <button
                                    onClick={deleteit}
                                    className="font-extrabold block lg:hidden md:hidden px-0 md:px-2 lg:px-2 rounded-md"
                              >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>
                              </button>
                              <button
                                    onClick={deleteit}
                                    className="font-extrabold hidden md:block lg:block px-0 md:px-2 lg:px-2 rounded-md"
                              >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>
                              </button>
                        </div>
                  </div>
            </>
      );
}
export default Todo;
