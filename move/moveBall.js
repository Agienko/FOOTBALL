import { isBallOnLeft, isBallOnRight } from './isBallOn.js';
import data from '/data.js';

function moveBall(app, ball, rackets) {
  ball.vy = data.ball.speedY *[1,-1][Math.floor(Math.random()*2)];
  ball.vx = data.ball.speedX*[1,-1][Math.floor(Math.random()*2)]

  let state = play;

  //Start the game loop
  app.ticker.add((delta) => gameLoop(delta));

  function gameLoop(delta) {
    //Update the current game state:
    state(delta);
  }

  function play(delta) {
    // Use the racket's velocity to make it move
    if (ball.vy <= 0 && ball.y < -data.ball.limitY) {
      ball.vy = -ball.vy;
    }
    if (ball.vy >= 0 && ball.y > data.ball.limitY) {
      ball.vy = -ball.vy;
    }
//game over
    if ( ball.x > 625|| ball.x < -625) {
        // app.ticker.stop()
        ball.vx = -ball.vx;
      }


      // racket to move
        if(isBallOnLeft(ball, rackets.leftRacket) 
        || isBallOnRight(ball, rackets.rightRacket)) {
            ball.vx = -ball.vx;
        }
       
    ball.y += ball.vy;
    ball.x += ball.vx;
  }
}

export default moveBall;
