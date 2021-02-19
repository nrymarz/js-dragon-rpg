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

class Fireball extends Ability{
    constructor(user){
        super(user)
        this.name = "Fireball"
    }

    use(attacker,defender){
        defender.hp -= attacker.spellPower
        if (attacker.mana) attacker.mana -= 15
    }

    get damage(){
        return this.user.spellPower
    }
}

export {Attack, Fireball}