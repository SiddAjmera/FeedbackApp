const {app, BrowserWindow} = require('electron');

//TODO: Remove this before publishing. It's only for development purpose. It's just like live-reload or watch.
//require("electron-reload")(__dirname);

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1000,
        resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    //TODO: This is to open DevTools. Remove this line before publishing.
    //mainWindow.webContents.openDevTools();
});

// To remove the Menu Bar from Browser Window
app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
});