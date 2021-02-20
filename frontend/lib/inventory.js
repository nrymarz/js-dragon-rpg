import {HealthPotion, ManaPotion} from './items.js'

class Inventory {
    constructor(){
        this.healthPotions = 0
        this.manaPotions = 0
        this.image = document.createElement("img")
        this.image.src = './lib/images/GUI 2.png'
        this.selectedPotionIndex = 0
        this.lockOut = false
    }

    draw(ctx,player){
        ctx.drawImage(this.image,0,0,1350,1000,100,100,600,400)
        ctx.drawImage(player.img,0,0,16,32,500,150,80,100)

        ctx.fillStyle = "blue"
        ctx.fillRect(135,150 + (150*this.selectedPotionIndex),100,100)

        ctx.drawImage(new HealthPotion().image,130,150,100,100)
        ctx.drawImage(new ManaPotion().image,130,300,100,100)

        ctx.font = '20px Comic Sans MS'
        ctx.fillStyle = "black"
        ctx.fillText("Stats",515,260)
        ctx.fillText("----------",515,280)
        ctx.fillText("Level:" + player.level,515,300)
        ctx.fillText("HP:" + player.hp + '/' + player.maxHp,515,320)
        ctx.fillText("Mana:" + player.mana + '/' + player.maxMana,515,340)
        ctx.fillText("XP:" + player.xp + '/' + player.xpRequired,515,360 )
        ctx.fillText("Attack:" + player.attack,515,380)
        ctx.fillText("Spell Power:" + player.spellPower,515,400)
        ctx.fillText(new HealthPotion().description,140,275)
        ctx.fillText(new ManaPotion().description,140,425)

        ctx.font = '30px Comic Sans MS'
        ctx.fillText(`X ${this.healthPotions}`,240,225)
        ctx.fillText(`X ${this.manaPotions}`,240,375)
    }

    update(keysDown){
        if("s" in keysDown){this.selectedPotionIndex = 1}
        if("w" in keysDown){this.selectedPotionIndex = 0}
        if("Enter" in keysDown && !this.lockOut){
            if(this.selectedPotionIndex === 0 && this.healthPotions>0){
                new HealthPotion().use(player)
                this.healthPotions--
            }
            if(this.selectedPotionIndex === 1 && this.manaPotions.length>0){
                new ManaPotion().use(player)
                this.manaPotions--
            }
            this.lockOut = true
            setTimeout(() => this.lockOut = false,1000)
        }
    }

    addItem(item){
        if(item.name === "Health Potion"){this.healthPotions++}
        else{this.manaPotions++}
    }
}

export default Inventory