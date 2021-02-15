import Player from './lib/player.mjs'
import Level1 from './lib/level.js'


const canvas = document.querySelector("#game")
const ctx = canvas.getContext("2d")

const level = new Level1(canvas.width,canvas.height)
let bgReady = false
level.background.onload = function(){bgReady = true}

const player = new Player(100,canvas.width/2,canvas.height/2)
let playerImgReady = false
player.img.onload = function(){playerImgReady = true}

const keysDown = {}
addEventListener('keydown',e => keysDown[e.key] = true)
addEventListener('keyup',e => delete keysDown[e.key])

let then = Date.now()
player.animate()
document.addEventListener('DOMContentLoaded',main)

function main(){
    const now = Date.now()
    const delta = now - then 
    render()
    update(delta/1000)
    then = now
    requestAnimationFrame(main)
}

function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    if(bgReady){
        level.draw(ctx)
    }
    if(playerImgReady){
        player.draw(ctx)
    }
}

function update(modifier){
    player.update(modifier,keysDown)
}




