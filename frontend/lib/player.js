import { BasicAttack, StrongAttack, Fireball, FireStorm, Inferno } from "./abilites.js"

class Player{
    constructor(speed,x,y){
        this.level = 1
        this.hp = 110
        this.mana = 50
        this.xp = 0
        this.speed = speed
        this.x = x
        this.y = y
        this.img = document.createElement('img')
        this.img.src = 'lib/images/character.png'
        this.frameIndex = [0,0]
        this.frame = 0
        this.touchingEdge = false
    }
    
    draw(ctx){
        ctx.drawImage(this.img,this.frameIndex[0]*16,this.frameIndex[1]*32,16,32,this.x,this.y,40,50)
    }
    
    update(modifier,keysDown){
        if('w' in keysDown){
            this.y -= this.speed * modifier
            if (this.y<-20) this.touchingEdge = true
            this.frameIndex[1] = 2
        }
    
        if('s' in keysDown){
            this.y += this.speed * modifier
            if (this.y>570) this.touchingEdge = true
            this.frameIndex[1] = 0
        }
    
        if('a' in keysDown){
            this.x -= this.speed * modifier
            if (this.x<-20) this.touchingEdge = true
            this.frameIndex[1] = 3
        }
    
        if('d' in keysDown){
            this.x += this.speed * modifier
            if (this.x>780) this.touchingEdge = true
            this.frameIndex[1] = 1
        }
    }

    isTouchingEnemies(enemies){
        return enemies.find(enemy =>{
            return(this.x+40>enemy.x && this.x<enemy.x+enemy.width)
            &&(this.y+50>enemy.y && this.y<enemy.y+enemy.height)
        })
    }

    isTouchingItem(item){
        if(item){
            return((this.x+40>item.x && this.x<item.x+50)
                &&(this.y+50>item.y && this.y<item.y+50))
        }
    }

    animate(){
        this.frame++
        if(this.frame % 5 === 0){
            this.frameIndex[0] +=1
            if(this.frameIndex[0] === 4)this.frameIndex[0] = 0
        }
        requestAnimationFrame(this.animate.bind(this))
    }

    get xpRequired(){
        return this.level*50
    }

    checkLevelUp(){
        if(this.xp >= this.xpRequired) this.levelUp()
    }

    levelUp(){
        this.xp = this.xp - this.xpRequired
        this.level++
        this.hp = this.maxHp
        this.mana = this.maxMana
    }

    get attack(){
        return (this.level + (this.level-1))*2 + 8 
    }

    get maxHp(){
        return 20*(this.level + (this.level-1)) + 90
    }

    get maxMana(){
        return (this.level + (this.level-1))*10 + 40
    }

    get spellPower(){
        return (this.level + (this.level-1))*2.5 + 12.5
    }

    get abilities(){
        if(this.level<3) return [new BasicAttack(this),new Fireball(this)]
        if(this.level<5) return [new BasicAttack(this),new Fireball(this),new FireStorm(this)]
        if(this.level<7) return [new BasicAttack(this),new Fireball(this),new FireStorm(this), new StrongAttack(this)]
        else return [new BasicAttack(this),new Fireball(this),new FireStorm(this), new StrongAttack(this), new Inferno(this)]
    }
   

}

export default Player