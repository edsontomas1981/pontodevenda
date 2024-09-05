window.addEventListener('DOMContentLoaded', () => {
    const fs = window.electron.fs;
    const path = window.electron.path;
    const dirname = window.electron.dirname;  // Pegar o __dirname exposto

    const filePath = path.join(dirname, 'data', 'config.json');

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
    }

    const data = JSON.parse(fs.readFileSync(filePath));
    console.log(data);
});
