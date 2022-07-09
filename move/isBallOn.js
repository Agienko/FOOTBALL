import data from '/data.js';


function isBallOnLeft(ball, position) {
return ball.y >= position.y - position.height/2 
&& ball.y <= position.y + position.height/2
&& ball.x < -data.ball.limitX
}


function isBallOnRight(ball, position) {
  return ball.y >= position.y - position.height/2 
  && ball.y <= position.y + position.height/2
  && ball.x > data.ball.limitX
  }
  
  export {isBallOnLeft, isBallOnRight}