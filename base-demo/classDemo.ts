class GreeterClass {
  greeting: string;

  constructor(message: string) {
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
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Snake extends AnimalClass {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 5) {
    console.log("Slithering...");
    super.move(distance);
  }
}

class Horse extends AnimalClass {
  constructor(name: string) {
    super(name);
  }

  move(distance: number = 10) {
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
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Rhino extends AnimalPrivate {
  constructor() {
    super("Bob");
  }
}

class Employee {
  private name: string;

  constructor(name: string) {
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
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  private age: Number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  desc() {
    return `my name is ${this.name}, im ${this.age} years old`;
  }
}

// readonly
class ClassReadonly {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// 存取器
class Accessor {
  private _fullname: string;

  get fullName(): string {
    return this._fullname;
  }

  set fullName(newName: string) {
    this._fullname = name;
  }
}

let accessorDemo = new Accessor();
accessorDemo.fullName = "Bob";
if (accessorDemo.fullName) {
  console.log("asd");
}
