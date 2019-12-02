// 交叉类型
function extendFunc(firstValue, secondValue) {
    var result = {};
    for (var i in firstValue) {
        result[i] = firstValue[i];
    }
    for (var i in secondValue) {
        if (!result.hasOwnProperty(i)) {
            result[i] = secondValue[i];
        }
    }
    return result;
}
var PersonDemo = /** @class */ (function () {
    function PersonDemo(name) {
        this.name = name;
        this.name = name;
    }
    return PersonDemo;
}());
var DemoValue = /** @class */ (function () {
    function DemoValue() {
    }
    DemoValue.prototype.log = function () {
        console.log(123);
    };
    return DemoValue;
}());
var crossValue = extendFunc(new PersonDemo("zzz"), new DemoValue());
crossValue.log();
crossValue.name;
// 联合类型
function padleft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}
function getSmallPet(type) {
    if (type === "123") {
        return {};
    }
    else {
        return {};
    }
}
function isBird(pet) {
    return pet.fly !== undefined;
}
var pet = getSmallPet("122");
if (isBird(pet)) {
    pet.fly();
}
else {
    pet.cooing();
}
// 可以为null
function broken(name) {
    function postFix(epithet) {
        return name.charAt(0) + " . the " + epithet;
    }
    name = name || "bob";
    return postFix(name);
}
broken(null);
