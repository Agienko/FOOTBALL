import data from '/data.js';

export const newRound = () => {
  ball.x = data.ball.x;
  ball.y = data.ball.y;
  data.racket.left.y = 0;
  data.racket.left.x = 0;
};

export const newGame = () => {
  newRound();
  data.scoreText.left.check = 0;
  data.scoreText.right.check = 0;
};
