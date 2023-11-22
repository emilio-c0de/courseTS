export {}
type PersonCustom ={
    name: string
    code: string
    description?: string    
}

const newPerson: PersonCustom = {
    code: 'H',
    name: 'Emilio'
}

type ServiceResponse = string | null | number | undefined;
type UserCharges = 'admin'|'normal' | 'superUser'
let responseSvc: ServiceResponse;

let myUserType: UserCharges = 'superUser';
console.log(myUserType)
