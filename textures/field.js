import data from "../data.js"

function addField() {
  let field = new PIXI.Sprite.from(data.field.path)
  field.anchor.set(0.5)
  field.x = data.game.width / 2
  field.y = data.game.height / 2
  field.scale.set(data.field.scale)
  return field
}
export default addField