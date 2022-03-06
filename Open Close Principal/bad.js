class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }

  getRange() {
    let range = this.fuelCapacity * this.fuelEfficiency;

    if (this instanceof HeavyVehicle) {
      range += this.electricRange;
    }
    return range;
  }
}

class HeavyVehicle extends Vehicle {
  constructor(fuelCapacity, fuelEfficiency, electricRange) {
    super(fuelCapacity, fuelEfficiency);
    this.electricRange = electricRange;
  }
}

const standardVehicle = new Vehicle(10, 15);
const heavyVehicle = new HeavyVehicle(10, 15, 50);
console.log(standardVehicle.getRange());
console.log(heavyVehicle.getRange());
