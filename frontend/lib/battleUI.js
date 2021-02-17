class BattleUI{
    constructor(){
        this.image = document.createElement('img')
        this.image.src = "./lib/images/battleback1.png"
    }
    draw(ctx,enemy){
        ctx.drawImage(this.image,0,0,800,600)
        ctx.fillStyle = 'black'
        ctx.fillRect(0,400,800,200)
        ctx.drawImage(enemy.image,enemy.spritePixelIndex[0],enemy.spritePixelIndex[1],enemy.spritePixelWidth,enemy.spritePixelHeight,100,100,enemy.width*1.5,enemy.height*1.5)
    }
}
export default BattleUI