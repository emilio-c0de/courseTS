interface People {
    name: string
    code: string|number
    charge:number
    description?: string
    sayHello: ()=> string
}

let people:People = {
    name: 'Emilio',
    code: '01',
    charge: 1,
    sayHello() {
        return 'Hello'
    },
}
console.log(people.description)