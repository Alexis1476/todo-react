function FormButton(props) {
    return (
        <button className={`p-2 px-4 text-white flex br-2 rounded-2xl bg-primary w-fit mx-auto hover:opacity-70 ${props.className}`}>{props.name}</button>
    )
}

export default FormButton