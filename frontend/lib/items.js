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
        this.image = document.createElement('img')
        this.image.src = './lib/images/healthPotion.png'
    }

    description(){
        return "Restores 50 Health Points."
    }

    use(){
        this.player.hp += 50
    }
}

class ManaPotion extends Item {
    constructor(x,y){
        super(x,y)
        this.image = document.createElement('img')
        this.image.src = './lib/images/manaPotion.png'
    }

    description(){
        return "Restores 25 Mana."
    }

    use(){
        this.player.mana += 25
    }
}

export {HealthPotion, ManaPotion}