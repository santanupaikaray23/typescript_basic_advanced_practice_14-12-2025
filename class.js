var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created:' + this.name);
    }
    return User;
}());
var user = new User('Uma', 'uma@gmail.com', 38);
console.log(user);
