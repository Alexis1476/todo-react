function Button({text = 'Button', type = 'button', onClick, className}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`m-2 p-2 px-4 text-white flex br-2 rounded-2xl w-fit mx-auto hover:opacity-70 ${className}`}>{text}
        </button>
    )
}

export default Button
