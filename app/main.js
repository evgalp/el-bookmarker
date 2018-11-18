const { app, BrowserWindow } = require("electron");

let mainWindow = null;

app.on("ready", () => {
  console.log("Electron app started");
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadURL(`file://${__dirname}/index.html`);
  mainWindow.webContents.openDevTools();

  // does not work
  // mainWindow.webContents.loadFile("index.html");
});
