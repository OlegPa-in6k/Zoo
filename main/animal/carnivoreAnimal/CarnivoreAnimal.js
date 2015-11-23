function CarnivoreAnimal(name, type, eatTime, activity, size){
  Animal.apply(this, arguments);
  this.voice = "CarnivoreAnimal voice";
}

CarnivoreAnimal.prototype = Object.create(Animal.prototype);
CarnivoreAnimal.prototype.constructor = CarnivoreAnimal;
