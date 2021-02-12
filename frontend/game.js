import Player from './lib/player.mjs'

const canvas = document.querySelector("#game")
const ctx = canvas.getContext("2d")

const background = document.createElement('img')
background.src = 'lib/images/backgrounddetailed1.png'
let bgReady = false
background.onload = function(){bgReady = true}

const player = new Player(100,canvas.width/2,canvas.height/2)
let playerImg = document.createElement('img')
playerImg.src = 'lib/images/character.png'

let playerImgReady = false
playerImg.onload = function(){playerImgReady = true}

const keysDown = {}
addEventListener('keydown',e => keysDown[e.key] = true)
addEventListener('keyup',e => delete keysDown[e.key])

let then = Date.now()
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
    if(bgReady){
        let pat = ctx.createPattern(background,'repeat')
        ctx.rect(0,0,canvas.width, canvas.height)
        ctx.fillStyle = pat
        ctx.fill()
    }
    if(playerImgReady){
        ctx.drawImage(playerImg,0,0,16,32,player.x,player.y,40,50)
    }
}

function update(modifier){
    if('w' in keysDown){
        player.y -= player.speed * modifier
    }

    if('s' in keysDown){
        player.y += player.speed * modifier
    }

    if('a' in keysDown){
        player.x -= player.speed * modifier
    }

    if('d' in keysDown){
        player.x += player.speed * modifier
    }
}

