class Car {
  constructor(maker, model) {
    this.maker = maker;
    this.model = model;
  }

  start() {
    // Logic to determine whether or not the car should start
    if (false) {
      this.errorLog(`this car ${this.maker} ${this.model} started`);
      return true;
    }
    Error.log(`this car ${this.maker} ${this.model} failed `);
    return false;
  }

  errorLog(message) {
    console.log(message);
  }
}
