import "../Styles/AppHome.css"

import Steam from "../Assets/steam.png"
import word from "../Assets/word.png"
import excel from "../Assets/excel.png"
import ppt from "../Assets/ppt.png"
import Office from "../Assets/office.png"
import pluspng from "../Assets/plus.png"
import WordApp from "../Assets/WordApp.png"
import SteamPage from "../Assets/SteamPage.png"
import WordPage from "../Assets/WordPage.png"

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
        
      <AppTile openApp={Props.openApp} setPageState={Props.setPageState} appId={1} bannerImg={SteamPage} appImg={Steam} appTitle="Steam" appPath="C:\Program Files (x86)\Steam\steam.exe"/>

      <AppTile openApp={Props.openApp} setPageState={Props.setPageState} appId={2} bannerImg={WordPage} appImg={WordApp} appTitle="Word" appPath="C:\Program Files\Microsoft Office\root\Office16\WINWORD.exe"/>
      
      <GroupTile openApp={Props.openApp} grpTitle="Office Tools" grpDetails={
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

      <AddNewTile pluspng={pluspng}/>
      </main>
    </>
  );
}
