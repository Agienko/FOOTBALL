import data from "../data.js"

function drawRacket(position){
    let racket = new PIXI.Graphics()
    racket.lineStyle(data.racket.thick, data.racket.borderColor, 1)
    racket.beginFill(data.racket[position].color);
    
    racket.drawRoundedRect(
        data.racket[position].x - data.racket.width/2, 
        data.racket[position].y - data.racket.height/2, 
        data.racket.width, 
        data.racket.height,
        data.racket.round
        )
        racket.endFill()
        
    return racket
}


export default drawRacket
