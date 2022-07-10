import data from "../data.js"
import startGameFunc from "../move/moveBall/startGameFunc.js";

export let underText
function underTextFunc() {
    const style = new PIXI.TextStyle(data.underText.style);
    underText = new PIXI.Text(data.underText.text, style)
    underText.anchor.set(0.5)
    underText.x = data.game.width/2 + data.underText.x
    underText.y = data.game.width/2 + data.underText.y
    underText.interactive = true;
    underText.buttonMode = true;
    underText.on('pointerdown', startGameFunc);
    underText.on('pointerover', () => {
        style.fontSize = data.underText.styleOn.fontSize
        style.dropShadowDistance = data.underText.styleOn.dropShadowDistance
       
    });
    underText.on('pointerout', () => {
        style.fontSize = data.underText.style.fontSize
        style.dropShadowDistance = data.underText.style.dropShadowDistance
    });
    return underText
}

export default underTextFunc