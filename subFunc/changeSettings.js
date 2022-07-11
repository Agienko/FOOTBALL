import data from "../data.js"
import { leftPlayerName, leftRacket, rightPlayerName, rightRacket } from "../index.js"
import { changeRand, crazynessBall, stopCrazynessId } from "../move/moveBall/moveBall.js"


//change data file!!!!!!!!!
export const changeSettings = (dataArr) => {
console.log(dataArr)
    //change left Name
data.playerText.left.name = dataArr[0]
leftPlayerName.text = dataArr[0]

//left color
let leftColor = '0x' + dataArr[1].slice(1)
data.playerText.left.color = leftColor
leftPlayerName.style.fill = [leftColor]
leftRacket.tint = leftColor

//change right Name
data.playerText.right.name = dataArr[2]
rightPlayerName.text = dataArr[2]

//right color
let rightColor = '0x' + dataArr[3].slice(1)
data.playerText.right.color = rightColor
rightPlayerName.style.fill = rightColor
rightRacket.tint = rightColor

//end Game Score
data.game.maxScore = dataArr[4]


//game Speed
data.ball.speedX = dataArr[5]
data.ball.speedY =dataArr[5]

//Racket Size
data.racket.height = dataArr[6]
leftRacket.height = dataArr[6]
rightRacket.height = dataArr[6]
data.racket.limitCents = dataArr[6] === '100' ?  50 : 8;


//Racket Speed
data.racket.speed = +dataArr[7]


// acceleration
data.game.acceleration = +dataArr[8]


//crazyness
data.game.crazyness = +dataArr[9]
changeRand(0)
clearInterval(stopCrazynessId)
crazynessBall(+dataArr[9])
}


