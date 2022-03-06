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
    // voilating liskov principal as parent class is returning string and here we are returning boolean;
    //  voilating LSP: parent sleep() does not return boolean
    return true;
  }
}

class Cat extends Animal {
  eat() {
    return "Cat is eating now"; // return type string
  }

  sleep() {
    //  voilating LSP: parent sleep() doesn't use Error Exception
    throw new Error("Cat just slept");
  }
}
