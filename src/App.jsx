import React, {useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Todos from "./components/Todos.jsx";
import TodoForm from "./components/TodoForm.jsx";

const tasks = [
    {id: 1, name: 'Task1', completed: true},
    {id: 2, name: 'Task2', completed: false},
    {id: 3, name: 'Task3', completed: false},
]

function App() {
    const [todos, setTodos] = useState(tasks);
    const addTask = (value) => {
        let copy = [...todos, {id: todos.length + 1, name: value}]
        setTodos(copy)
    }
    const handleToggle = (id) => {
        console.log(id)
        let mapped = todos.map((task) => {
            return task.id === Number(id) ? {...task, completed: !task.completed} : {...task}
        })
        console.log(todos);
        setTodos(mapped)
    }
    return (
        <div className="App w-11/12 flex m-auto flex-col h-full min-h-screen max-w-2xl">
            <Header text="To Do"/>
            <Todos todos={todos} handleToggle={handleToggle}/>
            <TodoForm addTask={addTask}/>
            <Footer/>
        </div>
    )
}

export default App