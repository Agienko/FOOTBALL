import data from '/data.js'


const isBallOnLeft = (ball, position) => (
  ball.y >= position.y - position.height/2 
&& ball.y <= position.y + position.height/2
&& ball.x < -data.ball.limitX
)


const isBallOnRight = (ball, position) => (
    ball.y >= position.y - position.height/2 
  && ball.y <= position.y + position.height/2
  && ball.x > data.ball.limitX
  )
  
  export {isBallOnLeft, isBallOnRight}