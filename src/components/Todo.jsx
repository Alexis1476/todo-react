function Todo({todo, handleToggle}) {
    return (
        <li id={todo.id}
            className={`bg-primary rounded-md text-white px-4 py-2 mb-2 flex cursor-pointer ${!todo.completed || 'line-through bg-gray-700'}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}>
            <strong>{todo.name}</strong>
        </li>
    )
}

export default Todo