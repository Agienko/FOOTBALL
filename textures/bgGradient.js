import data from "/data.js";

function createGradTexture() {
    // adjust it if somehow you need better quality for very very big images
    const quality = 256;
    const canvas = document.createElement('canvas');
    canvas.width = quality;
    canvas.height = 1;

    const ctx = canvas.getContext('2d');

    // use canvas2d API to create gradient
    const grd = ctx.createLinearGradient(0, 0, quality, 0);
    grd.addColorStop(0, `${data.game.bgColor}`);
    grd.addColorStop(0.5, `${data.game.bgColorCenter}`);
    grd.addColorStop(1, `${data.game.bgColor}`);

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, quality, 1);

    return PIXI.Texture.from(canvas);
}

const gradTexture = createGradTexture();

const bgGradient = new PIXI.Sprite(gradTexture);
bgGradient.position.set(data.game.width, 0);
bgGradient.rotation = Math.PI/2;
bgGradient.width = data.game.height
bgGradient.height = data.game.width

export default bgGradient