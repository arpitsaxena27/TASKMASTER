import { useContext, useState } from "react";
import todoContext from "../context/todoContext";

function Todo({ todoData,id }) {
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
                  <div className="flex border-4 items-center justify-between rounded-lg w-full py-3 px-2 md:px-4 ">
                        <input 
                              className="lg:w-5 lg:h-5 md:w-5 md:h-5 w-3 h-3"
                              type="checkbox"
                              checked={checked}
                              onChange={(e) => setChecked(e.target.checked)}
                        ></input>
                        {edit == "Save" ? (
                              <input placeholder="Enter edited todo" className="border-2 rounded w-32 md:w-auto px-1 py-0 text-xs md:text-xl md:px-3 md:py-1 lg:px-3 lg:py-1 border-white" type="text" name="" id="" onChange={e=>setEditField(e.target.value)} />
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
                                    className="font-bold rounded-md  block lg:hidden md:hidden"
                              >
                                    {(edit!="Edit")?<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M840-683v503q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h503l157 157Zm-60 27L656-780H180v600h600v-476ZM479.76-245q43.24 0 73.74-30.26 30.5-30.27 30.5-73.5 0-43.24-30.26-73.74-30.27-30.5-73.5-30.5-43.24 0-73.74 30.26-30.5 30.27-30.5 73.5 0 43.24 30.26 73.74 30.27 30.5 73.5 30.5ZM233-584h358v-143H233v143Zm-53-72v476-600 124Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M160-410v-60h300v60H160Zm0-165v-60h470v60H160Zm0-165v-60h470v60H160Zm360 580v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T862.09-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>}
                              </button>
                              <button id={`edit${id}`}
                                    onClick={editit}
                                    className="font-bold rounded-md  hidden md:block lg:block"
                              >
                                    {(edit!="Edit")?<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M840-683v503q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h503l157 157Zm-60 27L656-780H180v600h600v-476ZM479.76-245q43.24 0 73.74-30.26 30.5-30.27 30.5-73.5 0-43.24-30.26-73.74-30.27-30.5-73.5-30.5-43.24 0-73.74 30.26-30.5 30.27-30.5 73.5 0 43.24 30.26 73.74 30.27 30.5 73.5 30.5ZM233-584h358v-143H233v143Zm-53-72v476-600 124Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M160-410v-60h300v60H160Zm0-165v-60h470v60H160Zm0-165v-60h470v60H160Zm360 580v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5T862.09-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>}
                              </button>
                              <button
                                    onClick={deleteit}
                                    className="font-extrabold block lg:hidden md:hidden px-0 md:px-2 lg:px-2 rounded-md"
                              >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>
                              </button>
                              <button id={`delete${id}`}
                                    onClick={deleteit}
                                    className="font-extrabold hidden md:block lg:block px-0 md:px-2 lg:px-2 rounded-md"
                              >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>
                              </button>
                        </div>
                  </div>
            </>
      );
}
export default Todo;
