class Player{
    constructor(speed,x,y){
        this.speed = speed
        this.x = x
        this.y = y
        this.img = document.createElement('img')
        this.img.src = 'lib/images/character.png'
        this.frameIndex = [0,0]
        this.frame = 0
    }
    
    draw(ctx){
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(this.x,this.y,40,50)
        ctx.drawImage(this.img,this.frameIndex[0]*16,this.frameIndex[1]*32,16,32,this.x,this.y,40,50)
    }
    
    update(modifier,keysDown){
        if('w' in keysDown){
            this.y -= this.speed * modifier
            if (this.y<-20) this.y = -20
            this.frameIndex[1] = 2
        }
    
        if('s' in keysDown){
            this.y += this.speed * modifier
            if (this.y>570) this.y = 570
            this.frameIndex[1] = 0
        }
    
        if('a' in keysDown){
            this.x -= this.speed * modifier
            if (this.x<-20) this.x = -20
            this.frameIndex[1] = 3
        }
    
        if('d' in keysDown){
            this.x += this.speed * modifier
            if (this.x>780) this.x = 780
            this.frameIndex[1] = 1
        }
    }

    isColliding(enemies){
        enemies.forEach(enemy =>{
            if(
                (this.x>enemy.x && this.x<enemy.x+enemy.width)
                &&(this.y>enemy.y && this.y<enemy.y+enemy.height)
            ){console.log("Enemy Collision")}
        })
    }

    animate(){
        this.frame++
        if(this.frame % 15 === 0){
            this.frameIndex[0] +=1
            if(this.frameIndex[0] === 4){
                this.frameIndex[0] = 0
            }
        }
        requestAnimationFrame(this.animate.bind(this))
    }
   

}

export default Player