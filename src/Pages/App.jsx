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

    const handleGroupFocus = (groupName) => {
        setPageState("Home");
        setTimeout(() => {console.log("wait for home page")}, 1000)
        requestAnimationFrame(() => {
          const groupElement = document.querySelector(`[data-group="${groupName}"]`);
          if (groupElement) {
            const clickEvent = new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true
            });
            groupElement.dispatchEvent(clickEvent);
          } else {
            console.warn(`Group element with data-group="${groupName}" not found`);
          }
        });
      };

    return (
        <>
            <Header 
                appList={appsShown} 
                setPageState={setPageState} 
                handleGroupFocus = {handleGroupFocus}
                // Add a new prop for handling group focus
                // handleGroupFocus={(groupName) => {
                //     setPageState("Home");
                //     // Add a slight delay to ensure we're on home page first
                //     setTimeout(() => {
                //         // You might need to create a ref or state in AppHome to handle this
                //         const groupElement = document.querySelector(`[data-group="${groupName}"]`);
                //         if (groupElement) {
                //             groupElement.click();
                //         }
                //     }, 1000);
                // }}
            />

            {(pageState == "Home") ? <AppHome changeAppList={setAppsShown} appList={appsShown} setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Steam") ? <SteamPage setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Word") ? <WordPage setPageState={setPageState} openApp={openApp} /> :
            (pageState == "Teams") ? <TeamsPage setPageState={setPageState} openApp={openApp} /> :
            <AppHome changeAppList={setAppsShown} appList={appsShown} changePages={setPageState} openApp={openApp} /> 
            }
        </>
    )
}