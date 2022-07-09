import data from "../data.js"

function addField(sprites) {
  let field = sprites.field
  field.anchor.set(0.5)
  field.x = data.game.width / 2
  field.y = data.game.height / 2
  field.scale.set(data.field.scale)
  return field
}
export default addField