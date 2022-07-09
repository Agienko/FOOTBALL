import data from "../data.js"

function drawScoreBoard(position){
    let scoreBoard = new PIXI.Graphics()
scoreBoard.lineStyle(data.scoreBoard.thick, data.scoreBoard.borderColor, 1)
scoreBoard.beginFill(data.scoreBoard.bgColor)
scoreBoard.drawRoundedRect(
    data.game.width/2 + data.scoreBoard.coords[position].x - data.scoreBoard.width/2, 
    data.scoreBoard.coords[position].y - data.scoreBoard.height/2, 
    data.scoreBoard.width * data.field.scale, 
    data.scoreBoard.height * data.field.scale, 
    data.scoreBoard.borderRound
    );
scoreBoard.endFill()
return scoreBoard
}
export default drawScoreBoard