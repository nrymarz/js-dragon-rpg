import {Attack} from "./abilites.js"

class Enemy{
    constructor(){
        this.x
        this.y
        this.image = document.createElement('img')
        this.image.src = "./lib/images/DAGRONS5.png"
        this.abilities = [new Attack()]
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
    }

    fight(player){
        let ability = this.abilities[Math.floor(Math.random()*this.abilities.length)]
        this.abilities[0].use(this,player)
        return ability
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
    }
}

class Boss{
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 525
        this.height = 312

        const boss1Image = document.createElement('img')
        boss1Image.src = "./lib/images/Boss1.png"
        const boss2Image = document.createElement('img')
        boss2Image.src = "./lib/images/Boss2.png"
        const boss3Image = document.createElement('img')
        boss3Image.src = "./lib/images/Boss3.png"

        this.images = [boss1Image,boss2Image,boss3Image]
        this.imageIndex = 0
        this.frame = 0 

    }

    draw(ctx){
        ctx.drawImage(this.images[this.imageIndex],0,0,175,104,this.x,this.y,this.width,this.height)
    }

    animate(){
        this.frame++
        if(this.frame % 15 === 0){
            this.imageIndex +=1
            if(this.imageIndex === 3){
                this.imageIndex = 0
            }
        }
        requestAnimationFrame(this.animate.bind(this))
    }
}

export {EasyEnemy, MediumEnemy,HardEnemy,VeryHardEnemy,Boss}