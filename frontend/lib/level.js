class Level {
    constructor(background,width,height){
        this.background = document.createElement('img')
        this.background.src = background
        this.width = width
        this.height = height
    }

    draw(ctx){
        let pat = ctx.createPattern(this.background,'repeat')
        ctx.rect(0,0,this.width, this.height)
        ctx.fillStyle = pat
        ctx.fill()
    }
}

export default Level