class BattleUI{
    constructor(ctx,player,enemy){
        this.player = player
        this.enemy = enemy
        this.turn = 0
        this.image = document.createElement('img')
        this.image.src = "./lib/images/battleback1.png"
        this.ctx = ctx
        this.abilityIndex = 0
        this.abilityIndexLockout = false
        this.frameLockout = 0
        this.turnLockout = false
        this.selectColor = "blue"
    }

    draw(result){
        const player = this.player
        const enemy = this.enemy
        this.ctx.drawImage(this.image,0,0,800,600)
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0,400,800,200)
        this.ctx.drawImage(enemy.image,enemy.spritePixelIndex[0],enemy.spritePixelIndex[1],enemy.spritePixelWidth,enemy.spritePixelHeight,400-enemy.width*.75,200-enemy.height*.75,enemy.width*1.5,enemy.height*1.5)
        this.ctx.fillStyle = this.selectColor
        this.ctx.fillRect(0,400+(20*this.abilityIndex),800,22)
        this.ctx.font = '20px Comic Sans MS'
        this.ctx.fillStyle = "red"
        this.ctx.fillText(`Enemy HP:${enemy.hp}`,330,20)
        this.ctx.fillStyle = player.hp > 50 ? "green" : "red"
        this.ctx.fillText(`HP:${player.hp}`,0,375)
        this.ctx.fillStyle = "blue"
        this.ctx.fillText(`Mana:${player.mana}`,0,395)
        this.ctx.fillStyle = "white"
        for(let i=0;i<player.abilities.length;i++){
            this.ctx.fillText(player.abilities[i].name,0,420 +(20*i))
        }
        this.ctx.fillStyle = "black"
        this.ctx.fillText(result,235,380)
    }

    update(keysDown,frame){
        if (frame - this.frameLockout > 15){this.abilityIndexLockout = false}
        if("s" in keysDown && !this.abilityIndexLockout){
            if(this.abilityIndex>=0 && this.abilityIndex<this.player.abilities.length-1){this.abilityIndex++}
            this.abilityIndexLockout = true
            this.frameLockout = frame
        }
        if("w" in keysDown && !this.abilityIndexLockout){
            if(this.abilityIndex>0 && this.abilityIndex<=this.player.abilities.length){this.abilityIndex--}
            this.abilityIndexLockout = true
            this.frameLockout = frame
        }
        if(this.turn % 2 === 0){
            if(keysDown["Enter"] && !this.turnLockout){
                let ability = this.player.abilities[this.abilityIndex]
                if(this.player.mana >= ability.mana){
                    ability.use(this.player,this.enemy)
                    this.turnLockout = true
                    this.selectColor = "red"
                    this.turn++
                    setTimeout(() => {
                        this.turnLockout = false
                        this.selectColor = "blue"
                    },1500)
                    return `Player used ${ability.name} dealing ${ability.damage} damage.`
                }
            }
        }
        else if(!this.turnLockout){
            let ability = this.enemy.fight(this.player)
            this.turn++
            this.turnLockout = false
            return `Enemy used ${ability.name} dealing ${ability.damage} damage.`
        }
    }
}

class BossBattle extends BattleUI{
    constructor(ctx,player,enemy){
        super(ctx,player,enemy)
    }
    draw(result){
        const boss = this.enemy
        const player = this.player

        this.ctx.drawImage(this.image,0,0,800,600)
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0,400,800,200)
        this.ctx.drawImage(boss.images[boss.imageIndex],0,0,175,104,400-boss.width/2,200-boss.height/2,boss.width,boss.height)
        this.ctx.fillStyle = this.selectColor
        this.ctx.fillRect(0,400+(20*this.abilityIndex),800,22)
        this.ctx.font = '20px Comic Sans MS'
        this.ctx.fillStyle = "red"
        this.ctx.fillText(`Enemy HP:${boss.hp}`,330,20)
        this.ctx.fillStyle = player.hp > 50 ? "green" : "red"
        this.ctx.fillText(`HP:${player.hp}`,0,375)
        this.ctx.fillStyle = "blue"
        this.ctx.fillText(`Mana:${player.mana}`,0,395)
        this.ctx.fillStyle = "white"
        for(let i=0;i<player.abilities.length;i++){
            this.ctx.fillText(player.abilities[i].name,0,420 +(20*i))
        }
        this.ctx.fillStyle = "black"
        this.ctx.fillText(result,235,380)
    }
}
export {BattleUI, BossBattle}