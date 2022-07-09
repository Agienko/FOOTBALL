
import data from "/data.js"


function createBall(ball) {
    const container = new PIXI.Container()
    ball.anchor.set(0.5)
    container.addChild(ball)
    
    const mask = new PIXI.Graphics()
    
    mask.beginFill(0x000000)
    mask.drawCircle(0, 0, 310)
    mask.endFill()
    container.addChild(mask)
    
    ball.mask = mask 
    container.scale.set(data.ball.scale)
    
    return container
}

export default createBall
