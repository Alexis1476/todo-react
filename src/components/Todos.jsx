import Todo from "./Todo.jsx";

function Todos({todos, handleToggle}) {
    return (
        <ul className="grow h-2 overflow-auto">
            {todos.map(todo => <Todo todo={todo} key={todo.id} name={todo.name} handleToggle={handleToggle}/>)}
        </ul>
    )
}

export default Todos