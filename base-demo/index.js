var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
function test(name) {
    return "Hello " + name.firstName + " " + name.lastName;
}
var value = new User('last', 'hhh');
console.log(test(value));
