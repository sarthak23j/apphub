import { shell } from "electron/common"
import "../Styles/AppTile.css"

export default function AppTile(Props){

    async function handleAppLaunch(){
        shell.openExternal(Props.appPath)
    }

    return(
        <div className="app-tile">
            <img draggable={false} src={Props.appImg} alt={Props.appTitle} className="app-tile-img" />
            <div className="tile-launch-button" onClick={handleAppLaunch}/>
            <div className="tile-triangle" onClick={handleAppLaunch}/>
            <div className="tile-title">{Props.appTitle}</div>
        </div>
    )
}