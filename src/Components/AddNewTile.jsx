import "../Styles/AddNewTile.css"

export default function AddNewTile(Props){

    function handleNewTileClick(){
        console.log("new click!")
    }

    return(
        <div className="tile" onClick={handleNewTileClick}>
            <div className="tile-add">
                <div className="tile-add-plus">
                    <img src={Props.pluspng} alt="" className="tile-plus" />
                </div>

            </div>
            <div className="tile-title-new">Add new</div>
        </div>
    )
}