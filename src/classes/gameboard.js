class Gameboard {
  constructor() {
    this.grid = [];
    this.missedHits = 0
    this.hits = 0
  }


  receiveAttack(ship) {
    if (ship === true) {
      this.hits += 1;
    } else {
      this.missedHits += 1;
    }
  }

  buildBoard() {
    const xAxis = []
    const yAxis = []
    let xFirst = "A".charCodeAt(0)
    let xLast = "J".charCodeAt(0)

    for (; xFirst <= xLast; xFirst++) {
      xAxis.push(String.fromCharCode(xFirst));
    }

    for (let i = 1; i <= 10; i++) {
      yAxis.push(i)
    }

    for (let i = 0; i < xAxis.length; i++) {
      for (let j = 0; j < yAxis.length; j++) {
        const cell = new Cell(xAxis[i] + yAxis[j])
        this.grid.push(cell)
      }
    }
  }

  render() {
    return this.grid;
  }

}

class Cell {
  constructor(index) {
    this.index = index
    this.hasShip = false
    this.isMarked = false
  }

  putShip() {
    this.hasShip = true
  }

  marking() {
    this.isMarked = true
  }

  get cellState() {
    return {
      index: this.index,
      hasShip: this.hasShip,
      isMarked: this.isMarked
    }
  }
}

export { Gameboard, Cell }
