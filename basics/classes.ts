export {}
class Animal {
    public name: string
    private age: number
    protected identity: string
    constructor(){
        this.name = 'Generic Animal'
        this.age =1;
        this.identity ='ADNE'
    }
    
    sayHi(){
        console.log('Grrr')
    }
}

class Dog extends Animal {
    type: string
    constructor(){
        super()
        this.type = "Pastor Aleman"        
    }
}
const myAnimal:Animal = new Animal();
const myDog:Dog =  new Dog();
myAnimal.sayHi() 