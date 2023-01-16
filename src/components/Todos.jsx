import Todo from "./Todo.jsx";

function Todos({todos}) {
    return (
        <ul className="grow">
            {todos.map(todo => <Todo name={todo.name}/>)}
        </ul>
    )
}

export default Todos