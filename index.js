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


const LEFT_SIDE = 'left'
const RIGHT_SIDE = 'right'

let app = new PIXI.Application({
    width: data.game.width,
    height: data.game.height,
    antialias: true
})
wrapper.appendChild(app.view)

// addgradient
app.stage.addChild(bgGradient);

//scoreBoards
let leftScoreBoard = drawScoreBoard(LEFT_SIDE)
let rightScoreBoard = drawScoreBoard(RIGHT_SIDE)
app.stage.addChild(leftScoreBoard, rightScoreBoard);

//add scoreText
let leftScoreText = drawScore(LEFT_SIDE)
let rightScoreText = drawScore(RIGHT_SIDE)
app.stage.addChild(leftScoreText, rightScoreText)

//add field
let field = new PIXI.Sprite.from(data.field.path)
field.anchor.set(0.5)
field.x = app.screen.width / 2;
field.y = app.screen.height / 2;
field.scale.set(data.field.scale)
app.stage.addChild(field)

//add fieldBoard
let bord = drawFieldBoard()
let leftPlayerName = playerNameText(LEFT_SIDE)
let rightPlayerName = playerNameText(RIGHT_SIDE)
app.stage.addChild(bord, leftPlayerName, rightPlayerName)

//add rackets
let leftRacket = drawRacket(LEFT_SIDE)
let rightRacket = drawRacket(RIGHT_SIDE)
field.addChild(leftRacket, rightRacket)

//add ball
let ball = createBall()
field.addChild(ball)

moveRacket(app, leftRacket, data.racket.left.keyUp, data.racket.left.keyDown)
moveRacket(app, rightRacket, data.racket.right.keyUp, data.racket.right.keyDown)
moveBall(app, ball, {leftRacket, rightRacket})


window.ball = ball