import { isBallOnLeft, isBallOnRight } from './isBallOnRacket.js';
import data from '/data.js'

export function beatBall(ball, rackets) {
    if(isBallOnLeft(ball, rackets.leftRacket)) {
        if(rackets.leftRacket.y - ball.y >= 0 && ball.vy >= 0 
        || rackets.leftRacket.y - ball.y <= 0 && ball.vy < 0 ) {
            ball.vy = -ball.vy
        } 
        ball.vx = -ball.vx
        
    }
    if( isBallOnRight(ball, rackets.rightRacket)) {
        if(rackets.rightRacket.y - ball.y >= 0 && ball.vy >= 0 
        || rackets.rightRacket.y - ball.y <= 0 && ball.vy < 0) {
            ball.vy = -ball.vy
        } 
        ball.vx = -ball.vx
        }
}