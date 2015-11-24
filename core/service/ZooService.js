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

  this.getHerbivoreAnimals = function getHerbivoreAnimals(animals) {
    var herbivoreAnimals = [];
    for (var j = 0; j < animals.length; j++) {
      if(animals[j] instanceof HerbivoreAnimal ) {
        herbivoreAnimals.push(animals[j]);
      }
    }
    return herbivoreAnimals;
  }

  this.getCarnivoreAnimals = function getCarnivoreAnimals(animals) {
    var carnivoreAnimals = [];
    for (var k = 0; k < animals.length; k++) {
      if(animals[k] instanceof CarnivoreAnimal ) {
        carnivoreAnimals.push(animals[k]);
      }
    }
    return carnivoreAnimals;
  }

  // this.eatAnimal = function eatAnimal(animal) {
  //     if(animal instanceof HerbivoreAnimal) {
  //       self.removeAnimal(animal);
  //     } else {
  //       if (animals.getHerbivoreAnimals.lenght > 0) {
  //
  //       }
  //     }
  // }



}
