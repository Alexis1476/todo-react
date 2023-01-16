import React, {useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Todos from "./components/Todos.jsx";
import TodoForm from "./components/TodoForm.jsx";

function App() {
    const [todos, setTodos] = useState([{name: 'Task1'}]);
    const addTask = (value) => setTodos([...todos, {name: value}])

    return (
        <div className="App w-11/12 flex m-auto flex-col h-full min-h-screen">
            <Header text="To Do"/>
            <Todos todos={todos}/>
            <TodoForm addTask={addTask}/>
            <Footer/>
        </div>
    )
}

export default App