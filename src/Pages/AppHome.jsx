import "../Styles/AppHome.css"

import pluspng from "../Assets/plus.png"

import Office from "../Assets/OfficeLogo.png"
import Steam from "../Assets/SteamLogo.png"
import SteamPage from "../Assets/SteamBanner.png"
import WordApp from "../Assets/WordLogo.png"
import WordPage from "../Assets/WordBanner.png"
import TeamsApp from "../Assets/TeamsBanner.png"
import TeamsPage from "../Assets/TeamsLogo.png"
import excel from "../Assets/GroupOffice1.png"
import ppt from "../Assets/GroupOffice2.png"
import word from "../Assets/GroupOffice3.png"
import chrome from "../Assets/GroupBrowsers1.png"
import firefox from "../Assets/GroupBrowsers2.png"
import opera from "../Assets/GroupBrowsers3.png"
import edge from "../Assets/GroupBrowsers4.png"

import AppTile from "../Components/AppTile"
import GroupTile from "../Components/GroupTile"
import AddNewTile from "../Components/AddNewTile"
import { useEffect, useState } from "react"
import Header from "../Components/Header"


export default function AppHome(Props) {

  // useEffect(() => {
  //   fetch('/data.json')
  //   .then(response => response.json())
  //   .then(data => setData(data))
  // },[])

  // const [ data,setData ] = useState([])

  // const appTiles = data.map(tile => {
  //   if(tile.type == "app"){
  //     return <AppTile key={tile.sno} appTitle={tile.name} appPath={tile.path} appImg = {tile.img} />
  //   }
  //   else{
  //     return <GroupTile key={tile.sno} grpTitle={tile.name} grpDetails={tile.details} />
  //   }
  // })

  return (
    <>
      <main className="tiles">

        

      {/* Steam */}
      <div className={Props.appList.steam ? "appTileShown" : "appTileHidden" }>
      <AppTile openApp={Props.openApp} setPageState={Props.setPageState} appId={1} bannerImg={SteamPage} appImg={Steam} appTitle="Steam" appPath="C:\Program Files (x86)\Steam\steam.exe"/>
      </div>

      {/* Word */}
      <div className={Props.appList.word ? "appTileShown" : "appTileHidden" }>
      <AppTile openApp={Props.openApp} setPageState={Props.setPageState} appId={2} bannerImg={WordPage} appImg={WordApp} appTitle="Word" appPath="C:\Program Files\Microsoft Office\root\Office16\WINWORD.exe"/>
      </div>
      
      {/* Office Grp */}
      <div className={Props.appList.office ? "appTileShown" : "appTileHidden" }>
      <GroupTile openApp={Props.openApp} grpTitle="Office Tools" data-group="office" grpDetails={
        [
          {
            name:"PowerPoint",
            img:ppt,
            path:"C:/Program Files/Microsoft Office/root/Office16/POWERPNT.exe"
          },
          {                                                  
            name:"Excel",
            img:excel,
            path:"C:/Program Files/Microsoft Office/root/Office16/EXCEL.exe"
          },
          {
            name:"Word",
            img:word,
            path:"C:/Program Files/Microsoft Office/root/Office16/WINWORD.exe"
          }
        ]
      }/>
      </div>
      
      {/* MS Teams */}
      <div className={Props.appList.teams ? "appTileShown" : "appTileHidden" }>
      <AppTile openApp={Props.openApp} setPageState={Props.setPageState} appId={3} bannerImg={TeamsPage} appImg={TeamsApp} appTitle="Teams" appPath="C:\Users\sarth\OneDrive\Desktop\Microsoft Teams.lnk"/>
      </div>

      {/* Browsers */}
      <div className={Props.appList.browser ? "appTileShown" : "appTileHidden" }>
      <GroupTile openApp={Props.openApp} grpTitle="Browsers" data-group="browser" grpDetails={
        [
          {
            name:"Chrome",
            img:chrome,
            path:"C:/Program Files/Google/Chrome/Application/chrome.exe"
          },
          {
            name:"Firefox",
            img:firefox,
            path:"C:/Program Files/Mozilla Firefox/firefox.exe"
          },
          {
            name:"Opera",
            img:opera,
            path:"C:/Users/sarth/AppData/Local/Programs/Opera GX/opera.exe"
          },
          {
            name:"Edge",
            img:edge,
            path:"C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
          }
        ]
      }/>
      </div>

        {/* NewTile */}
        <AddNewTile setAppList={Props.changeAppList} pluspng={pluspng}/>
      </main>
    </>
  );
}

