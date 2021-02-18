class Inventory {
    constructor(){
        this.items = []
        this.image = document.createElement("img")
        this.image.src = './lib/images/GUI 2.png'
    }

    draw(ctx,player){
        ctx.drawImage(this.image,0,0,1350,1000,100,100,600,400)
        ctx.drawImage(player.img,0,0,16,32,500,150,80,100)
        ctx.font = '20px Comic Sans MS'
        ctx.fillText("Stats",515,260)
        ctx.fillText("-------",515,280)
        ctx.fillText("HP:" + player.hp,515,300)
        ctx.fillText("Mana:" + player.mana,515,320)
        ctx.fillText("XP:" + player.xp,515,340)
        ctx.fillText("Attack:" + player.attack,515,360)
        ctx.fillText("Spell Power:" + player.spellPower,515,380)
    }
}

export default Inventory