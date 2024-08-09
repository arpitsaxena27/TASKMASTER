import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import todoContext from "../context/todoContext";

function List({ update }) {
    const{list,setList}=useContext(todoContext);
    useEffect(() => {
        if (update) {
            setList((prevList) => [...prevList, update]);
        }
    }, [update]);

    return (
        <>
            {list.length === 0 ? (
                <p className="text-sm md:text-2xl lg:text-2xl">No tasks available</p>
            ) : (
                list.map((todo, index) => (
                    <Todo key={index} id={index} todoData={todo}/>
                ))
            )}
        </>
    );
}

export default List;
