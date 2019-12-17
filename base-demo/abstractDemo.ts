abstract class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printName(): void {
    console.log(this.name);
  }

  abstract printMeeting(): void;
}

class technicalDepartment extends Department {
  constructor(name: string) {
    super(name);
  }

  printMeeting() {
    console.log("i can print");
  }

  reportMessage() {
    console.log("i can report");
  }
}
