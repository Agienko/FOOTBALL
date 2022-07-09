import { isBallOnLeft, isBallOnRight } from './isBallOnRacket.js';
import data from '/data.js'

export function beatBall(ball, rackets) {
    let powV = (ball.vx ** 2 + ball.vy ** 2)
    let angle = 1
    if(isBallOnLeft(ball, rackets.leftRacket)) {

        console.log(2*(Math.abs(rackets.leftRacket.y - ball.y) + data.racket.height )/data.racket.height/2)
        if(rackets.leftRacket.y - ball.y >= 0 && ball.vy >= 0 
        || rackets.leftRacket.y - ball.y <= 0 && ball.vy < 0 ) {

           
            ball.vy = -Math.sin(angle)*ball.vy
         
        } 
        ball.vx = -ball.vx;
    }
       if( isBallOnRight(ball, rackets.rightRacket)) {
        console.log((rackets.rightRacket.y - ball.y)/data.racket.height)
        if(rackets.rightRacket.y - ball.y >= 0 && ball.vy >= 0 
        || rackets.rightRacket.y - ball.y <= 0 && ball.vy < 0) {
            ball.vy = -ball.vy
           
        } 
            ball.vx = -ball.vx;
        }
}