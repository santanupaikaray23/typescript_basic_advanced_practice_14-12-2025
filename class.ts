class User {
    name: string
    email: string
    age:number

    constructor(name:string,email:string,age:number){
        this.name=name;
        this.email=email;
        this.age=age;
        console.log('User created:' + this.name)
    }
}
let user = new User('Uma','uma@gmail.com',38)
console.log(user)