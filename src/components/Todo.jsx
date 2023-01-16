function Todo({todo, handleToggle}) {
    return (
        <li id={todo.id}
            className={`bg-primary rounded-md text-white px-4 py-2 mb-2 flex ${!todo.completed || 'line-through'}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}>
            <strong>{todo.name}</strong>
        </li>
    )
}

export default Todo