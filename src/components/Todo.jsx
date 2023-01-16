function Todo({todo}) {
    return (
        <li className="bg-primary rounded-md text-white px-4 py-2 mb-2 flex">
            <input type="checkbox" className="mr-2"/>
            <strong>{todo.name}</strong>
        </li>
    )
}

export default Todo