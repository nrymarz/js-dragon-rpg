class BattleUI{
    constructor(){
        this.image = document.createElement('img')
        this.image.src = "./lib/images/battleback1.png"
    }
    draw(ctx,enemy){
        ctx.drawImage(this.image,0,0,800,600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0,400,800,200)
        ctx.drawImage(enemy.image,enemy.spritePixelIndex[0],enemy.spritePixelIndex[1],enemy.spritePixelWidth,enemy.spritePixelHeight,400-enemy.width*.75,200-enemy.height*.75,enemy.width*1.5,enemy.height*1.5)
    }
}

class BossBattle extends BattleUI{
    constructor(){
        super()
    }
    draw(ctx,boss){
        ctx.drawImage(this.image,0,0,800,600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0,400,800,200)
        ctx.drawImage(boss.images[boss.imageIndex],0,0,175,104,400-boss.width/2,200-boss.height/2,boss.width,boss.height)
    }
}
export {BattleUI, BossBattle}