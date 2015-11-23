function Zoo() {
  var self = this;
  var animals = [];

  this.addAnimal = function addAnimal(animal) {
    animals.push(animal);
  }

  this.getAnimals = function getAnimals() {
    return animals;
  }

  this.removeAnimal = function removeAnimal(animal) {
    for (var i = 0; i < animals.length; i++) {
      if ( animals[i] == animal )
        animals.splice(i, 1);
    }
  }

}
