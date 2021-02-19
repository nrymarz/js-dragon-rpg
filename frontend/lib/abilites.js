class Ability{
    constructor(user){
        this.user = user
    }
}

class Attack extends Ability{
    constructor(user){
        super(user)
        this.name = "Attack"
    }

    use(attacker,defender){
        defender.hp -= attacker.attack
    }

    get damage(){
        return this.user.attack
    }
}

export {Attack}