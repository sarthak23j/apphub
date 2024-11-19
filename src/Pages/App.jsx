import { useState, useEffect } from "react";
import { shell } from "electron";
import * as fs from "fs";

import Header from "../Components/Header"
import WordPage from "./WordPage"
import SteamPage from "./SteamPage"
import TeamsPage from "./TeamsPage"
import AppHome from "./AppHome"



export default function App() {

  const dataPath = "src/data.json"
  
  function readData() {
    const dataPath = "src/data.json"
    console.log("INSIDE READ DATA NOWWWW")
    try {
      const data = fs.readFileSync(dataPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading data:', error);
      return null;
    }
  }

  const appData = (readData())

  function writeData(dataToWrite) {
    const dataPath = "src/data.json"
    try {
      fs.writeFileSync(dataPath, JSON.stringify(dataToWrite));
    } catch (error) {
      console.error('Error writing data:', error);
    }
  }

  const [pageState, setPageState] = useState("Home")
  const [appsShown, setAppsShown] = useState(appData)

  useEffect(() => {
    console.log("appsShown state changed:", appsShown);
    console.log("writing into data.json now")
    writeData(appsShown)
    console.log("done writing into data.json")
  }, [appsShown]);

  async function openApp(appPath) {
    shell.openExternal(appPath)
  }

  const handleGroupFocus = (groupName) => {
    setPageState("Home");
    setTimeout(() => { console.log("wait for home page") }, 1000)
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
        handleGroupFocus={handleGroupFocus}
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