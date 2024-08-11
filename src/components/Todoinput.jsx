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
            <div className="border-2 border-black dark:border-white flex w-full rounded-md mb-10">
                  <input
                        className="outline-none bg-transparent placeholder-[#272727] dark:placeholder-[#a6a6a6] text-sm md:text-xl lg:text-xl w-full px-3 py-1"
                        placeholder="Enter New Todo"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                  ></input>
                  <button
                        onClick={handleAddClick}
                        className="px-3 py-1 bg-black dark:bg-white dark:text-black text-white justify-center items-center font-bold flex lg:hidden md:hidden"
                  >
                        <span class="text-2xl material-symbols-outlined">
                                                add
                                          </span>
                  </button>
                  <button id="add"
                        onClick={handleAddClick}
                        className="px-3 py-1 bg-black dark:bg-white dark:text-black text-white justify-center items-center hidden md:block lg:flex font-bold"
                  >
                        <span class="text-4xl material-symbols-outlined">
                                                add
                                          </span>
                  </button>
            </div>
      );
}

export default TodoInput;
