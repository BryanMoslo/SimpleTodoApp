import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

function TodoForm({addTodo}) {
    
    const [userInput, setUserInput] = useState();
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== ''){
            addTodo(userInput);
            setUserInput('');
        }
    }

    return (
        <div className='bg-green-400 rounded-b-lg px-3 py-2 pl-14'>
            <form onSubmit={handleSubmit} className="flex justify-between">
                <input className='placeholder:italic placeholder:text-slate-800 placeholder:text-white text-white text-xl bg-green-400 border-0 py-3 px-3 w-full outline-none' placeholder='What have for today?' type="text" value={userInput} onChange={handleChange} />
                <button className='ml-5'><FaAngleRight className='text-white text-2xl'/></button>
            </form>
        </div>
    )
}

export default TodoForm;