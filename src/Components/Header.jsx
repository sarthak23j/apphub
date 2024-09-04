import calc from "../Assets/calculator.png"
import clock from "../Assets/clock.png"
import cal from "../Assets/calendar.png"

import DateTimeDisplay from "./DateTimeDisplay"

import "../Styles/Header.css"

export default function Header(Props){

    const handleChangePage = () => {
        Props.setPageState("Home")
    }

    return(
        <header className="home-header">
            <h2 className="home-title" onClick={handleChangePage}>AppHub.</h2>
            <div className="header-icons">
                <img src={cal} alt="calendar" className="header-each-icon" />
                <img src={calc} alt="calculator" className="header-each-icon" />
                <DateTimeDisplay />
                <div className="more-tab header-each-icon">
                    
                </div>
            </div>
        </header>
    )
}
