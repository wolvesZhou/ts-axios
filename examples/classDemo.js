class GreeterClass {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter = new GreeterClass("world");
greeter.greet();
// 继承
class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}
class Snake extends AnimalClass {
    constructor(name) {
        super(name);
    }
    move(distance = 5) {
        console.log("Slithering...");
        super.move(distance);
    }
}
class Horse extends AnimalClass {
    constructor(name) {
        super(name);
    }
    move(distance = 10) {
        console.log("Galloping...");
        super.move(distance);
    }
}
const sam = new Snake("Sam");
const tom = new Horse("Tom");
sam.move();
sam.move(10);
// private protect
class AnimalPrivate {
    constructor(name) {
        this.name = name;
    }
}
class Rhino extends AnimalPrivate {
    constructor() {
        super("Bob");
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
}
let Bob = new Rhino();
// Bob.name
let Boss = new AnimalPrivate("Boss");
// Boss.name
let Lucy = new Employee("Lucy");
// Boss = Bob
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    desc() {
        return `my name is ${this.name}, im ${this.age} years old`;
    }
}
// readonly
class ClassReadonly {
    constructor(name) {
        this.name = name;
    }
}
