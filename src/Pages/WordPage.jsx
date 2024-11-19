import { useState, useEffect } from "react"
import * as fs from "fs"

import tileArt from "../Assets/WordLogo.png"
import bannerArt from "../Assets/WordBanner.png"
import backbtn from "../Assets/back.png"

import "../Styles/SteamPage.css"

export default function WordPage(Props){

    const [appData, setAppData] = useState({ timeSpent: 0, lastUsed: null });
    const [flag, setFlag] = useState(false);
    const [timeStamps, setTimeStamps] = useState({ start: 0, end: 0 });

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fs.promises.readFile('./src/WordData.json', 'utf8');
                const jsonData = JSON.parse(data);
                setAppData(jsonData);
            } catch (error) {
                console.error('Error reading data:', error);
            }
        }
        fetchData();
    }, []);

    async function handleStart() {
        Props.openApp("C:/Program Files/Microsoft Office/root/Office16/WINWORD.exe")
        setFlag(true);
        const startTime = new Date().getTime();
        setTimeStamps(old => ({
            ...old,
            start: startTime
        }));
    }

    async function handleClose() {
        setFlag(false);
        const endTime = new Date().getTime();
        
        // Update the timeStamps state
        setTimeStamps(old => ({
            ...old,
            end: endTime
        }));
    
        // Calculate time spent using the endTime directly
        const timeSpent = (endTime - timeStamps.start) + appData.timeSpent;
    
        // Update appData with the new values
        setAppData(prevData => ({
            ...prevData,
            lastUsed: endTime,
            timeSpent: timeSpent
        }));
    
        console.log(`TIMESTAMPS :: Start: ${timeStamps.start}, End: ${endTime}`);
        console.log(appData);
    
        // Write the updated data to file
        await writeData({ ...appData, timeSpent });
    }

    async function writeData(WriteData) {
        const data = JSON.stringify(WriteData, null, 2);
        await fs.promises.writeFile('./src/WordData.json', data, 'utf8');
    }

    const handlePageChange = () => {
        Props.setPageState("Home");
    };

    function toReadableTimes(temp) {
        const hours = Math.floor(temp / 3600000);
        const minutes = Math.floor((temp / 60000) % 60);
        const seconds = Math.floor((temp / 1000) % 60);

        let resStr = ""

        if(hours > 0){
            resStr += hours + " hours, "
        }
        if(minutes > 0){
            resStr += minutes + " minutes, "
        }
        if(seconds > 0){
            resStr += seconds + " seconds"
        }
        return resStr;
    }

    function dateTimeConv(temp) {
        if (!temp) return 'Never used'; // Handle null case
        const date = new Date(temp);
        const format = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        const formattedDate = date.toLocaleString('en-US', format);
        return formattedDate;
    }

    return (
        <main className="steam-main">
            <img src={backbtn} className="go-home" onClick={handlePageChange}/>
            <img src={bannerArt} alt="" className="banner-bg" />
            <div className="launch-button" onClick={handleStart}>
                <h2 className="launch-btn-text">Launch Now</h2>
            </div>
            <div className="below-banner">
                <img src={tileArt} alt="" className="tile-bg" />
                <div className="page-text">
                    <h2 className="page-title">Microsoft Word</h2>
                    <h5 className="page-info">Time Spent : {toReadableTimes(appData.timeSpent)}</h5>
                    <h5 className="page-info">Last Used : {dateTimeConv(appData.lastUsed)}</h5>
                </div>
            </div>
            {
                flag ? <div className="close-button" onClick={handleClose} />
                : null
            }
        </main>
    )
}