
import data from "../data.js"
import { openModal } from "../modal.js"


function createBtn() {
    const container = new PIXI.Container()
    const createLine = (y) => {
        const line = new PIXI.Graphics()
        line.beginFill(0xffffff)
        line.drawRoundedRect(10, y, 50, 5, 4)
        line.endFill()
        return line
   } 
   const createRect = () => {// empty fill
        const rect = new PIXI.Graphics()
        rect.beginFill(0xffffff)
        rect.drawRoundedRect(8, 8, 54, 35, 4)
        rect.alpha = 0
        rect.endFill()
        return rect
   }
    container.addChild(
        createLine(10), createLine(20),
        createLine(30), createRect()
        )
    container.x = data.settingsBtn.x
    container.y = data.settingsBtn.y
    container.pivot.x = container.width/2
    container.pivot.y = container.height/2
    container.interactive = true;
    container.buttonMode = true;
    container.on('pointerdown', openModal)
    container.on('pointerover', () => container.scale.set(1.1))
    container.on('pointerout', () => container.scale.set(1))
    return container
}

export default createBtn

