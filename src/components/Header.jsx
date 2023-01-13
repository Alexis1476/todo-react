function Header({text}) {
    const img = 'logo.svg'
    return (
        <div className="w-full flex justify-between py-4 border-b-4 border-primary">
            <img src={img} alt="Logo"/>
            <h1>{text}</h1>
        </div>
    )
}

export default Header
