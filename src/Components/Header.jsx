import { useState } from "react"

import calc from "../Assets/calculator.png"
import clock from "../Assets/clock.png"
import cal from "../Assets/calendar.png"

import CalendarTile from "./CalendarTile"
import CalculatorTile from "./CalculatorTile"
import DateTimeDisplay from "./DateTimeDisplay"

import "../Styles/Header.css"

export default function Header(Props){

    const [ calcShown,setCalcShown ] = useState(false);
    const [ calShown,setCalShown ] = useState(false);

    function calcClicked(){
        setCalcShown(!calcShown);
    }

    function calClicked(){
        setCalShown(!calShown);
    }

    const handleChangePage = () => {
        Props.setPageState("Home")
    }

    return(
        <header className="home-header">
            <h2 className="home-title" onClick={handleChangePage}>AppHub.</h2>
            <div className="search-bar">
                <input type="text" placeholder="Search..." className="input-bar" name="search" />
            </div>
            <div className="header-icons">
                <img src={cal} alt="calendar" className="header-each-icon" onClick={calClicked}/>
                <img src={calc} alt="calculator" className="header-each-icon" onClick={calcClicked}/>
                <DateTimeDisplay />
                <div className="more-tab header-each-icon">
                    
                </div>
            </div>

            {calShown ?  <CalendarTile toggleOff={calClicked}/> : <></>}
            {calcShown ?  <CalculatorTile toggleOff={calcClicked}/> : <></>}

        </header>
    )
}
