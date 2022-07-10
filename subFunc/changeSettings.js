import { LEFT_SIDE } from "../constants.js"
import data from "../data.js"
import { leftPlayerName, leftRacket, rightPlayerName, rightRacket } from "../index.js"


//change data file!!!!!!!!!
export const changeSettings = (dataArr) => {
data.playerText.left.name = dataArr[0]
leftPlayerName.text = dataArr[0]

let leftColor = '0x' + dataArr[1].slice(1)
data.playerText.left.color = leftColor
leftPlayerName.style.fill = [leftColor]
leftRacket.tint = leftColor

data.playerText.right.name = dataArr[2]
rightPlayerName.text = dataArr[2]


let rightColor = '0x' + dataArr[3].slice(1)
data.playerText.right.color = rightColor
rightPlayerName.style.fill = rightColor
rightRacket.tint = rightColor

data.game.maxScore = dataArr[4]

data.racket.height = dataArr[5]


data.game.acceleration = dataArr[6]




}


