class Ship {
  constructor(size) {
    this.size = size
    this.hits = 0
    this.status = "available"
  }

  hitCount() {
    return this.hits
  }

  hitShip() {
    this.hits += 1
  }

  isSunk() {
    if (this.size == this.hits) {
      this.status = "sunk"
    } else {
      this.status = "available"
    }
  }
}

class Cell {
  constructor(index) {
    this.index = index
    this.hasShip = false
    this.wasHitted = false
  }
}

class Board {
  constructor(size = 10) {
    this.size = size
  }
}

class Player {
  construtor(name) {
    this.name = name
    this.type = ["human", "cpu"]
  }

  selectType(num) {
    this.name = this.name[num]
  }

  editName(name) {
    this.name = name
  }
}
