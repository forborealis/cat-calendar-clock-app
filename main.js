const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 430,
    height: 430,
    minWidth: 250,
    minHeight: 250,
    maxWidth: 430,
    maxHeight: 430,
    resizable: true,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: false,
    icon: "assets/spriteDay_1.png",
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});