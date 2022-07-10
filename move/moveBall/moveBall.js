import { ballOut } from './ballOut.js'
import { beatBall } from './beatBall.js'
import { app, ball , leftRacket, rightRacket} from "../../index.js";
import data from '/data.js'

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
      ball.vy = -ball.vy;
    }
    if (ball.vy >= 0 && ball.y > data.ball.limitY) {
      ball.vy = -ball.vy;
    }
        //game over
        ballOut(ball)
      // racket to move
        beatBall(ball, {leftRacket, rightRacket})
       
    ball.y += ball.vy;
    ball.x += ball.vx;
  }
}

export default moveBall;
