class Inventory {
    constructor(){
        this.items = []
        this.image = document.createElement("img")
        this.image.src = './lib/images/GUI 2.png'
    }

    draw(ctx){
        ctx.drawImage(this.image,0,0,1350,1000,100,100,600,400)
    }
}

export default Inventory