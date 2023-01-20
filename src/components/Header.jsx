function Header({text}) {
    const img = 'logo.svg'
    return (
        <header className="w-full flex justify-between py-4 border-b-2 border-primary mb-4">
            <img src={img} alt="Logo"/>
            <h1>{text}</h1>
        </header>
    )
}

export default Header
