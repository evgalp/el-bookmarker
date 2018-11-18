const { app, BrowserWindow } = require("electron");

let mainWindow = null;

app.on("ready", () => {
  console.log("Electron app started");
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);

  // Open browser console
  // mainWindow.webContents.openDevTools();
});
