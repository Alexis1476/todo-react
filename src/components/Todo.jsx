function Todo({todo, handleToggle}) {
    return (
        <li id={todo.id}
            className={`rounded-md text-white px-4 py-2 mb-2 flex ${todo.completed ? 'bg-black' : 'bg-primary'}`}
            onClick={(e) => handleToggle(e.currentTarget.id)}>
            <strong>{todo.name}</strong>
        </li>
    )
}

export default Todo