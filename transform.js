import data from "/data.js";

let _w = window.innerWidth
let _h = window.innerHeight
let canv = document.querySelector('canvas')
wrapper.style.transform = `scale(${_w/data.game.width < 1 ? _w/data.game.width : 1})`

window.addEventListener('resize', function () {
    _w = window.innerWidth
    _h = window.innerHeight
    wrapper.style.transform = `scale(${_w/data.game.width < 1 ? _w/data.game.width : 1})`
})
