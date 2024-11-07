import { useState, useEffect } from "react"
import "../Styles/GroupTile.css"
import { nanoid } from "nanoid";

export default function GroupTile(Props){

    const [ appList, setAppList ] = useState([])
    const [ grpFocus, setGrpFocus ] = useState(false) 

    useEffect(() => {
      if (Props.grpDetails) {
        setAppList(Props.grpDetails);
      }
    }, [Props.grpDetails]);


    const grpImage = appList.map( (app) => {
      return(
        <img draggable={false} key={nanoid()} src={app.img} alt={app.name} className="group-images" onClick={() => imgClick(app.path)}/>
      )
    })
    
    function imgClick(paths){
      if(grpFocus){
        Props.openApp(paths)
      }
    }

    async function grpClicked(){
      console.log("groupClicked")
      setGrpFocus((x) => !x )
      console.log(grpFocus)
    }

    return(
        <div className="group-tile" data-group={Props.grpTitle.toLowerCase()}>
          <div className="group-tile-bg" onClick={grpClicked}>
            {grpImage}
          </div>

          <div className="tile-title">{Props.grpTitle}</div>

          <div className={`${grpFocus ? "groupInFocus" : "groupHide"}`}>
            <div className="bg-blur" onClick={grpClicked}/>
            <div className="groupedInFocus">

              <h2 className="group-title-focus">{Props.grpTitle}</h2>
              <div className="focused-img">
                {grpImage}
              </div>
            </div>
          </div>
        </div>
    )
}