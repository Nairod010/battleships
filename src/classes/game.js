class Game {
  constructor() {
    this.phase = "setup"
  }

  switchToBattle() {
    this.phase = "battle"
  }

  placeShips(ship, gameboard) {
    for (let i = 0; i < ship.spot.length; i++) {
      for (let j = 0; j < gameboard.grid.length; j++) {
        if (ship.spot[i] === gameboard.grid[j].index) {
          gameboard.grid[j].putShip()
        }
      }
    }
  }

}

class Ship {
  constructor(length) {
    this.length = length
    this.hits = 0
    this.sunk = false
  }

  hit() {
    this.hits += 1
  }

  isSunk() {
    if (this.length == this.hits) {
      this.sunk = true
    }
  }
}

class Gameboard {
  constructor(board) {
    this.board = board
    this.ships = []
  }

  receiveAttack(cell) {
    if (cell.hasShip) {

    }
  }

}
