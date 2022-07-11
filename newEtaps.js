import { ball, finalText, leftRacket, leftScoreText, rightRacket, rightScoreText } from './index.js';
import startGameFunc from './move/moveBall/startGameFunc.js';
import { peopleSound } from './sounds.js';
import data from '/data.js';

export const newRound = (ball) => {
  
  document.body.style.transition = 'none'
  document.body.style.opacity = 0 
  setTimeout(() => {
    ball.x = data.ball.x;
    ball.y = data.ball.y;
    
    startGameFunc()
    ball.vy = 0
    ball.vx = 0
    startGameFunc()
    ball.vy = data.ball.speedY *[1,-1][Math.floor(Math.random()*2)]
    ball.vx = data.ball.speedX*[1,-1][Math.floor(Math.random()*2)]
    data.racket.left.y = 0;
    data.racket.left.x = 0;
    document.body.style.transition = 'opacity 1s linear'
    document.body.style.opacity = 1
  }, 100);
  peopleSound.play()
};

export const newGame = () => {
  newRound(ball);
  leftScoreText.text = 0
  rightScoreText.text = 0
  leftRacket.y = 0
  rightRacket.y = 0
  data.racket.left.y = 0
  data.racket.right.y = 0
  data.scoreText.left.check = 0;
  data.scoreText.right.check = 0;
  finalText.visible = false
};
