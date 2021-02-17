class BattleUI{
    constructor(player,enemy){
        this.player = player
        this.enemy = enemy
    }
    draw(ctx){
        ctx.fillStyle = 'black'
        ctx.fillRect(0,400,800,200)
    }
}
export default BattleUI