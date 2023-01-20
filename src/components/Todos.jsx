import Todo from "./Todo.jsx";
import React from "react";

function Todos({todos, handleToggle, editTodo, deleteTodo}) {
    return (
        <>
            {todos.length <= 0 || <p className="mb-2">To do : {todos.filter(task => !task.completed).length}</p>}
            <ul className="grow h-2 overflow-auto">
                {todos.map(todo =>
                    <Todo todo={todo} key={todo.id} name={todo.name} handleToggle={handleToggle}
                          handleEdit={editTodo} handleDelete={deleteTodo}/>)
                }
            </ul>
        </>
    )
}

export default Todos