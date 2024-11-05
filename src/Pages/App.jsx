import { useState } from "react";
import { shell } from "electron";

import Header from "../Components/Header"
import WordPage from "./WordPage"
import SteamPage from "./SteamPage"
import TeamsPage from "./TeamsPage"
import AppHome from "./AppHome"

export default function App(){

    const [pageState, setPageState ] = useState("Home")
    const [ appsShown, setAppsShown] = useState({
        steam: true,
        word: true,
        office: true,
        browser: false,
        teams: true
    })

    async function openApp(appPath){
        shell.openExternal(appPath)
    }

    return (
        <>
            <Header appList={appsShown} setPageState={setPageState} />

            {(pageState == "Home") ? <AppHome changeAppList={setAppsShown} appList={appsShown} setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Steam") ? <SteamPage setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Word") ? <WordPage setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Teams") ? <TeamsPage setPageState={setPageState} openApp={openApp} /> :
            <AppHome changeAppList={setAppsShown} appList={appsShown} changePages={setPageState} openApp={openApp} /> 
            }
        </>
    )
}