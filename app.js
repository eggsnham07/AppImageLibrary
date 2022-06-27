const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 480,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: __dirname + "/src/scripts/preload.js"
        }
    })

    win.loadFile("src/app.html")
}

app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== "darwin") app.quit()
})