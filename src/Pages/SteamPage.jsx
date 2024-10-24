import { shell } from "electron"

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
                    <h5 className="page-info">Total Time Spent : 17 hours 2 minutes 13 seconds</h5>
                    <h5 className="page-info">30 day log : 32 minutes 49 seconds</h5>
                </div>
            </div>
        </main>
    )
}