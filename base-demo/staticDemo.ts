class Grid {
  static origin = { x: 0, y: 0 };

  scale: number;

  constructor(scale: number) {
    this.scale = scale;
  }

  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;

    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
  }
}

const GridOne = new Grid(5);
const GridTwo = new Grid(1);

console.log(GridOne.calculateDistanceFromOrigin({ x: 3, y: 4 }));
