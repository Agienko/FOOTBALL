import data from "../data.js";

function drawFieldBoard(){
    let fieldBoard = new PIXI.Graphics()
    fieldBoard.lineStyle(data.field.border.thick, data.field.border.color, 1);

    fieldBoard.drawRoundedRect(
        data.field.border.x, 
        data.field.border.y, 
        data.field.border.width* data.field.scale, 
        data.field.border.height * data.field.scale, 
        data.field.border.borderRound
        );
        fieldBoard.endFill();
    return fieldBoard
}
export default drawFieldBoard