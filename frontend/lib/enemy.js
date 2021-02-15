class Enemy{
    constructor(){
        this.x = Math.floor(Math.random()*600)
        this.y = Math.floor(Math.random()*400)
        this.image = document.createElement('img')
        this.image.src = "./lib/images/DAGRONS5.png"
    }
}


class EasyEnemy extends Enemy{
    constructor(){
        super()
    }

    draw(ctx){
        ctx.drawImage(this.image,0,160,100,100,this.x,this.y,100,100)
    }
}

class MediumEnemy extends Enemy{
    constructor(){
        super()
    }

    draw(ctx){
        ctx.drawImage(this.image,0,0,100,150,this.x,this.y,125,180)
    }
}

class HardEnemy extends Enemy{
    constructor(){
        super()
    }

    draw(ctx){
        ctx.drawImage(this.image,200,0,100,110,this.x,this.y,150,225)
    }
}

class VeryHardEnemy extends Enemy{
    constructor(){
        super()
    }

    draw(ctx){
        ctx.drawImage(this.image,100,280,200,150,this.x,this.y,400,300)
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