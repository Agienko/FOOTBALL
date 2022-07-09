import keyboard from './keyboardFunc.js';
import data from '/data.js';

function moveRacket(app, racket, upKey, downKey) {
  //Define any variables that are used in more than one function
  const leftUp = keyboard(upKey);
  const leftDown = keyboard(downKey);
  racket.vy = 0;

  //Up
  leftUp.press = () => {
    racket.vy = -data.racket.speed;
  };
  leftUp.release = () => {
    if (!leftDown.isDown) {
      racket.vy = 0;
    }
  };
  //Down
  leftDown.press = () => {
    racket.vy = data.racket.speed;
  };
  leftDown.release = () => {
    if (!leftUp.isDown) {
      racket.vy = 0;
    }
  };

  //Set the game state
  let state = play;

  //Start the game loop
  app.ticker.add((delta) => gameLoop(delta));

  function gameLoop(delta) {
    //Update the current game state:
    state(delta);
  }

  function play(delta) {
    //Use the racket's velocity to make it move
    if (racket.vy <= 0 && racket.y < -data.racket.limit) {
      racket.y = -data.racket.limit;
    }
    if (racket.vy >= 0 && racket.y > data.racket.limit) {
      racket.y = data.racket.limit;
    }
    racket.y += racket.vy;
  }
}
export default moveRacket;
