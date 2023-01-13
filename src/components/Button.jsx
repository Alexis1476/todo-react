function Button({href = '#', title, img, className}) {
    return (
        <a href={href} title={title} className={`p-6 flex br-2 rounded-2xl ${className}`}>
            <img src={img} alt=""/>
        </a>
    )
}

export default Button
