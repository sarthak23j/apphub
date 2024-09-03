
import calc from "../Assets/calculator.png"
import clock from "../Assets/clock.png"
import cal from "../Assets/calendar.png"

import "../Styles/Header.css"

export default function Header(){
    return(
        <header className="home-header">
            <h2 className="home-title">App</h2>
            <div className="header-icons">
                <img src={cal} alt="calendar" className="header-each-icon" />
                <img src={calc} alt="calculator" className="header-each-icon" />
                <img src={clock} alt="clock" className="header-each-icon" />
            </div>
        </header>
    )
}
