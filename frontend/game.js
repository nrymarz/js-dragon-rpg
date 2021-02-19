import Player from './lib/player.mjs'
import {Level1, BossLevel} from './lib/level.js'
import Inventory from './lib/inventory.js'
import {BattleUI, BossBattle} from './lib/battleUI.js'


const canvas = document.querySelector("#game")
const ctx = canvas.getContext("2d")

const GAMESTATES = ["MAP","BATTLE","INVENTORY"]
let GAMESTATE = GAMESTATES[0]

//let level = new BossLevel(canvas.width,canvas.height)
let level = new Level1(canvas.width,canvas.height)
let bgReady = false
level.background.onload = function(){bgReady = true}

const inventory = new Inventory()
let battleUI = null
let turnResult = ''

const player = new Player(100,380,275)
let playerImgReady = false
player.img.onload = function(){playerImgReady = true}

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
        updateInventory()
        renderInventory()
    }
    else if(GAMESTATE === "BATTLE"){
        updateBattle()
    }
    requestAnimationFrame(main)
}

function updateBattle(){
    turnResult = battleUI.update(keysDown,frame) || turnResult
    battleUI.draw(turnResult)
    if(player.hp <= 0){
        GAMESTATE = "MAP"
        player.hp = 1
        player.x = 380
        player.y = 275
    }
    else if(battleUI.enemy.hp <= 0){
        level.enemies.splice(level.enemies.indexOf(battleUI.enemy),1)
        player.xp += battleUI.enemy.xp
        GAMESTATE = "MAP"
    }
}

function renderInventory(){
    inventory.draw(ctx,player)
}

function updateInventory(){
}

function renderMap(){
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
    if(player.isTouchingEnemies(level.enemies)){
        battleUI = new BattleUI(ctx,player,player.isTouchingEnemies(level.enemies))
        GAMESTATE = "BATTLE"
    }
    if (player.touchingEdge){
        level = new Level1(canvas.width,canvas.height)
        if(player.y < -20){player.y = 600}
        else if(player.y>570){player.y = 0}
        else if(player.x<-20){player.x = 800}
        else if(player.x>780){player.x = 0}
        player.touchingEdge = false
    }
}





