import checkWin from '../../subFunc/checkWin.js'
import { leftScoreText, rightScoreText } from '../../index.js'
import data from '/data.js'
import { newRound } from '../../newEtaps.js'
import startGameFunc from './startGameFunc.js'


export function ballOut(ball) {
    if ( ball.x > data.ball.limitOut ) {
        ball.vx = -ball.vx
        leftScoreText.text = ++data.scoreText.left.check
        checkWin(data.game.maxScore, data.scoreText.left.check, data.scoreText.right.check)
        newRound(ball)
        startGameFunc()
      }

    if ( ball.x < -data.ball.limitOut) {
        ball.vx = -ball.vx
        rightScoreText.text = ++data.scoreText.right.check
        checkWin(data.game.maxScore, data.scoreText.left.check, data.scoreText.right.check)
        newRound(ball)
        startGameFunc()
      }
      
}

