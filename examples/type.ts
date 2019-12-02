let x: number[] = [1, 2, 3]
let y: Array<number> = [1, 2, 3];

enum Color {
  Red = 1,
  Green = 3,
  Blue = 5
}

let colorName: string = Color[2]

console.log(colorName)

let someValue: any = 'this is a string';
let stringLength = (someValue as string).length;