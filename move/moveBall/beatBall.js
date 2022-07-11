import { kickSound } from '../../sounds.js';
import { isBallOnLeft, isBallOnRight } from './isBallOnRacket.js';
import data from '/data.js'

export function beatBall(ball, rackets) {
    let acc = data.game.acceleration/10

    if(isBallOnLeft(ball, rackets.leftRacket)) {
        if(rackets.leftRacket.y - ball.y >= 0 && ball.vy >= 0 
        || rackets.leftRacket.y - ball.y <= 0 && ball.vy < 0 ) {
            ball.vy = -ball.vy + (ball.vy >=0 ? -acc : acc) 
             
        } 
        ball.vx = -ball.vx + (ball.vx >=0 ? -acc : acc)
        kickSound.play() 
    }
    if( isBallOnRight(ball, rackets.rightRacket)) {
        if(rackets.rightRacket.y - ball.y >= 0 && ball.vy >= 0 
        || rackets.rightRacket.y - ball.y <= 0 && ball.vy < 0) {
            ball.vy = -ball.vy + (ball.vy >=0 ? -acc : acc)
        } 
        ball.vx = -ball.vx + (ball.vx >=0 ? -acc : acc) 
        kickSound.play() 
        }
}



