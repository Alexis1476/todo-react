import FormInput from "./FormInput.jsx";

function Todos(props) {
    return (
        <ul className="grow">
            <Todo/>
            {/*TODO : Todos*/}
        </ul>
    )
}

function Todo() {
    return (
        <li className="bg-primary rounded-md text-white px-4 py-2 flex">
            {/* TODO : Add Key*/}
            <strong>Tâche 1</strong>
        </li>
    )
}

export default Todos