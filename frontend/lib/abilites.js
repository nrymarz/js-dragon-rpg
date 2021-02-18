class Ability{
    constructor(){
    }
}

class Attack extends Ability{
    constructor(){
        super()
        this.name = "Attack"
    }

    use(attacker,defender){
        defender.hp -= attacker.attack
    }
}

export {Attack}