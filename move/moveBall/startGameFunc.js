import data from "../../data.js"
import { app } from "../../index.js"
import { underText } from "../../textures/underText.js"
import moveBall from "./moveBall.js"


let switcher = true
let firstStart = true

function startGameFunc(e){
    if(e?.keyCode === 32 && switcher || !e?.keyCode && switcher) {
    if(firstStart) {
       moveBall()
       firstStart = false
       switcher = false 
      underText.text = data.underText.textPause
        
      } else{
        app.ticker.start()
        underText.text = data.underText.textPause
        switcher = false 
      }  
    } else if(e?.keyCode === 32 && !switcher || !e?.keyCode && !switcher) {
        underText.text = data.underText.text
        setTimeout(() => {
            app.ticker.stop()
           }, 50);
        switcher = true
    } 
    return switcher
}

export default startGameFunc