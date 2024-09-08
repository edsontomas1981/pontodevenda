const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');


function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1100,
        height: 700,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        },
    });

    const indexPath = path.join(__dirname, 'windows', 'index.html');
    mainWindow.loadFile(indexPath).catch(err => console.error("Erro ao carregar o arquivo HTML:", err));

    globalShortcut.register('Ctrl+Shift+I', () => {
        mainWindow.webContents.openDevTools();
    });


}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});



