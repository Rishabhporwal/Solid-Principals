class Animal {
  eat() {
    return "eating now"; // return type string
  }

  sleep() {
    return "sleeping now"; // return type string
  }
}

class Dog extends Animal {
  eat() {
    return "Dog is eating now"; // return type string
  }

  sleep() {
    return "Dog is already sleeping"; // return type string
  }
}

class Cat extends Animal {
  eat() {
    return "Cat is eating now"; // return type string
  }

  sleep() {
    return "Cat just slept"; // return type string
  }
}
