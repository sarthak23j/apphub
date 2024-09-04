import { ipcRenderr, shell } from "electron"

import "../Styles/AppTile.css"

export default function AppTile(Props){

    const handlePageChange = () => {
        Props.setPageState(Props.appTitle)
    }

    async function handleAppLaunch(){
        Props.openApp(Props.appPath)
        console.log("clicked!")
    }

    return(
        <div className="app-tile">
            <img draggable={false} src={Props.appImg} alt={Props.appTitle} className="app-tile-img" onClick={handlePageChange}/>
            <div className="tile-launch-button" onClick={handleAppLaunch}/>
            <div className="tile-triangle" onClick={handleAppLaunch}/>
            <div className="tile-title">{Props.appTitle}</div>
        </div>
    )
}