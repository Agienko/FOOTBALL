import { leftScoreText, rightScoreText } from '../../index.js'
import data from '/data.js'


export function ballOut(ball) {
    if ( ball.x > data.ball.limitOut ) {
        ball.vx = -ball.vx
        leftScoreText.text = ++data.scoreText.left.check
      }

    if ( ball.x < -data.ball.limitOut) {
        ball.vx = -ball.vx
        rightScoreText.text = ++data.scoreText.right.check
      }
}
