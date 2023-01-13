import {useState} from 'react'
import './App.css'
import FormInput from './components/FormInput.jsx'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Todos from "./components/Todos.jsx";

function App() {
    const [todos, setTodos] = useState(0)

    return (
        <div className="App w-11/12 flex m-auto flex-col h-full min-h-screen">
            <Header text="To Do"/>
            <Todos/>
            {/*<FormInput type="text" name="Name" id="name" placeholder="Alexis Rojas"/>*/}
            <Footer/>
        </div>
    )
}

export default App
