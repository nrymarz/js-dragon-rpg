class Item {
    constructor(){

    }
}

class HealthPotion extends Item {
    constructor(){
        this.image
    }

    description(){
        return "Restores 50 Health Points."
    }

    use(player){
        //player.hp += 50
    }
}