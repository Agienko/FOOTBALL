import { RIGHT_SIDE } from "../constants.js"
import data from "../data.js"


function getPlayer(position, player) {
    player.anchor.set(0.5)
    player.x = data.game.width/2 - data.player[position].x
    player.y = data.game.height/2 - data.player[position].y
    player.scale.set(data.player.scale)
    if(position === RIGHT_SIDE) player.scale.x = -data.player.scale
return player
}

export default getPlayer