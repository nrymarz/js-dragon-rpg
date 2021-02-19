class Item {
    constructor(x,y){
        this.x = x
        this.y = y
    }

    draw(ctx){
        ctx.drawImage(this.image,this.x,this.y,50,50)
    }
}

class HealthPotion extends Item {
    constructor(x,y){
        super(x,y)
        this.name = "Health Potion"
        this.image = document.createElement('img')
        this.image.src = './lib/images/healthPotion.png'
    }

    get description(){
        return "Restores 100 Health Points."
    }

    use(player){
        player.hp += 100
        if(player.hp > player.maxHp){player.hp = player.maxHp}
    }
}

class ManaPotion extends Item {
    constructor(x,y){
        super(x,y)
        this.name = "Mana Potion"
        this.image = document.createElement('img')
        this.image.src = './lib/images/manaPotion.png'
    }

    get description(){
        return "Restores 50 Mana."
    }

    use(player){
        player.mana += 50
        if(player.mana > player.maxMana){player.mana = player.maxMana}
    }
}

export {HealthPotion, ManaPotion}