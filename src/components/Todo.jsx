import Button from "./Button.jsx";
import {useState} from "react";

function Todo({todo, handleToggle, handleEdit, handleDelete}) {
    const [isEditing, setEditing] = useState(false)
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        // S'il n'y a pas eu de modifications
        if (!input.trim())
            return setEditing(false)
        handleEdit(todo.id, input)
        setInput('')
        setEditing(false)
    }
    const editTemplate = (
        <form className="flex items-center space-x-2 mb-2" onSubmit={handleSubmit}>
            <div className="relative grow">
                <input type="text" id={todo.id}
                       value={input || todo.name}
                       onChange={(e) => setInput(e.target.value)}
                       className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-2
                    border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                       placeholder=" "/>
                <label htmlFor={todo.id}
                       className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
            </div>
            <Button text="Cancel" className="bg-gray-500" onClick={() => setEditing(false)} type="button"/>
            <Button text="Save" className="bg-primary" type="submit"/>
        </form>
    )
    const viewTemplate = (
        <li className={`bg-primary rounded-md text-white px-4 mb-2 flex cursor-pointer items-center justify-between ${todo.completed ? 'bg-gray-700' : ''}`}>
            <div className="flex space-x-2">
                <input type="checkbox" id={todo.id} defaultChecked={todo.completed}
                       onChange={(e) => handleToggle(e.currentTarget.id)}/>
                <label className={todo.completed ? 'line-through' : ''} htmlFor={todo.id}>{todo.name}</label>
            </div>
            <div className="flex space-x-2">
                <Button onClick={() => setEditing(true)} type="button" className="bg-gray-500" text="Edit"/>
                <Button onClick={() => handleDelete(todo.id)} type="button" className="bg-gray-500" text="Delete"/>
            </div>
        </li>
    )
    return (
        <>
            {isEditing ? editTemplate : viewTemplate}
        </>
    )
}

export default Todo