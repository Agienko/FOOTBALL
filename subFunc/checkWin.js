import { finalText } from "../index.js"
import startGameFunc from "../move/moveBall/startGameFunc.js"


function checkWin(maxScore, checkLeft, checkRight) {
    if(maxScore <= checkLeft || maxScore <= checkRight) {
        // if(checkLeft > checkRight){
        //     alert ('Победил левый игрок')
        // } else {
        //     alert ('Победил правый игрок')
        // }
        
        //   startGameFunc()
        console.log('win!')
        finalText.visible = true
        
    }
  }
  export default checkWin