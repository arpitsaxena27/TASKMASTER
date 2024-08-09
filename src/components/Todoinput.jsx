import { useState } from "react";

function TodoInput({ add, setValues }) {
      const [inputValue, setInputValue] = useState("");

      const handleInputChange = (e) => {
            const newValue = e.target.value;
            setInputValue(newValue);
            setValues(newValue);
      };
      const handleKeyPress = (e) => {
            if (e.key === "Enter") {
                  handleAddClick();
            }
      };
      const handleResetClick = () => {
            setInputValue("");
      };

      const handleAddClick = () => {
            add();
            handleResetClick();
      };

      return (
            <div className="border-2 border-white flex w-full rounded-md mb-10">
                  <input
                        className="outline-none text-sm md:text-xl lg:text-xl w-full px-3 mx-1"
                        placeholder="Enter New Todo"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                  ></input>
                  <button
                        onClick={handleAddClick}
                        className=" bg-white text-black font-bold block lg:hidden md:hidden"
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg>
                  </button>
                  <button id="add"
                        onClick={handleAddClick}
                        className="px-3 py-1 bg-white text-black hidden md:block lg:block font-bold"
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg>
                  </button>
            </div>
      );
}

export default TodoInput;
