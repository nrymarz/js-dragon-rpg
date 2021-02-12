class Player{
    constructor(speed,x,y){
        this.speed = speed
        this.x = x
        this.y = y
        this.img = document.createElement('img')
        this.img.src = 'lib/images/character.png'
        this.frameIndex = [0,0]
    }
    
    draw(ctx){
        ctx.drawImage(this.img,this.frameIndex[0]*16,this.frameIndex[1]*32,16,32,this.x,this.y,40,50)
    }

    update(modifier,keysDown){
        if('w' in keysDown){
            this.y -= this.speed * modifier
            this.frameIndex[1] = 2
        }
    
        if('s' in keysDown){
            this.y += this.speed * modifier
            this.frameIndex[1] = 0
        }
    
        if('a' in keysDown){
            this.x -= this.speed * modifier
            this.frameIndex[1] = 3
        }
    
        if('d' in keysDown){
            this.x += this.speed * modifier
            this.frameIndex[1] = 1
        }
    }

    beginAnimation(){
        let frame = 0;
        setInterval( ()=>{
            frame++
            this.frameIndex[0] = frame % 4
        },200)
    }

}

export default Player