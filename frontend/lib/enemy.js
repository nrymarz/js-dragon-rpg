import {BasicAttack, StrongAttack, Fireball, FireStorm, Inferno} from "./abilites.js"

class Enemy{
    constructor(){
        this.x
        this.y
        this.image = document.createElement('img')
        this.image.src = "./lib/images/DAGRONS5.png"
        this.abilities = [new BasicAttack(this)]
    }

    draw(ctx){
        ctx.drawImage(this.image,this.spritePixelIndex[0],this.spritePixelIndex[1],this.spritePixelWidth,this.spritePixelHeight,this.x,this.y,this.width,this.height)
    }

    isTouching(enemies){
        return enemies.some(enemy => {
            return ((this.x+this.width>enemy.x && this.x<enemy.x+enemy.width)
            && (this.y+this.height>enemy.y && this.y<enemy.y+enemy.height)) && enemy !== this
        })
    }

    fight(player){
        let ability = this.abilities[Math.floor(Math.random()*this.abilities.length)]
        ability.use(this,player)
        return ability
    }
}


class EasyEnemy extends Enemy{
    constructor(){
        super()
        this.width = 50
        this.height = 85
        this.spritePixelIndex=[40,170]
        this.spritePixelWidth = 40
        this.spritePixelHeight = 70
        this.hp = 30
        this.attack = 15
        this.spellPower = 15
        this.xp = 20
    }
}

class MediumEnemy extends Enemy{
    constructor(){
        super()
        this.width = 90
        this.height = 130
        this.spritePixelIndex=[20,45]
        this.spritePixelWidth = 70
        this.spritePixelHeight = 85
        this.hp = 50
        this.attack = 18
        this.spellPower = 18
        this.xp = 40
    }
}

class HardEnemy extends Enemy{
    constructor(){
        super()
        this.width = 160
        this.height = 160
        this.spritePixelIndex=[220,25]
        this.spritePixelWidth = 80
        this.spritePixelHeight = 80
        this.hp = 100
        this.attack = 25
        this.spellPower = 30
        this.xp = 80
        this.abilities = [new StrongAttack(this), new Fireball(this)]
    }
}

class VeryHardEnemy extends Enemy{
    constructor(){
        super()
        this.width = 485
        this.height = 200
        this.spritePixelIndex=[105,295]
        this.spritePixelWidth = 185
        this.spritePixelHeight = 75
        this.hp = 200
        this.attack = 45
        this.spellPower = 55
        this.xp = 250
        this.abilities = [new StrongAttack(this), new Fireball(this), new FireStorm(this)]
    }
}

class Boss extends Enemy{
    constructor(x,y){
        super()
        this.x = x
        this.y = y
        this.width = 525
        this.height = 312

        this.hp = 800
        this.attack = 75
        this.spellPower = 100
        this.xp = 600

        const boss1Image = document.createElement('img')
        boss1Image.src = "./lib/images/Boss1.png"
        const boss2Image = document.createElement('img')
        boss2Image.src = "./lib/images/Boss2.png"
        const boss3Image = document.createElement('img')
        boss3Image.src = "./lib/images/Boss3.png"

        this.images = [boss1Image,boss2Image,boss3Image]
        this.imageIndex = 0
        this.frame = 0 

        this.abilities = [new StrongAttack(this), new FireStorm(this),new Inferno(this)]
    }

    draw(ctx){
        ctx.drawImage(this.images[this.imageIndex],0,0,175,104,this.x,this.y,this.width,this.height)
    }

    animate(){
        this.frame++
        if(this.frame % 15 === 0){
            this.imageIndex +=1
            if(this.imageIndex === 3)this.imageIndex = 0
        }
        requestAnimationFrame(this.animate.bind(this))
    }
}

export {EasyEnemy, MediumEnemy,HardEnemy,VeryHardEnemy,Boss}