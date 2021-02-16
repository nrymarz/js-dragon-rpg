class Enemy{
    constructor(){
        this.x = Math.floor(Math.random()*600)
        this.y = Math.floor(Math.random()*400)
        this.image = document.createElement('img')
        this.image.src = "./lib/images/DAGRONS5.png"
    }

    draw(ctx){
        ctx.drawImage(this.image,this.spritePixelIndex[0],this.spritePixelIndex[1],this.spritePixelWidth,this.spritePixelHeight,this.x,this.y,this.width,this.height)
    }
}


class EasyEnemy extends Enemy{
    constructor(){
        super()
        this.width = 100
        this.height = 100
        this.spritePixelIndex=[0,160]
        this.spritePixelWidth = 100
        this.spritePixelHeight = 100
    }
}

class MediumEnemy extends Enemy{
    constructor(){
        super()
        this.width = 125
        this.height = 180
        this.spritePixelIndex=[0,0]
        this.spritePixelWidth = 100
        this.spritePixelHeight = 150
    }
}

class HardEnemy extends Enemy{
    constructor(){
        super()
        this.width = 150
        this.height = 225
        this.spritePixelIndex=[200,0]
        this.spritePixelWidth = 100
        this.spritePixelHeight = 110
    }
}

class VeryHardEnemy extends Enemy{
    constructor(){
        super()
        this.width = 400
        this.height = 300
        this.spritePixelIndex=[100,280]
        this.spritePixelWidth = 200
        this.spritePixelHeight = 150
    }
}

class Boss{
    constructor(x,y){
        this.x = x
        this.y = y

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
        ctx.drawImage(this.images[this.imageIndex],0,0,200,150,this.x,this.y,400,300)
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