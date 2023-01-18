function ImgButton({href = '#', title, img, className}) {
    return (
        <a href={href} title={title} className={`p-6 flex br-2 rounded-2xl hover:opacity-70 ${className}`}>
            <img src={img} alt=""/>
        </a>
    )
}

export default ImgButton
