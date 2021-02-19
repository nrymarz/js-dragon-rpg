class Inventory {
    constructor(player){
        this.items = []
        this.image = document.createElement("img")
        this.image.src = './lib/images/GUI 2.png'
        this.player = player
    }

    draw(ctx){
        ctx.drawImage(this.image,0,0,1350,1000,100,100,600,400)
        ctx.drawImage(this.player.img,0,0,16,32,500,150,80,100)
        ctx.font = '20px Comic Sans MS'
        ctx.fillText("Stats",515,260)
        ctx.fillText("-------",515,280)
        ctx.fillText("HP:" + this.player.hp,515,300)
        ctx.fillText("Mana:" + this.player.mana,515,320)
        ctx.fillText("XP:" + this.player.xp,515,340)
        ctx.fillText("Attack:" + this.player.attack,515,360)
        ctx.fillText("Spell Power:" + this.player.spellPower,515,380)
    }
}

export default Inventory