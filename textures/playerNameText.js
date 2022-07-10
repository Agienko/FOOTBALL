import data from "../data.js"

function playerNameText(position) {
    data.playerText.style.fill = [data.playerText[position].color]
    const style = new PIXI.TextStyle(data.playerText.style)
    let playerText = new PIXI.Text(data.playerText[position].text, style)
    playerText.anchor.set(0.5)
    playerText.x = data.game.width/2 + data.playerText[position].x
    playerText.y = data.scoreBoard.coords[position].y + data.playerText[position].y
    return playerText
}

export default playerNameText