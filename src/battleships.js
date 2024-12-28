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
  constructor(col, row) {
    this.col = col
    this.row = row
    this.index = col * 10 + row
    this.hasShip = false
    this.wasHitted = false
  }

  putShip() {
    this.hasShip = true
  }
}

class Board {
  constructor(size = 10) {
    this.size = size
    this.board = []
  }

  buildBoard() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const cell = new Cell(i, j)
        this.board.push(cell)
      }
    }
  }

  placeShip(index) {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < index.length; j++) {
        if (this.board[i].index == index[j]) {
          this.board[i].putShip()
        }
      }
    }
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

const board = new Board
board.buildBoard()

board.placeShip([0, 1, 2, 3, 4])

