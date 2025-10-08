//OOP

// 1. Inheritance 
// 2. encapsulation 
// 3. Abstraction
// 4. Polymorphism

// INHERITANCE

class Animal {
    name: string;

    constructor(name : string){
        this.name = name;
    }

    sleep () {
        return `${this.name} is sleeping `
    }

    eat(){
        return`${this.name} is eating`
    }
}

const tiger = new Animal ("tiger");
console.log(tiger.name);
console.log(tiger.eat());
console.log(tiger.sleep());


class panda extends Animal {
    isJump : boolean;
    takingBamboo (){
        return `${this.name} taking bamboo`
    }

    constructor(name : string , isJump : boolean){
        super(name);
        this.isJump = isJump;
    }
}

const raul = new panda("raul", true)

console.log(raul.takingBamboo())
console.log(raul.isJump)



//ENCAPSULATION

class BankAccount {
    owner: string
    balance: number
    #nik : number 
    static address : string = "indonesia"

    constructor(owner: string, balance: number, nik: number){
        this.owner = owner;
        this.balance = balance;
        this.#nik = nik; //Private
    }

    get maskedNik () {
        const nikString = this.#nik.toString();
        const censoredNik = nikString.slice (-5). padStart(nikString.length, "#")
        return censoredNik; 
    }
    
    set updateNik(newNik : number)  {
        if (String(newNik).length === 16){
            this.#nik = newNik;
        }
    }
}



const tono = new BankAccount("Tono", 50_000, 232312312124123123213)
const juned = new BankAccount("juned", 150_000, 3283291923131)

//public methor/property - semua orang bisa akses dan edit

console.log(tono)
console.log(juned)

//PRIVATE 

console.log(tono.maskedNik)
console.log(juned.maskedNik)


// Getter & Setter



//static 
console.log(BankAccount.address)

//intance of