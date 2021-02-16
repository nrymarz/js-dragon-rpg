import {EasyEnemy,MediumEnemy,HardEnemy,VeryHardEnemy,Boss} from './enemy.js'

class Level1 {
    constructor(width,height){
        this.background = document.createElement('img')
        this.background.src = './lib/images/Overworld.png'
        this.width = width
        this.height = height
        this.enemies = //[new EasyEnemy(), new MediumEnemy(), new HardEnemy()]
        [new Boss(0,0)]
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
        this.enemies.forEach(enemy => enemy.draw(ctx))
    }
}

export default Level1