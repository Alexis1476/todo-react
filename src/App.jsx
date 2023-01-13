import React, {useState} from 'react'
import './App.css'
import FormInput from './components/FormInput.jsx'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Todos from "./components/Todos.jsx";
import FormButton from "./components/FormButton.jsx";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {name: 'Task1'},
                {name: 'Task2'}
            ]
        }
    }

    render() {
        const todos = this.state.todos

        return (
            <div className="App w-11/12 flex m-auto flex-col h-full min-h-screen">
                <Header text="To Do"/>
                <Todos todos={todos}/>
                <FormInput type="text" name="Name" id="name"/>
                <FormButton name="Add"/>
                <Footer/>
            </div>
        )
    }
}

export default App
