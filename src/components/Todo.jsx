import { useContext, useState } from "react";
import todoContext from "../context/todoContext";

function Todo({ todoData, id }) {
      const [checked, setChecked] = useState(false);
      const { list, setList } = useContext(todoContext);
      const [edit, setEdit] = useState("Edit");
      const [editfield, setEditField] = useState(todoData);
      function deleteit() {
            const updatedList = list.filter((t) => t.id !== id);
            setList(updatedList);
      }
      function editit() {
            if (edit == "Edit") setEdit("Save");
            else setEdit("Edit");
      }
      return (
            <>
                  <div className="flex border-4 dark:border-white border-black items-center justify-between rounded-lg w-full py-3 px-2 md:px-4 ">
                        <input
                              className="lg:w-5 decoration-white lg:h-5 md:w-5 md:h-5 w-3 h-3"
                              type="checkbox"
                              checked={checked}
                              onChange={(e) => setChecked(e.target.checked)}
                        ></input>
                        {edit == "Save" ? (
                              <input
                                    placeholder="Enter edited todo"
                                    className="border-2 rounded w-32 md:w-auto px-1 py-0 text-xs md:text-xl md:px-3 md:py-1 lg:px-3 lg:py-1 dark:border-white border-black bg-white dark:bg-black"
                                    type="text"
                                    name=""
                                    id=""
                                    onChange={(e) =>
                                          setEditField(e.target.value)
                                    }
                              />
                        ) : checked ? (
                              <h1 className="w-1/2 text-sm break-words text-center line-through [text-decoration-thickness:3px] md:text-2xl lg:text-2xl ">
                                    {editfield}
                              </h1>
                        ) : (
                              <h1 className="w-1/2 text-sm break-words text-center md:text-2xl lg:text-2xl ">
                                    {editfield}
                              </h1>
                        )}

                        <div className="flex gap-2">
                              <button
                                    onClick={editit}
                                    className="font-bold rounded-md justify-center items-center flex lg:hidden md:hidden"
                              >
                                    {edit === "Edit" ? (
                                          <span class="text-2xl  material-symbols-outlined">
                                                edit_note
                                          </span>
                                    ) : (
                                          <span class="text-2xl  material-symbols-outlined">
                                                save
                                          </span>
                                    )}
                              </button>
                              <button
                                    id={`edit${id}`}
                                    onClick={editit}
                                    className="font-bold rounded-md justify-center items-center hidden md:flex lg:flex"
                              >
                                    {edit === "Edit" ? (
                                          <span class="text-4xl material-symbols-outlined">
                                                edit_note
                                          </span>
                                    ) : (
                                          <span class="text-4xl material-symbols-outlined">
                                                save
                                          </span>
                                    )}
                              </button>
                              <button
                                    onClick={deleteit}
                                    className="font-extrabold flex lg:hidden md:hidden px-0 md:px-2 lg:px-2 rounded-md"
                              >
                                    <span class="text-2xl material-symbols-outlined">
                                                delete
                                          </span>
                              </button>
                              <button
                                    id={`delete${id}`}
                                    onClick={deleteit}
                                    className="font-extrabold hidden md:flex lg:flex px-0 md:px-2 lg:px-2 rounded-md"
                              >
                                    <span class="text-4xl material-symbols-outlined">
                                                delete
                                          </span>
                              </button>
                        </div>
                  </div>
            </>
      );
}
export default Todo;
