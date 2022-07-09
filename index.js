import data from '/data.js';
import drawScoreBoard from './textures/scoreBoard.js';
import bgGradient from '/textures/bgGradient.js';
import drawFieldBoard from './textures/fieldBoard.js';
import drawRacket from './textures/racket.js';
import createBall from './textures/ball.js';
import drawScore from './textures/scoreText.js';
import moveRacket from './move/moveRacket.js';
import moveBall from './move/moveBall/moveBall.js';
import playerNameText from './textures/playerNameText.js';
import getPlayer from './textures/player.js';
import { LEFT_SIDE, RIGHT_SIDE } from './constants.js';
import addField from './textures/field.js';

let field, ball, leftPlayer, rightPlayer, leftRacket, rightRacket;
const sprites = {};
const loader = new PIXI.Loader();
loader
  .add('field', data.field.path)
  .add('ball', data.ball.path)
  .add('player', data.player.path)
  .load((loader, resources) => {

    sprites.field = new PIXI.Sprite(resources.field.texture);
    sprites.ball = new PIXI.Sprite(resources.ball.texture);
    sprites.player = new PIXI.Sprite(resources.player.texture);

    field = addField(sprites);
    ball = createBall(sprites.ball);
    leftPlayer = getPlayer(LEFT_SIDE, sprites.player);
    rightPlayer = getPlayer(RIGHT_SIDE, sprites.player);
    leftRacket = drawRacket(LEFT_SIDE);
    rightRacket = drawRacket(RIGHT_SIDE);
    field.addChild(leftRacket, rightRacket, ball);
  });
loader.onComplete.add(() => {
  console.log('загружено все')
  document.body.style.opacity = 1

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
  
    
  moveRacket(app, leftRacket, data.racket.left.keyUp, data.racket.left.keyDown);
  moveRacket(app, rightRacket, data.racket.right.keyUp, data.racket.right.keyDown);
//   moveBall(app, ball, { leftRacket, rightRacket });
});

let app = new PIXI.Application({
  width: data.game.width,
  height: data.game.height,
  backgroundColor: data.game.bgColor,
  antialias: true,
});
wrapper.appendChild(app.view);

let leftScoreBoard = drawScoreBoard(LEFT_SIDE);
let rightScoreBoard = drawScoreBoard(RIGHT_SIDE);
export let leftScoreText = drawScore(LEFT_SIDE);
export let rightScoreText = drawScore(RIGHT_SIDE);

let bord = drawFieldBoard();
let leftPlayerName = playerNameText(LEFT_SIDE);
let rightPlayerName = playerNameText(RIGHT_SIDE);

