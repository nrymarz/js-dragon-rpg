import {EasyEnemy,MediumEnemy,HardEnemy,VeryHardEnemy,Boss} from './enemy.js'

class Level1 {
    constructor(width,height){
        this.background = document.createElement('img')
        this.background.src = './lib/images/Overworld.png'
        this.width = width
        this.height = height
        this.enemies = [new EasyEnemy(), new MediumEnemy()]
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
        while(((enemy.x+enemy.width>300 && enemy.x<500) && (enemy.y+enemy.height>200 && enemy.y<400))){
            enemy.x = Math.floor(Math.random()*(800-enemy.width))
            enemy.y = Math.floor(Math.random()*(600-enemy.height))
            debugger
        }
    }
}

export default Level1