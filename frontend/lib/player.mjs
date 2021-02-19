import { BasicAttack, StrongAttack, Fireball, FireStorm, Inferno } from "./abilites.js"

class Player{
    constructor(speed,x,y){
        this.level = 1
        this.maxHp = 100
        this.hp = 100
        this.maxMana = 50
        this.mana = 50
        this.attack = 10
        this.spellPower = 15
        this.xp = 0
        this.speed = speed
        this.x = x
        this.y = y
        this.img = document.createElement('img')
        this.img.src = 'lib/images/character.png'
        this.frameIndex = [0,0]
        this.frame = 0
        this.touchingEdge = false
        this.abilities = [new BasicAttack(this), new Fireball(this)]
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
        if(this.xp >= this.level*50) this.levelUp()
    }

    levelUp(){
        this.xp = this.xp - this.level*50
        this.level ++
        this.maxHp += 10*this.level
        this.maxMana +=  10*this.level
        this.attack += 4*this.level
        this.spellPower += 5*this.level
        this.hp = this.maxHp
        this.mana = this.maxMana
    }
   

}

export default Player