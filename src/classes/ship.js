export default class Ship {
  constructor(size, spot) {
    this.size = size
    this.spot = spot
    this.isSunk = false
    this.gotHit = 0
  }

  sinkShip() {
    this.sinked = true
  }

  hit() {
    this.gotHit += 1
  }
}
