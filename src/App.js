import { useState } from 'react';
import data from './data.json';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState(data);
  
  const onComplete = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const onDeleteItem = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const addTodo = (todoTitle) => {
    let newTodo = {
      "id": todos.length + 1,
      "task": todoTitle,
      "completed": false
    }

    setTodos([...todos, newTodo])
  }

  return (
    <div className="backdrop-brightness-90 h-screen flex justify-center items-center">
      <div className="todo-modal bg-white rounded-lg w-3/6 h-max">
        <h3 className="text-3xl text-center text-green-500 py-5">Today</h3>
        <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
