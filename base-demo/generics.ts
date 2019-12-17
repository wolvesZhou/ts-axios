// 类型变量
function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// 泛型函数类型
interface GenericIdentityFn<T> {
  (arg: T): T;
}

const myIdentity: GenericIdentityFn<number> = identity;

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x: number, y: number) {
  return x + y;
};

const myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "23";
myGenericString.add = function(x: string, y: string) {
  return x + y;
};

// 泛型约束
interface lengthWise {
  length: number;
}

function genericLength<T extends lengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

function getProperty<T, k extends keyof T>(obj: T, key: k) {
  return obj[key];
}

function creatre<T>(c: { new (): T }): T {
  return new c();
}

class beeKeeper {
  hasMask: boolean;
}

class lionKeeper {
  tagName: string;
}

class animal {
  name: string;
}

class bee extends animal {
  keeper: beeKeeper;
}

class lion extends animal {
  keeper: lionKeeper;
}

function createInstance<T extends animal>(c: new () => T): T {
  return new c();
}

createInstance(bee).keeper.hasMask;
