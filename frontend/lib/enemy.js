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
        ctx.drawImage(this.image,200,0,100,110,this.x,this.y,100,150)
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
        this.image = document.createElement('img')
        this.image.src = "./lib/images/DAGRONS5.png"
    }

    draw(ctx){
        ctx.drawImage(this.image,100,280,200,150,this.x,this.y,400,300)
    }
}

export {EasyEnemy, MediumEnemy,HardEnemy,VeryHardEnemy,Boss}