// renderer.js
window.addEventListener('DOMContentLoaded', () => {
    const fs = window.electron.fs;
    const path = window.electron.path;

    const filePath = path.join(__dirname, 'data', 'config.json');

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
    }

    const data = JSON.parse(fs.readFileSync(filePath));
    console.log(data);
});
