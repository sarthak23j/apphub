import { useState, useEffect, useRef } from "react"

import calc from "../Assets/calculator.png"
import clock from "../Assets/clock.png"
import cal from "../Assets/calendar.png"

import CalendarTile from "./CalendarTile"
import CalculatorTile from "./CalculatorTile"
import DateTimeDisplay from "./DateTimeDisplay"

import "../Styles/Header.css"

export default function Header(Props) {

    const [calcShown, setCalcShown] = useState(false);
    const [calShown, setCalShown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApps, setFilteredApps] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const searchBarRef = useRef(null);

    const displayNames = {
        'steam': 'Steam',
        'teams': 'Microsoft Teams',
        'word': 'Microsoft Word',
        'browser': 'Browsers',
        'office': 'Office Tools'
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    
        // Filter only individual apps (exclude groups 'browser' and 'office')
        const results = Object.keys(Props.appList).filter(app => {
            // Check if app is shown AND is not a group AND matches search term
            return Props.appList[app] && 
                   app !== 'browser' && 
                   app !== 'office' && 
                   (app.toLowerCase().includes(value.toLowerCase()) ||
                    displayNames[app].toLowerCase().includes(value.toLowerCase()));
        });
    
        setFilteredApps(results);
        setIsDropdownVisible(value.length > 0);
    };

    // In Header.jsx, update the handleAppClick function
    const handleAppClick = (app) => {
        console.log(`Handling ${app} : ${displayNames[app]}`);
        
        // Switch directly to the appropriate page
        let newPageState;
        switch(app) {
            case 'steam':
                newPageState = "Steam";
                break;
            case 'teams':
                newPageState = "Teams";
                break;
            case 'word':
                newPageState = "Word";
                break;
            default:
                newPageState = "Home";
        }
        Props.setPageState(newPageState);
    
        setSearchTerm('');
        setFilteredApps([]);
        setIsDropdownVisible(false);
    };

    const handleBlur = () => {
        // Delay hiding the dropdown to allow click events on dropdown items
        setTimeout(() => {
            setIsDropdownVisible(false);
        }, 200);
    };

    const handleFocus = () => {
        if (searchTerm && filteredApps.length > 0) {
            setIsDropdownVisible(true);
        }
    };

    useEffect(() => {
        // Hide dropdown when clicking outside of search bar and dropdown
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function calcClicked() {
        setCalcShown(!calcShown);
    }

    function calClicked() {
        setCalShown(!calShown);
    }

    const handleChangePage = () => {
        Props.setPageState("Home")
    }

    return (
        <header className="home-header">
            <h2 className="home-title" onClick={handleChangePage}>AppHub.</h2>

            {/* <div className="search-bar">
                <input type="text" placeholder="Search..." className="input-bar" name="search" />
            </div> */}

            <div className="search-bar" ref={searchBarRef}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="input-bar"
                    name="search"
                    value={searchTerm}
                    onChange={handleSearch}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
                {isDropdownVisible && searchTerm && filteredApps.length > 0 && (
                    <div className="dropdown">
                        {filteredApps.map(app => (
                            <div
                                key={app}
                                className="dropdown-item"
                                onClick={() => handleAppClick(app)}
                            >
                                {displayNames[app]}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="header-icons">
                <img src={cal} alt="calendar" className="header-each-icon" onClick={calClicked} />
                <img src={calc} alt="calculator" className="header-each-icon" onClick={calcClicked} />
                <DateTimeDisplay />
                <div className="more-tab header-each-icon">

                </div>
            </div>

            {calShown ? <CalendarTile toggleOff={calClicked} /> : <></>}
            {calcShown ? <CalculatorTile toggleOff={calcClicked} /> : <></>}

        </header>
    )
}
