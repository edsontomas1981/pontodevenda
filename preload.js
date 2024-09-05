// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const path = require('path');
const fs = require('fs');

contextBridge.exposeInMainWorld('electron', {
    fs: {
        readFileSync: (filePath) => fs.readFileSync(filePath, 'utf8'),
        writeFileSync: (filePath, content) => fs.writeFileSync(filePath, content, 'utf8'),
        existsSync: (filePath) => fs.existsSync(filePath),
    },
    path: {
        join: (...paths) => path.join(...paths),
    }
});
