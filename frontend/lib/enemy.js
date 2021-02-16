class Enemy{
    constructor(){
        this.x = Math.floor(Math.random()*600)
        this.y = Math.floor(Math.random()*400)
        this.image = document.createElement('img')
        this.image.src = "./lib/images/DAGRONS5.png"
    }

    draw(ctx){
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.spritePixelIndex[0],this.spritePixelIndex[1],this.spritePixelWidth,this.spritePixelHeight,this.x,this.y,this.width,this.height)
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