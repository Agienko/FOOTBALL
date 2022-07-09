import data from "../data.js";

function drawScore(position) {
    data.scoreText.style.fill = [data.scoreText[position].color]
    const style = new PIXI.TextStyle(data.scoreText.style);
 
    let scoreText = new PIXI.Text(data.scoreText[position].check, style);
    scoreText.anchor.set(0.5)
    scoreText.x = data.game.width/2 + data.scoreText[position].x;
    scoreText.y = data.scoreBoard.coords[position].y + data.scoreText[position].y;
   
    return scoreText
}

export default drawScore