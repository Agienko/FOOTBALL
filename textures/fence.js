import data from "../data.js";

function drawFence(position){
    let fence = new PIXI.Graphics()
    // fence.lineStyle(data.field.border.thick, data.field.border.color, 1);
    fence.beginFill(0x000000);
    fence.drawRect(
        data.fence[position].x, 
        data.fence[position].y, 
        data.fence.width,
        data.fence.height,
        );
        fence.alpha = data.fence.opacity
        fence.endFill();
        // fence.alpha = 0.5
    return fence
}
export default drawFence