import Button from "./Button.jsx";
import add from '../assets/add.svg'
import calendar from '../assets/calendar.svg'
import categories from '../assets/categories.svg'

function Footer() {
    return (
        <footer className="w-full flex row-auto justify-around my-4">
            <Button img={calendar}/>
            <Button img={add} className="bg-primary"/>
            <Button img={categories}/>
        </footer>
    )
}

export default Footer
