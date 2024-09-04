import { useState } from "react";
import { shell } from "electron";

import Header from "../Components/Header"
import WordPage from "./WordPage"
import SteamPage from "./SteamPage"
import AppHome from "./AppHome"

export default function Layout(){

    const [pageState, setPageState ] = useState("Home")

    async function openApp(appPath){
        shell.openExternal(appPath)
    }

    return (
        <>
            <Header setPageState={setPageState} />

            {(pageState == "Home") ? <AppHome setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Steam") ? <SteamPage setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Word") ? <WordPage setPageState={setPageState} openApp={openApp} /> : <AppHome changePages={setPageState} openApp={openApp} /> 
            }
        </>
    )
}