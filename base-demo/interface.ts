interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare;
}

console.log(createSquare({ color: 'black', width: 1000 }));

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, substring: string): boolean {
  const result = source.search(substring);
  return result > -1;
}

// 索引签名
// 数字索引的返回值必须是字符串索引返回值的子类型
interface StringArray {
  [index: number]: string
}

let myArray: StringArray

myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]

// 索引类型
class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  [x: string]: Animal

  [x: number]: Dog
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}

let myReadArray: ReadonlyStringArray = ['123', '345']

// 类类型
interface ClockInterface {
  tick()
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {

  }

  tick() {
    console.log('be be be')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {

  }

  tick() {
    console.log('ha ha ha')
  }
}

const digital = createClock(DigitalClock, 12, 6)
const analog = createClock(AnalogClock, 5, 7)
console.log('digital', digital)
console.log('analog', analog)


// 继承接口
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

// 混合类型
interface Counter {
  (start: number): string

  interval: number

  reset(): void
}

function getCounter(): Counter {
  let counter = (function (start: number) {

  }) as Counter

  counter.interval = 123;

  counter.reset = function () {

  }
  return counter
}

let c = getCounter()
c(10)

// 接口继承类

