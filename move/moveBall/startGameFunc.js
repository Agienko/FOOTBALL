import data from "../../data.js"
import { app } from "../../index.js"
import { mainMusic, peopleLongSound } from "../../sounds.js"
import { underText } from "../../textures/underText.js"
import moveBall from "./moveBall.js"


export let switcher = true
let firstStart = true

function startGameFunc(e, time = 50){
    if(e?.keyCode === 32 && switcher || !e?.keyCode && switcher) {
    if(firstStart) {
       moveBall()
       firstStart = false
       switcher = false 
      underText.text = data.underText.textPause
      peopleLongSound.play()
      mainMusic.play()
      } else{
        app.ticker.start()
        peopleLongSound.play()
        underText.text = data.underText.textPause
        switcher = false 
      }  
    } else if(e?.keyCode === 32 && !switcher || !e?.keyCode && !switcher) {
        underText.text = data.underText.text
        setTimeout(() => {
            app.ticker.stop()
            peopleLongSound.pause()
           }, time);
        switcher = true
    } 
    return switcher
}

export default startGameFunc