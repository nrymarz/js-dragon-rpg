import {HealthPotion, ManaPotion} from './items.js'

class Inventory {
    constructor(player){
        this.healthPotions = []
        this.manaPotions = []
        this.image = document.createElement("img")
        this.image.src = './lib/images/GUI 2.png'
        this.player = player
        this.selectedPotionIndex = 0
        this.lockOut = false
    }

    draw(ctx){
        ctx.drawImage(this.image,0,0,1350,1000,100,100,600,400)
        ctx.drawImage(this.player.img,0,0,16,32,500,150,80,100)

        ctx.fillStyle = "blue"
        ctx.fillRect(135,150 + (150*this.selectedPotionIndex),100,100)

        ctx.drawImage(new HealthPotion().image,130,150,100,100)
        ctx.drawImage(new ManaPotion().image,130,300,100,100)

        ctx.font = '20px Comic Sans MS'
        ctx.fillStyle = "black"
        ctx.fillText("Stats",515,260)
        ctx.fillText("----------",515,280)
        ctx.fillText("HP:" + this.player.hp,515,300)
        ctx.fillText("Mana:" + this.player.mana,515,320)
        ctx.fillText("XP:" + this.player.xp,515,340)
        ctx.fillText("Attack:" + this.player.attack,515,360)
        ctx.fillText("Spell Power:" + this.player.spellPower,515,380)
        ctx.fillText(new HealthPotion().description,140,275)
        ctx.fillText(new ManaPotion().description,140,445)

        ctx.font = '30px Comic Sans MS'
        ctx.fillText(`X ${this.healthPotions.length}`,240,225)
        ctx.fillText(`X ${this.manaPotions.length}`,240,375)
    }

    update(keysDown){
        if("s" in keysDown){this.selectedPotionIndex = 1}
        if("w" in keysDown){this.selectedPotionIndex = 0}
        if("Enter" in keysDown && !this.lockOut){
            if(this.selectedPotionIndex === 0 && this.healthPotions.length>0){
                this.healthPotions.pop().use(this.player)
            }
            if(this.selectedPotionIndex === 1 && this.manaPotions.length>0){
                this.manaPotions.pop().use(this.player)
            }
            this.lockOut = true
            setTimeout(() => this.lockOut = false,1000)
        }
    }

    addItem(item){
        if(item.name === "Health Potion"){this.healthPotions.push(item)}
        else{this.manaPotions.push(item)}
    }
}

export default Inventory