import backbtn from "../Assets/back.png"

import ImageContexts from "../Components/imageContexts"
import "../Styles/SteamPage.css"

export default function SteamPage(Props){

    async function handleClick(){
        Props.openApp("C:/Program Files (x86)/Steam/steam.exe")
    }

    const handlePageChange = () => {
        Props.setPageState("Home")
    }

    return (
        <main className="steam-main">
            <img src={backbtn} className="go-home" onClick={handlePageChange}/>

            <ImageContexts cls="banner-bg" imageName="SteamBanner"/>

            {/* <img src={bannerArt} alt="" className="banner-bg" /> */}
            <div className="launch-button" onClick={handleClick}>
                <h2 className="launch-btn-text">Launch Now</h2>
            </div>
            <div className="below-banner">
                <ImageContexts cls="tile-bg" imageName="SteamLogo"/>
                {/* <img src={tileArt} alt="" className="tile-bg" /> */}
                <div className="page-text">
                    <h2 className="page-title">Steam</h2>
                    <h5 className="page-info">Time Spent :</h5>
                </div>
            </div>
        </main>
    )
}

/*
here is my plan : 

we initially import a local file stored in assets/data.json into app.jsx for the json object holding time spent and last used data for the 3 apps

whenever a user presses "launch", we record a "start timestamp", and set a "recording flag" to true

whenever a user closes (that is, app.jsx is focussed again), we record a "stop timestamp" if the recording flag was true, setting it back to false

then, 
last used = stop timestamp
time spent = stop - start timestamps

would this work? give me reasons why this would not work for getting these 2 datas in a controlled environment

*/