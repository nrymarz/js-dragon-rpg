import {EasyEnemy,MediumEnemy,HardEnemy,VeryHardEnemy,Boss} from './enemy.js'

class Level {
    constructor(background,width,height){
        this.background = document.createElement('img')
        this.background.src = background
        this.width = width
        this.height = height
        this.enemies = [new EasyEnemy(), new MediumEnemy(), new HardEnemy(), new VeryHardEnemy(),new Boss(200,200)]
    }

    draw(ctx){
        let pat = ctx.createPattern(this.background,'repeat')
        ctx.rect(0,0,this.width, this.height)
        ctx.fillStyle = pat
        ctx.fill()

        this.enemies.forEach(enemy => enemy.draw(ctx))
    }
}

export default Level