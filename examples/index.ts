class User {
  firstName: string;
  lastName: string;
  fullName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function test(name: Person) {
  return `Hello ${name.firstName} ${name.lastName}`;
}

const value = new User('last', 'hhh');

console.log(test(value));

