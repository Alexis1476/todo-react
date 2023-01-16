function Todos({todos}) {
    return (
        <ul className="grow">
            {todos.map(todo => <Todo name={todo.name}/>)}
        </ul>
    )
}

function Todo({name}) {
    return (
        <li className="bg-primary rounded-md text-white px-4 py-2 mb-2 flex">
            {/* TODO : Add Key*/}
            <strong>{name}</strong>
        </li>
    )
}

export default Todos