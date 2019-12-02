var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var GridOne = new Grid(5);
var GridTwo = new Grid(1);
console.log(GridOne.calculateDistanceFromOrigin({ x: 3, y: 4 }));
