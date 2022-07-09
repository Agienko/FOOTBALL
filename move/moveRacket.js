import keyboard from './keyboardFunc.js'
import data from '/data.js'

function moveRacket(app, racket, upKey, downKey) {
  //Define any variables that are used in more than one function
  const leftUp = keyboard(upKey)
  const leftDown = keyboard(downKey)
  racket.vy = 0

  //Up
  leftUp.press = () => racket.vy = -data.racket.speed
  leftUp.release = () => !leftDown.isDown ? racket.vy = 0 : null
  
  //Down
  leftDown.press = () => racket.vy = data.racket.speed
  leftDown.release = () => !leftUp.isDown ? racket.vy = 0 : null

  //Set the game state
  let state = play

  //Start the game loop
  app.ticker.add((delta) => gameLoop(delta))

  //Update the current game state:
  const gameLoop = (delta) => state(delta)
  
  function play(delta) {
    //Use the racket's velocity to make it move
    let limit
    limit = data.field.height * data.field.scale - data.racket.height - data.racket.limitCents

    if (racket.vy <= 0 && racket.y < -limit) racket.y = -limit
    
    if (racket.vy >= 0 && racket.y > limit) racket.y = limit
    
    racket.y += racket.vy
  }
}
export default moveRacket
