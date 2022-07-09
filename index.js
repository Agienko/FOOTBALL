import data from "/data.js";
import drawScoreBoard from "./textures/scoreBoard.js";
import bgGradient from "/textures/bgGradient.js";
import drawFieldBoard from "./textures/fieldBoard.js";
import drawRacket from "./textures/racket.js";
import createBall from "./textures/ball.js";
import drawScore from "./textures/scoreText.js";
import moveRacket from "./move/moveRacket.js";
import moveBall from "./move/moveBall.js";
import playerNameText from "./textures/playerNameText.js";
import getPlayer from "./textures/player.js";
import { LEFT_SIDE, RIGHT_SIDE } from "./constants.js";
import addField from "./textures/field.js";

let app = new PIXI.Application({
    width: data.game.width,
    height: data.game.height,
    antialias: true
})
wrapper.appendChild(app.view)


//add players
let leftPlayer = getPlayer(LEFT_SIDE)
let rightPlayer = getPlayer(RIGHT_SIDE)
//scoreBoards
let leftScoreBoard = drawScoreBoard(LEFT_SIDE)
let rightScoreBoard = drawScoreBoard(RIGHT_SIDE)
//add scoreText
let leftScoreText = drawScore(LEFT_SIDE)
let rightScoreText = drawScore(RIGHT_SIDE)
//add field
let field = addField()
//add fieldBoard
let bord = drawFieldBoard()
let leftPlayerName = playerNameText(LEFT_SIDE)
let rightPlayerName = playerNameText(RIGHT_SIDE)

// add in Stage
app.stage.addChild(
    bgGradient, 
    leftScoreBoard, 
    rightScoreBoard, 
    leftPlayer, 
    rightPlayer, 
    leftScoreText, 
    rightScoreText, 
    field, 
    bord, 
    leftPlayerName, 
    rightPlayerName,
    )

//add rackets
let leftRacket = drawRacket(LEFT_SIDE)
let rightRacket = drawRacket(RIGHT_SIDE)
//add ball
let ball = createBall()

field.addChild(leftRacket, rightRacket, ball)


moveRacket(app, leftRacket, data.racket.left.keyUp, data.racket.left.keyDown)
moveRacket(app, rightRacket, data.racket.right.keyUp, data.racket.right.keyDown)
moveBall(app, ball, {leftRacket, rightRacket})


