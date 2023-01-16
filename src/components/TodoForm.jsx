import {useState} from "react";

function TodoForm({addTask}) {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    }
    return (
        <>
            <div className="relative">
                <input type="text" id="name"
                       value={input}
                       onChange={(e) => {
                           setInput(e.currentTarget.value)
                       }}
                       className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-700 bg-transparent rounded-lg border-2
                    border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                       placeholder=" "/>
                <label htmlFor="name"
                       className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label>
            </div>
            <button
                onClick={handleSubmit}
                className={`p-2 px-4 text-white flex br-2 rounded-2xl bg-primary w-fit mx-auto hover:opacity-70`}>Add
            </button>
        </>
    )
}

export default TodoForm