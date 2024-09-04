import { shell } from "electron"

import tileArt from "../Assets/steam.png"
import bannerArt from "../Assets/SteamPage.png"
import backbtn from "../Assets/back.png"

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
            <img src={bannerArt} alt="" className="banner-bg" />
            <div className="launch-button" onClick={handleClick}>
                <h2 className="launch-btn-text">Launch Now</h2>
            </div>
            <div className="below-banner">
                <img src={tileArt} alt="" className="tile-bg" />
                <div className="page-text">
                    <h2 className="page-title">Steam</h2>
                    <h5 className="page-info">Total Time Spent :</h5>
                    <h5 className="page-info">30 day log : </h5>
                </div>
            </div>
        </main>
    )
}