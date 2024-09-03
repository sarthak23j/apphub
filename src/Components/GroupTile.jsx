import "../Styles/GroupTile.css"

export default function GroupTile(Props){
    return(
        <div className="group-tile">
          <div className="group-tile-bg">
            <img src={word} alt="" className="group-images" />
            <img src={excel} alt="" className="group-images" />
            <img src={ppt} alt="" className="group-images" />
          </div>
          <div className="tile-title">Group - Office Tools</div>
        </div>
    )
}