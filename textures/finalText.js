import data from "../data.js"
import { newGame } from "../newEtaps.js";

function drawFinalText() {
    const container = new PIXI.Container()

    let name = data.scoreText.left.check > data.scoreText.left.check 
    ? data.playerText.left.text : data.playerText.right.text

    const style = new PIXI.TextStyle(data.finalText.style);
    const styleBtn = new PIXI.TextStyle(data.finalText.newGameBtn.style);
    let finalText = new PIXI.Text(data.finalText.text + ' ' + name, style)
    
    finalText.anchor.set(0.5)
    finalText.x = data.game.width/2 + data.finalText.x
    finalText.y = data.game.height/2 + data.finalText.y
    
    let newGameBtn = new PIXI.Text(data.finalText.newGameBtn.text, styleBtn)
    newGameBtn.anchor.set(0.5)
    newGameBtn.x = data.game.width/2 + data.finalText.newGameBtn.x
    newGameBtn.y = data.game.height/2 + data.finalText.newGameBtn.y

    newGameBtn.interactive = true;
    newGameBtn.buttonMode = true;
    newGameBtn.on('pointerdown', newGame);
    
    container.addChild(finalText, newGameBtn)
    return container
}

export default drawFinalText