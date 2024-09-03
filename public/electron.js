const electron = require("electron");
const path = require("path");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
const preloads = path.join(__dirname,"elecPreload.js")

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    autoHideMenuBar:true,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: preloads
    },
  });
  
  mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
}

app.whenReady().then(() => {
  electron.ipcMain.handle("dialog.openFile",async () => {
    const { cancelled, filePaths } = await dialog.showOpenDialog()
    if (!cancelled){
      return filePaths[0]
    }
  })
})

app.on("ready", createWindow);