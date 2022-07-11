import { ballOut } from './ballOut.js'
import { beatBall } from './beatBall.js'
import { app, ball , leftRacket, rightRacket} from "../../index.js";
import data from '/data.js'
import { kickBoardSound } from '../../sounds.js';


 let rand = 0
export const changeRand = (x) => rand = x

export let stopCrazynessId
export const crazynessBall = (crazyness = data.game.crazyness, time = 5000) => {
  let stopCrazynessId = setInterval(() => {
  let rand = [0, 0.5, 0.5, 1, 1, 1.5, 2][Math.floor(Math.random()*crazyness)] *[1,-1][Math.floor(Math.random()*2)]
  changeRand(rand)
  }, time);
 
}
crazynessBall()

function moveBall() {
  ball.vy = data.ball.speedY *[1,-1][Math.floor(Math.random()*2)]
  ball.vx = data.ball.speedX*[1,-1][Math.floor(Math.random()*2)]

  let state = play

  //Start the game loop
  app.ticker.add((delta) => gameLoop(delta))

   //Update the current game state:
  const gameLoop = (delta) => state(delta)
  
  function play(delta) {
    // Use the racket's velocity to make it move
    if (ball.vy <= 0 && ball.y < -data.ball.limitY) {
      ball.vy = -ball.vy 
      kickBoardSound.play()
    }
    if (ball.vy >= 0 && ball.y > data.ball.limitY) {
      ball.vy = -ball.vy 
      kickBoardSound.play()
    }
        //game over
        ballOut(ball)
      // racket to move
        beatBall(ball, {leftRacket, rightRacket});
        
    ball.y += ball.vy + (ball.y - rand >= 0 ? rand : -rand)
    ball.x += ball.vx + (ball.x - rand >= 0 ? rand : -rand)
    ball.scale.set( rand === 0 ? data.ball.scale : data.ball.scale + rand/200)
  }
}

export default moveBall;
