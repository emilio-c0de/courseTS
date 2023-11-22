export {}

type Person = {
    name: string
    age:number
}

interface Employee extends Person {
    charge: string
}

const newEmployee:Employee = {
    charge: "ADMIN",
    name: "EMILIO",
    age: 23
}

//Union Types
type User = {
    id: number
}

type Admin = User & Person

const myAdmin:Admin = {
    id: 1,
    name: 'Juan',
    age:23
}

console.log(myAdmin)