const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

require("./pages/home/proc");
require("./pages/home/config");

const createWin = () => {
  const win = new BrowserWindow({
    width: 450,
    height: 100,
    modal: true,
    show: true,
    center: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.setMenuBarVisibility(false);

  win.loadFile("src/pages/home/home.html");
};

app.whenReady().then(createWin);
