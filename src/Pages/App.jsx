import "../Styles/App.css"

import steam from "../Assets/steam.png"
import word from "../Assets/word.png"
import excel from "../Assets/excel.png"
import ppt from "../Assets/ppt.png"
import office from "../Assets/office.png"
import pluspng from "../Assets/plus.png"


import Header from "../Components/Header"
import AppTile from "../Components/AppTile"

function App() {
  return (
    <>
      <Header />

      <main className="tiles">
        
      <AppTile appImg={steam} appTitle="Steam" appPath="C:\Program Files (x86)\Steam\steam.exe"/>
      
      <AppTile appImg={office} appTitle="Office" appPath="C:\Program Files (x86)\Steam\steam.exe"/>       
      {/* <AppTile appImg={office} appTitle="Office"/> */}

        <div className="tile">
          <div className="office-tile-bg">
            <img src={word} alt="" className="office-images" />
            <img src={excel} alt="" className="office-images" />
            <img src={ppt} alt="" className="office-images" />
          </div>
          <div className="tile-title">Group - Office Tools</div>
        </div>
        <div className="tile">
          <div className="tile-add">
            <div className="tile-add-plus">
            <img src={pluspng} alt="" className="tile-plus" />
            </div>

          </div>
          <div className="tile-title-new">Add new</div>
        </div>
      </main>
    </>
  );
}

export default App;
