import data from "/data.js";
import drawScoreBoard from "./textures/scoreBoard.js";
import bgGradient from "/textures/bgGradient.js";
import drawFieldBoard from "./textures/fieldBoard.js";
import drawRacket from "./textures/racket.js";
import createBall from "./textures/ball.js";
import drawScore from "./textures/scoreText.js";
import moveRacket from "./move/moveRacket.js";
import moveBall from "./move/moveBall.js";

let app = new PIXI.Application({
    width: data.game.width,
    height: data.game.height,
    antialias: true
})
wrapper.appendChild(app.view)

// addgradient
app.stage.addChild(bgGradient);

//scoreBoards
let leftScoreBoard = drawScoreBoard('left')
let rightScoreBoard = drawScoreBoard('right')
app.stage.addChild(leftScoreBoard, rightScoreBoard);

//add scoreText
let leftScoreText = drawScore('left')
let rightScoreText = drawScore('right')
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
app.stage.addChild(bord)

//add rackets
let leftRacket = drawRacket('left')
let rightRacket = drawRacket('right')
field.addChild(leftRacket, rightRacket)

//add ball
let ball = createBall()
field.addChild(ball)

moveRacket(app, leftRacket, data.racket.left.keyUp, data.racket.left.keyDown)
moveRacket(app, rightRacket, data.racket.right.keyUp, data.racket.right.keyDown)
moveBall(app, ball, {leftRacket, rightRacket})


