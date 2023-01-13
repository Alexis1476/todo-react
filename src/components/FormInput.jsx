function FormInput({type, id, name, placeholder}) {
    return (
        <div>
            <label htmlFor={id} className="">{name}</label>
            <input type={type} name={id} id={id} placeholder={placeholder}/>
        </div>
    )
}

export default FormInput
