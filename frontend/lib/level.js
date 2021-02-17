import {EasyEnemy,MediumEnemy,HardEnemy,VeryHardEnemy,Boss} from './enemy.js'

class Level{
    constructor(width,height){
        this.width = width
        this.height = height
    }
}

class Level1 extends Level {
    constructor(width,height){
        super(width,height)
        this.background = document.createElement('img')
        this.background.src = './lib/images/Overworld.png'
        this.enemies = [new EasyEnemy(),new MediumEnemy()]
        this.enemies.forEach(enemy => this.spawnEnemy(enemy))
    }

    draw(ctx){
        let x = 0
        let y = 0
        while(x < this.width){
            while(y<this.height){
                ctx.drawImage(this.background,0,0,15,15,x,y,15,15)
                y+=15
            }
            y=0
            ctx.drawImage(this.background,0,0,15,15,x,y,15,15)
            x += 15
        }
        this.enemies.forEach(enemy => enemy.draw(ctx))
    }

    spawnEnemy(enemy){
        enemy.x = Math.floor(Math.random()*(800-enemy.width))
        enemy.y = Math.floor(Math.random()*(600-enemy.height))
        while(((enemy.x+enemy.width>300 && enemy.x<500) && (enemy.y+enemy.height>200 && enemy.y<400)) || enemy.isTouching(this.enemies)){
            enemy.x = Math.floor(Math.random()*(800-enemy.width))
            enemy.y = Math.floor(Math.random()*(600-enemy.height))
        }
    }
}

class BossLevel extends Level{
    constructor(width,height){
        super(width,height)
        this.background = document.createElement('img')
        this.background.src = './lib/images/Overworld.png'
        this.enemies = [new Boss(100,100)]
        this.enemies[0].animate()
    }

    draw(ctx){
        let x = 0
        let y = 0
        while(x < this.width){
            while(y<this.height){
                ctx.drawImage(this.background,0,0,15,15,x,y,15,15)
                y+=15
            }
            y=0
            ctx.drawImage(this.background,0,0,15,15,x,y,15,15)
            x += 15
        }
        this.enemies[0].draw(ctx)
    }
}


export {Level1, BossLevel}