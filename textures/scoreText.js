import data from "../data.js";

function drawScore(position) {
    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: data.scoreText.fontSize,
        fill: ['#ffffff']
    });
    let scoreText = new PIXI.Text(data.scoreText[position].check, style);
    scoreText.anchor.set(0.5)
    scoreText.x = data.game.width/2 + data.scoreText[position].x;
    scoreText.y = data.scoreBoard.coords[position].y + data.scoreText[position].y;
   
    return scoreText
}

export default drawScore