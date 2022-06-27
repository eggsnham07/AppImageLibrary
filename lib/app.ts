import { spawn } from "child_process"
import fs from "fs"
import os from "os"

const AppImage = {
    dir: `${os.homedir()}/.local/share/AppImageLibrary`,
    dirContents: fs.readdirSync(`${os.homedir()}/.local/share/AppImageLibrary`).filter(file => file.toString().endsWith("AppImage"))
}

function launchApp(appName:string):boolean {
    if(!fs.existsSync(`${AppImage.dir}/${appName}`)) return false

    //@ts-ignore
    spawn(`${AppImage.dir}/${appName}`)

    return true
}

AppImage.dirContents.forEach(file => {
    var name = file.toString()
    var launcherIcon = document.createElement("div")

    launcherIcon.style.textAlign = "center"
    launcherIcon.style.width = "110px"
    launcherIcon.style.height = "110px"
    launcherIcon.innerHTML = `<img src="./img/terminal.svg" onclick="launchApp('${name}')" width="70" height="70" /><figcaption>${name.split(".")[0]}</figcaption>`
    launcherIcon.title = `Launch ${name.split(".")[0]}`

    document.querySelector("#library")?.appendChild(launcherIcon)
})