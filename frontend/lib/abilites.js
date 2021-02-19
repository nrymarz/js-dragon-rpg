class Ability{
    constructor(user){
        this.user = user
        this.mana = 0
    }
}

class Spell extends Ability{
    constructor(user){
        super(user)
        this.mana = 0
    }
    use(attacker,defender){
        defender.hp -= this.damage
        if(attacker.mana) attacker.mana -= this.mana
    }
}

class Attack extends Ability{
    constructor(user){
        super(user)
    }

    use(attacker,defender){
        defender.hp -= this.damage
    }

   
}

class BasicAttack extends Attack{
    constructor(user){
        super(user)
        this.name = "Basic Attack"
    }

    get damage(){
        return this.user.attack
    }
}

class StrongAttack extends Attack{
    constructor(user){
        super(user)
        this.name = "Strong Attack"
    }
    get damage(){
        return this.user.attack+10
    }

}

class Fireball extends Spell{
    constructor(user){
        super(user)
        this.name = "Fireball"
        this.mana = 15
    }

    get damage(){
        return this.user.spellPower
    }
}

class FireStorm extends Spell{
    constructor(user){
        super(user)
        this.name = "Firestorm"
        this.mana = 30
    }

    get damage(){
        return this.user.spellPower*1.5
    }

}

class Inferno extends Spell{
    constructor(user){
        super(user)
        this.name = "Firestorm"
        this.mana = 30
    }

    get damage(){
        return this.user.spellPower*2
    }
}

export {BasicAttack, StrongAttack, Fireball, FireStorm, Inferno}