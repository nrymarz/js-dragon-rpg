import Player from './lib/player.mjs'
import {Level1, Level2, Level3, BossLevel} from './lib/level.js'
import Inventory from './lib/inventory.js'


const canvas = document.querySelector("#game")
const ctx = canvas.getContext("2d")

let GAMESTATE = "MAP"

//let level = new BossLevel(canvas.width,canvas.height)
let level = new Level1(canvas.width,canvas.height)

const player = new Player(100,380,275)

const inventory = new Inventory(player)
let turnResult = ''

const keysDown = {}
addEventListener('keydown',e => keysDown[e.key] = true)
addEventListener('keyup',e => delete keysDown[e.key])
addEventListener("keydown",e =>{
    if(e.key === "Escape" || e.key === "i"){
        if(GAMESTATE === "INVENTORY"){GAMESTATE = "MAP"}
        else if(GAMESTATE === "MAP"){GAMESTATE = "INVENTORY"}
    }
})

let then = Date.now()
let frame = 0
player.animate()
document.addEventListener('DOMContentLoaded',main)

function main(){
    frame++
    if(GAMESTATE === "MAP"){
        const now = Date.now()
        const delta = now - then
        update(delta/1000)
        renderMap()
        then = now
    }
    else if(GAMESTATE === "INVENTORY"){
        inventory.update(keysDown)
        inventory.draw(ctx)
    }
    else if(GAMESTATE === "BATTLE"){
        turnResult = level.battleUI.update(keysDown,frame) || turnResult
        level.battleUI.draw(turnResult)
        checkBattleOver()
    }
    else if(GAMESTATE === "WON"){
        ctx.fillStyle = "red"
        ctx.fillRect(0,0,800,600)
        ctx.font = "40px Arial"
        ctx.fillStyle = "black"
        ctx.fillText("YOU WON!",300,260)
    }
    requestAnimationFrame(main)
}

function checkBattleOver(){
    if(player.hp <= 0){
        GAMESTATE = "MAP"
        player.hp = 1
        player.x = 380
        player.y = 275
        level = new Level1(canvas.width,canvas.height)
    }
    else if(level.battleUI.enemy.hp <= 0){
        GAMESTATE = "MAP"
        level.enemies.splice(level.enemies.indexOf(level.battleUI.enemy),1)
        player.xp += level.battleUI.enemy.xp
        player.checkLevelUp()
    }
}


function renderMap(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    level.draw(ctx)
    player.draw(ctx)
}

function update(modifier){
    player.update(modifier,keysDown)
    if(player.isTouchingItem(level.item)){
        inventory.addItem(level.item)
        level.item = null
    }
    if(player.isTouchingEnemies(level.enemies)){
        level.battleUI.enemy = player.isTouchingEnemies(level.enemies)
        level.battleUI.player = player
        level.battleUI.ctx = ctx
        GAMESTATE = "BATTLE"
    }
    if (player.touchingEdge){
        level = getRandomLevel()

        if(player.y < -20){player.y = 600}
        else if(player.y>570){player.y = 0}
        else if(player.x<-20){player.x = 800}
        else if(player.x>780){player.x = 0}
        player.touchingEdge = false
    }
}

function getRandomLevel(){
    let num = Math.random()
    if(num<.33)return new Level1(canvas.width,canvas.height)
    else if(num<.66)return new Level2(canvas.width,canvas.height)
    else if(num<.9)return new Level3(canvas.width,canvas.height)
    else return new BossLevel(canvas.width,canvas.height)
}





