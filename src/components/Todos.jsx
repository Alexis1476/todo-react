import Todo from "./Todo.jsx";

function Todos({todos}) {
    return (
        <ul className="grow h-2 overflow-auto">
            {todos.map(todo => <Todo todo={todo} key={todo.id} name={todo.name}/>)}
        </ul>
    )
}

export default Todos