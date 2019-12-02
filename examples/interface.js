var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.log(createSquare({ color: 'black', width: 1000 }));
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
// 索引类型
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myReadArray = ['123', '345'];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('be be be');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('ha ha ha');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 6);
var analog = createClock(AnalogClock, 5, 7);
console.log('digital', digital);
console.log('analog', analog);
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = (function (start) {
    });
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
