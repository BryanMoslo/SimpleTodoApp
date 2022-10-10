import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

function TodoItem({todo, onComplete, onDeleteItem}) {
    const decoration = todo.completed ? "line-through" : "";

    return (
        <div className="flex">
            <div className="block px-4 border border-x-0 border-b-0 border-solid border-slate-200 flex items-center justify-center">
                <div className="w-6">
                    <label className="check-container relative cursor-pointer ">
                        <input 
                            className='opacity-0'
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => onComplete(todo.id)}
                        />
                        <span className="checkmark absolute top-0 left-0 h-6 w-6 bg-gray-200 after:content-[''] after:absolute after:hidden"></span>
                    </label>
                </div>
            </div>
            <div className="border border-b-0 border-r-0 p-4 w-full flex items-center justify-between">
                <span className={`${decoration ? "line-through" : ""}`}>{todo.task}</span>
                
                <button className="add-btn" onClick={() => onDeleteItem(todo.id)}><FaTrashAlt className='text-red-400' /></button>
            </div>
        </div>
    )
}

export default TodoItem;