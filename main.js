const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        autoHideMenuBar: true, // Opcional: oculta a barra de menu
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Use path.join para construir o caminho correto para o index.html
    const indexPath = path.join(__dirname, 'windows', 'index.html');
    mainWindow.loadFile(indexPath).catch(err => console.error("Erro ao carregar o arquivo HTML:", err));
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
