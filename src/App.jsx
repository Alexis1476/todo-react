import React, {useState} from 'react'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Todos from "./components/Todos.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Button from "./components/Button.jsx";

function App() {
    const [todos, setTodos] = useState([]);
    const addTask = (value) => {
        let copy = [...todos, {id: todos.length + 1, name: value, completed: false}]
        setTodos(copy)
    }
    const editTodo = (id, newName) => {
        let filtered = todos.map((todo) => {
            if (todo.id === id)
                return {...todo, name: newName}
            return todo
        })
        setTodos(filtered)
    }
    const deleteTodo = (id) => {
        let filtered = todos.filter((todo) => id !== todo.id)
        setTodos(filtered)
    }
    const handleToggle = (id) => {
        let mapped = todos.map((task) => {
            return task.id === Number(id) ? {...task, completed: !task.completed} : {...task}
        })
        setTodos(mapped)
    }
    const handleFilter = (e) => {
        let filtered = todos.filter((task) => !task.completed)
        setTodos(filtered)
    }
    return (
        <div className="App w-11/12 flex m-auto flex-col h-full min-h-screen max-w-2xl">
            <Header text="To Do"/>
            <Todos todos={todos} handleToggle={handleToggle} editTodo={editTodo} deleteTodo={deleteTodo}/>
            <TodoForm addTask={addTask}/>
            <Button onClick={handleFilter} text="Clear" className="bg-red-700"/>
            <Footer/>
        </div>
    )
}

export default App