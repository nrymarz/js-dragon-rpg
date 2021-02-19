class Ability{
    constructor(user){
        this.user = user
        this.mana = 0 
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
        this.mana = 15
    }

    use(attacker,defender){
        defender.hp -= attacker.spellPower
        if (attacker.mana) attacker.mana -= this.mana
    }

    get damage(){
        return this.user.spellPower
    }
}

export {Attack, Fireball}