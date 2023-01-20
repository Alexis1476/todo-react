import ImgButton from "./ImgButton.jsx";
import add from '../assets/add.svg'
import calendar from '../assets/calendar.svg'
import categories from '../assets/categories.svg'

function Footer() {
    return (
        <footer className="w-full flex row-auto justify-around my-4">
            <ImgButton img={calendar}/>
            <ImgButton img={add} className="bg-primary"/>
            <ImgButton img={categories}/>
        </footer>
    )
}

export default Footer
