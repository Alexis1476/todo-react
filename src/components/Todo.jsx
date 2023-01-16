function Todo({id, name}) {
    return (
        <li className="bg-primary rounded-md text-white px-4 py-2 mb-2 flex" key={id}>
            <input type="checkbox" className="mr-2"/>
            <strong>{name}</strong>
        </li>
    )
}

export default Todo