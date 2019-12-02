// 交叉类型
function extendFunc<T, U>(firstValue: T, secondValue: U): T & U {
  let result = {} as T & U;

  for (let i in firstValue) {
    result[i] = firstValue[i] as any;
  }

  for (let i in secondValue) {
    if (!result.hasOwnProperty(i)) {
      result[i] = secondValue[i] as any;
    }
  }

  return result;
}

class PersonDemo {
  constructor(public name: string) {
    this.name = name;
  }
}

interface logged {
  log(): void;
}

class DemoValue implements logged {
  log() {
    console.log(123);
  }
}

const crossValue = extendFunc(new PersonDemo("zzz"), new DemoValue());
crossValue.log();
crossValue.name;

// 联合类型
function padleft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
}

// 类型保护
interface chicken {
  cooing(): void;
  layegg(): void;
}

interface bird {
  fly(): void;
  layegg(): void;
}

function getSmallPet(type: string): bird | chicken {
  if (type === "123") {
    return {} as bird;
  } else {
    return {} as chicken;
  }
}

function isBird(pet: chicken | bird): pet is bird {
  return (pet as bird).fly !== undefined;
}

const pet = getSmallPet("122");

if (isBird(pet)) {
  pet.fly();
} else {
  pet.cooing();
}

// 可以为null
function broken(name: string | null): string {
  function postFix(epithet: string) {
    return `${name!.charAt(0)} . the ${epithet}`;
  }

  name = name || "bob";
  return postFix(name);
}

broken(null);
